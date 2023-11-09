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
                        onPress: () => {},
                        iconLeftName: 'DEVOT',
                    },
                    {
                        onPress: () => {},
                        iconLeftName: 'DEVOT',
                    },
                    {
                        onPress: () => {},
                        iconLeftName: 'DEVOT',
                    },
                ],
                navbarOptionList: [
                    { label: 'Sobre', navigate: '#about ' },
                    { label: 'Experiência', navigate: '#experience ' },
                    { label: 'Projetos', navigate: '#project ' },
                ],
                getInTouchButton: {
                    label: 'Entre em contato',
                    onPress: () => {},
                },
            }}
        />
    );
}
