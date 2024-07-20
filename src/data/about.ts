import { IAboutData } from './interfaces';

const myPicture = '/assets/images/myPicture.png';

export const about: IAboutData = {
    PT_BR: {
        aboutTitle: 'Sobre',
        myPicture: {
            source: myPicture,
            alt: 'minha imagem',
            sizeWidth: 30,
        },
        paragraphs: [
            'Sou Álefe Cruz, engenheira de Computação formada pela Escola Politécnica de Pernambuco (POLI - UPE), com mais de 5 anos de experiência em desenvolvimento de software. Atualmente, atuo como Tech Lead e Senior Mobile Developer, liderando equipes e projetos que transformam ideias inovadoras em soluções tecnológicas funcionais.',
            'Minha jornada no desenvolvimento começou com um profundo interesse em compreender como a tecnologia pode resolver problemas do mundo real. Desde então, aprimorei minhas habilidades trabalhando em projetos que vão desde aplicativos móveis até plataformas web complexas.',
            'Adoro colaborar com equipes multidisciplinares, valorizando a troca de conhecimento e criando soluções robustas e eficientes. Sou conhecido pela minha abordagem analítica e detalhista, garantindo que cada linha de código contribua para um produto final de alta qualidade. Além disso, me mantenho atualizado com as últimas tendências e melhores práticas do setor, participando de conferências, workshops e cursos online.',
        ],
    },
    EN_US: {
        aboutTitle: 'About',
        myPicture: {
            source: myPicture,
            alt: 'minha imagem',
            sizeWidth: 30,
        },
        paragraphs: [
            'I am Álefe Cruz, a Computer Engineer graduated from the Escola Politécnica de Pernambuco (POLI - UPE), with over 5 years of experience in software development. Currently, I am working as a Tech Lead and Senior Mobile Developer, leading teams and projects that transform innovative ideas into functional technological solutions.',
            'My journey in development began with a deep interest in understanding how technology can solve real-world problems. Since then, I have honed my skills by working on projects ranging from mobile applications to complex web platforms.',
            'I love collaborating with multidisciplinary teams, valuing the exchange of knowledge and creating robust and efficient solutions. I am known for my analytical and detail-oriented approach, ensuring that every line of code contributes to a high-quality final product. Additionally, I keep myself updated with the latest industry trends and best practices by participating in conferences, workshops, and online courses.',
        ],
    },
};
