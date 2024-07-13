'use client';

import { useRef, useState } from 'react';
import { Default } from '@/components/templates/default';

import * as data from '@/data';
import { IIdioma } from '@/data/interfaces';

export default function App() {
    const [idioma, setIdioma] = useState<IIdioma>('PT_BR');
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const experienceRef = useRef(null);

    const handleScrollToSection = (ref: any) => {
        ref?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Default
            myInfo={{
                ...data.myInfo[idioma],
                navbarOptionList: [
                    {
                        label: data.about[idioma].aboutTitle,
                        onClick: () => handleScrollToSection(aboutRef),
                    },
                    {
                        label: data.works[idioma].experienceTitle,
                        onClick: () => handleScrollToSection(experienceRef),
                    },
                    {
                        label: data.projects[idioma].projectTitle,
                        onClick: () => handleScrollToSection(projectRef),
                    },
                ],
            }}
            settings={{
                idioma: {
                    initialIdioma: idioma,
                    onSelectIdioma: (value) => setIdioma(value),
                },
            }}
            aboutSection={{
                aboutRef,
                ...data.about[idioma],
            }}
            experienceSection={{
                experienceRef,
                ...data.works[idioma],
            }}
            projectSection={{
                projectRef,
                ...data.projects[idioma],
            }}
        />
    );
}
