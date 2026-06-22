import { useState } from "react";
import Globe from "react-globe.gl";

import Button from "../components/Button.jsx";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(" mohamed.diarra@epitech.eu");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const GlobeComponent = Globe as unknown as React.ComponentType<any>;

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/my3d.png"
              alt="avatar 3d"
              className="w-full sm:h-69 h-fit object-contain "
            />

            <div>
              <p className="grid-headtext">Salut, Je suis Mohamed Diarra</p>
              <p className="grid-subtext">
                Développeur web en pleine croissance, je transforme mes
                apprentissages quotidiens en projets concrets, modernes et
                responsives.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/rendu-3d-icone-interface.png"
              alt="rendu-3d-icone-interface"
              className="w-full sm:h-69 h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                Je me spécialise dans plusieurs langages, frameworks et outils
                pour construire des applications robustes et évolutives.
                Actuellement, je travaille avec Vue.js, React et Next.js en
                frontend, Laravel et NestJS en backend et je continue d'explorer
                de nouvelles technologies.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-81.5 h-fit flex justify-center items-center">
              <GlobeComponent
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 5.36,
                    lng: -4.0083,
                    text: "Abidjan, Côte d'Ivoire",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                Je m'adapte facilement aux différents fuseaux horaires et suis
                ouvert au travail à distance.
              </p>
              <p className="grid-subtext">
                Je suis basé à Abidjan, en Côte d'Ivoire, et ouvert au travail à
                distance partout dans le monde.
              </p>
              <a href="#contact" className="w-fit">
                <Button
                  name="Me contacter"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-66.5 h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Ma Passion pour le Code</p>
              <p className="grid-subtext">
                J'adore résoudre des problèmes et construire des choses grâce au
                code. La programmation n'est pas juste un apprentissage, c'est
                ma passion. J'aime explorer de nouvelles technologies et
                améliorer mes compétences chaque jour.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-31.5 sm:h-69 h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Me contacter</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  mohamed.diarra@epitech.eu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
