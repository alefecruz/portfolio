'use client';

import { useRef } from 'react';
// import { Logo } from '@/components/molecules/logo';
import { Default } from '@/components/templates/default';
export default function App() {
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const experienceRef = useRef(null);

    const handleScrollToSection = (ref) => {
        ref?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Default
            myInfo={{
                logo: {
                    iconName: 'DEVOT',
                    title: 'DEVOT',
                    description: 'LEVEL UP WITH US',
                },
                title: 'Álefe Cruz',
                subtitle: 'Dev Senior & Tech Leader',
                description: 'Descrição do trabalho em formato de frase.',
                socialButtonList: [
                    {
                        onPress: () => {
                            window.open(
                                'https://www.linkedin.com/in/alefecruz/',
                                '_Blanck',
                            );
                        },
                        iconLeftName: 'SETA',
                    },
                    {
                        onPress: () => {
                            window.open(
                                'https://github.com/alefecruz',
                                '_Blanck',
                            );
                        },
                        iconLeftName: 'DEVOT',
                    },
                    {
                        onPress: () => {},
                        iconLeftName: 'DEVOT',
                    },
                ],
                navbarOptionList: [
                    {
                        label: 'Sobre',
                        onClick: () => handleScrollToSection(aboutRef),
                    },
                    {
                        label: 'Experiência',
                        onClick: () => handleScrollToSection(experienceRef),
                    },
                    {
                        label: 'Projetos',
                        onClick: () => handleScrollToSection(projectRef),
                    },
                ],
                getInTouchButton: {
                    label: 'Entre em contato',
                    onPress: () => {},
                },
            }}
            aboutSection={{
                aboutTitle: 'Sobre',
                aboutRef,
                myPicture: {
                    source: 'https://avatars.githubusercontent.com/u/126995086?v=4',
                    alt: 'Minha imagem',
                },
                text: (
                    <>
                        <p>
                            Cras maximus nibh ac accumsan ultrices. Aliquam
                            auctor dolor leo, vel convallis neque iaculis quis.
                            Aenean eget varius quam. Donec faucibus interdum
                            nibh, et suscipit ante porta in. Vestibulum ante
                            ipsum primis in faucibus orci luctus et ultrices
                            posuere cubilia curae.
                        </p>
                        <br />
                        <p>
                            Vestibulum laoreet lacus et ornare venenatis.
                            Integer finibus dui ac odio dapibus, in feugiat urna
                            molestie. Vestibulum pretium eros risus, quis
                            bibendum purus vehicula non.
                        </p>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aenean dictum finibus metus, non lacinia nulla
                            tincidunt in. Vestibulum laoreet lacus et ornare
                            venenatis. Integer finibus dui ac odio dapibus, quis
                            bibendum purus vehicula non.
                        </p>
                    </>
                ),
            }}
            experienceSection={{
                experienceTitle: 'Experiência',
                experienceRef,
                experienceList: [
                    {
                        title: 'XPTO',
                        subtitle: 'Dev. Junior I',
                        iconName: 'DEVOT',
                        description:
                            'Cras maximus nibh ac accumsan ultrices. Aliquam auctor dolor leo, vel convallis neque iaculis quis. Aenean eget varius quam. Donec faucibus interdum nibh, et suscipit ante porta in. Aenean eget varius quam. Donec faucibus interdum nibh, et suscipit ante porta in.',
                        period: '1999 - 2001',
                        tagList: ['Java', 'C', 'MySQL'],
                    },
                    {
                        title: 'XPTO',
                        subtitle: 'Dev. Junior I',
                        iconName: 'DEVOT',
                        description:
                            'Cras maximus nibh ac accumsan ultrices. Aliquam auctor dolor leo, vel convallis neque iaculis quis. Aenean eget varius quam. Donec faucibus interdum nibh, et suscipit ante porta in. Aenean eget varius quam. Donec faucibus interdum nibh, et suscipit ante porta in.',
                        period: '1999 - 2001',
                        tagList: ['Java', 'C', 'MySQL'],
                    },
                ],
            }}
            projectSection={{
                projectTitle: 'Projetos',
                projectRef,
                projectList: [
                    {
                        title: 'XPTO',
                        description:
                            'Cras maximus nibh ac accumsan ultrices. Aliquam auctor dolor leo, vel convallis neque iaculis quis. Aenean eget varius quam. Donec faucibus interdum nibh, et suscipit ante porta in. Aenean eget varius quam. Donec faucibus interdum nibh, et suscipit ante porta in.',
                        tagList: ['Java', 'C', 'MySQL'],
                        projectImage: {
                            source: 'https://img.freepik.com/free-vector/gradient-grainy-texture_23-2148981502.jpg?w=826&t=st=1699919827~exp=1699920427~hmac=8b16a5044212058e0072313a35251d29039d9f1aadf6075ab9772e017b8ad44a',
                            alt: 'sei la',
                        },
                        accessLink: {
                            label: 'Ver mais',
                            navigate: 'http://www.google.com',
                        },
                    },
                    {
                        title: 'XPTO',
                        description:
                            'Cras maximus nibh ac accumsan ultrices. Aliquam auctor dolor leo, vel convallis neque iaculis quis. Aenean eget varius quam. Donec faucibus interdum nibh, et suscipit ante porta in. Aenean eget varius quam. Donec faucibus interdum nibh, et suscipit ante porta in.',
                        tagList: ['Java', 'C', 'MySQL'],
                        projectImage: {
                            source: 'https://img.freepik.com/free-vector/gradient-grainy-texture_23-2148981502.jpg?w=826&t=st=1699919827~exp=1699920427~hmac=8b16a5044212058e0072313a35251d29039d9f1aadf6075ab9772e017b8ad44a',
                            alt: 'sei la',
                        },
                        accessLink: {
                            label: 'Ver mais',
                            navigate: 'http://www.google.com',
                        },
                    },
                ],
            }}
        />
    );
}
