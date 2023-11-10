'use client';

// import { Logo } from '@/components/molecules/logo';
import { Default } from '@/components/templates/default';
export default function App() {
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
                    { label: 'Sobre', navigate: '#about' },
                    { label: 'Experiência', navigate: '#experience' },
                    { label: 'Projetos', navigate: '#project' },
                ],
                getInTouchButton: {
                    label: 'Entre em contato',
                    onPress: () => {},
                },
            }}
            aboutSection={{
                myPicture: {
                    source: 'https://avatars.githubusercontent.com/u/126995086?v=4',
                    alt: 'Minha imagem',
                },
                text: 'Cras maximus nibh ac accumsan ultrices. Aliquam auctor dolor leo, vel convallis neque iaculis quis. Aenean eget varius quam. Donec faucibus interdum nibh, et suscipit ante porta in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.                Vestibulum laoreet lacus et ornare venenatis. Integer finibus dui ac odio dapibus, in feugiat urna molestie. Vestibulum pretium eros risus, quis bibendum purus vehicula non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum finibus metus, non lacinia nulla tincidunt in. Vestibulum laoreet lacus et ornare venenatis. Integer finibus dui ac odio dapibus, in feugiat urna molestie. Vestibulum pretium eros risus, quis bibendum purus vehicula non. Aenean fringilla, felis eget sagittis convallis, ex justo vestibulum dui, vitae rutrum purus nisl vitae urna. Morbi cursus mi quis tortor rutrum, vel aliquet ante gravida. Aenean at hendrerit lorem',
            }}
        />
    );
}
