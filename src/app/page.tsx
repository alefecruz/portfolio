'use client';

import { Navbar } from '@/components/organisms/navbar';

export default function App() {
    return (
        <main>
            <Navbar
                optionList={[
                    {
                        label: 'Sobre',
                        isSelected: true,
                        onPress: () => {},
                    },
                    {
                        label: 'Experiência',
                        isSelected: false,
                        onPress: () => {},
                    },
                    {
                        label: 'Projetos',
                        isSelected: false,
                        onPress: () => {},
                    },
                    {
                        label: 'Sobre',
                        isSelected: false,
                        onPress: () => {},
                    },
                ]}
                optionSelectedColor="ACCENTED"
                optionDontSelectedColor="PRIMARY"
            />
        </main>
    );
}
