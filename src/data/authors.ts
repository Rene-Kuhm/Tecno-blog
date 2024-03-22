export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "René Kuhm",
    slug: "René Kuhm",
    image: "./src/assets/authors/rene.jpg",
    bio: "Soy un desarrollador Full Stack apasionado por la creación y optimización de aplicaciones web y móviles. Con habilidades en front-end y back-end, me especializo en convertir ideas complejas en soluciones digitales elegantes y eficientes. Mi experiencia abarca desde el diseño de interfaces de usuario hasta el desarrollo de servidores, bases de datos y la integración de API, utilizando tecnologías de vanguardia para construir software que no solo cumpla con los requisitos funcionales, sino que también ofrezca una experiencia de usuario excepcional.",
  },
];