import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setLoading(false);
        showAlert({
          text: "Merci pour votre message 😃",
          type: "success",
        });
        setTimeout(() => {
          hideAlert();
          setForm({ name: "", email: "", message: "" });
        }, 3000);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        showAlert({
          text: "Je n'ai pas reçu votre message 😢",
          type: "danger",
        });
      });
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal-bg"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Parlons-en</h3>
          <p className="text-lg text-white-600 mt-3">
            Que vous souhaitiez créer un nouveau site, améliorer votre
            plateforme existante ou donner vie à un projet unique, je suis là
            pour vous aider.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Nom complet</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., Gongoua Bile"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Adresse email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., gongouabile@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Votre message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Partagez vos idées ou questions..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Envoi en cours..." : "Envoyer le message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
