import { FC } from 'react';
import BackgroundImage from "../../assets/new/img-seo.jpg"
import MainButton from '../common/MainButton';

const Generamos: FC = () => {
  return (
    <section className="relative w-full h-[30vh] md:h-[40vh] flex items-center justify-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.4]"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
      ></div>
      <div className="relative text-center px-4">
        <h1 className="text-3xl md:text-6xl font-extrabold leading-tight mx-auto">
          Generamos clientes cualificados, no seguidores.
        </h1>
        <div className="mt-6">
          <MainButton text="AGENDA TU ANÁLISIS GRATUITO" />
        </div>
      </div>
    </section>
  );
};

export default Generamos;