'use client';

import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { Default } from '@/components/templates/default';
import { Loading } from '@/components/templates/loading';

type IData = {
    name: string;
    description: string;
    html_url: string;
    topics: string[];
    owner: {
        login: string;
        avatar_url: string;
    };
};

type IDataUser = {
    name: string;
    bio: string;
};

export default function App() {
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const experienceRef = useRef(null);

    const [dataRepos, setDataRepos] = useState<IData[]>([]);
    const [dataUser, setDataUser] = useState<IDataUser | null>(null);
    const [dataPort, setDataPort] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const { data: dataRepo } = await axios.get(
                    'https://api.github.com/users/alefecruz/repos',
                );
                const { data: dataUser } = await axios.get(
                    'https://api.github.com/users/alefecruz',
                );
                const { data: dataPort } = await axios.get(
                    'https://raw.githubusercontent.com/alefecruz/alefecruz/main/portData.JSON',
                );
                setDataRepos(dataRepo as IData[]);
                setDataUser(dataUser);
                setDataPort(dataPort);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const handleScrollToSection = (ref) => {
        ref?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const [title, description] = dataUser ? dataUser.bio.split('-') : ['', ''];

    if (loading) return <Loading />;

    return (
        <Default
            myInfo={{
                logo: {
                    iconName: 'LOGO',
                    title: 'Hi! Im ' + dataUser?.name,
                },
                title,
                description,
                socialButtonList: [
                    {
                        onPress: () => {
                            window.open(
                                'https://www.linkedin.com/in/alefecruz/',
                                '_Blanck',
                            );
                        },
                        iconLeftName: 'LINKED_IN',
                    },
                    {
                        onPress: () => {
                            window.open(
                                'https://github.com/alefecruz',
                                '_Blanck',
                            );
                        },
                        iconLeftName: 'GIT_HUB',
                    },
                    {
                        onPress: () => {
                            window.open(
                                'https://discord.gg/43rztgGAsX',
                                '_Blanck',
                            );
                        },
                        iconLeftName: 'DISCORD',
                    },
                    {
                        onPress: () => {
                            window.open(
                                'https://www.instagram.com/alefecrz/',
                                '_Blanck',
                            );
                        },
                        iconLeftName: 'INSTAGRAM',
                    },
                ],
                navbarOptionList: [
                    {
                        label: 'ABOUT',
                        onClick: () => handleScrollToSection(aboutRef),
                    },
                    {
                        label: 'WORKS',
                        onClick: () => handleScrollToSection(experienceRef),
                    },
                    {
                        label: 'PROJECTS',
                        onClick: () => handleScrollToSection(projectRef),
                    },
                ],
                getInTouchButton: {
                    label: 'Getting in touch',
                    onPress: () => {
                        window.location.href = 'mailto:alefe@devot.com.br';
                    },
                },
                resumeButton: {
                    label: 'Resume',
                    onPress: () => {
                        window.open('/assets/images/default.png');
                    },
                },
            }}
            aboutSection={{
                aboutTitle: 'About',
                aboutRef,
                myPicture: {
                    source: dataRepos && dataRepos[0]?.owner?.avatar_url,
                    alt: 'Minha imagem',
                },
                scrollDown: 'Scroll Down',
                paragraphs: [
                    <p key="1">
                        I am Álefe Cruz, a Computer Engineer graduated from the
                        Escola Politécnica de Pernambuco (POLI - UPE), with over
                        5 years of experience in software development.
                        Currently, I am working as a Tech Lead and Senior Mobile
                        Developer, leading teams and projects that transform
                        innovative ideas into functional technological
                        solutions.
                    </p>,
                    <p key="2">
                        My journey in development began with a deep interest in
                        understanding how technology can solve real-world
                        problems. Since then, I have honed my skills by working
                        on projects ranging from mobile applications to complex
                        web platforms.
                    </p>,
                    <p key="3">
                        I love collaborating with multidisciplinary teams,
                        valuing the exchange of knowledge and creating robust
                        and efficient solutions. I am known for my analytical
                        and detail-oriented approach, ensuring that every line
                        of code contributes to a high-quality final product.
                        Additionally, I keep myself updated with the latest
                        industry trends and best practices by participating in
                        conferences, workshops, and online courses.
                    </p>,
                ],
            }}
            experienceSection={{
                experienceTitle: 'Works',
                experienceRef,
                experienceList: dataPort['PT_BR'].projects || [],
            }}
            projectSection={{
                projectTitle: 'Projects',
                projectRef,
                projectList: dataRepos
                    .filter(({ topics }) => topics.includes('show'))
                    .map(({ name, description, html_url, topics, owner }) => ({
                        title: name,
                        description: description,
                        tagList: topics.filter((topic) => topic !== 'show'),
                        projectImage: {
                            source: `https://raw.githubusercontent.com/${owner.login}/${name}/master/assets/logo.png`,
                            alt: name,
                        },
                        accessLink: {
                            label: 'See more',
                            navigate: html_url,
                        },
                    })),
            }}
        />
    );
}
