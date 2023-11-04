'use client';

import { Navbar } from '@/components/organisms/navbar';
export default function App() {
    return (
        <main>
            <Navbar
                optionList={[
                    {
                        label: 'Sobre',
                        navigate: '#about',
                    },
                    {
                        label: 'Experiência',
                        navigate: '#experience',
                    },
                    {
                        label: 'Projetos',
                        navigate: '#project',
                    },
                ]}
                optionSelectedColor="ACCENTED"
                optionDontSelectedColor="PRIMARY"
            />
        </main>
    );
}
