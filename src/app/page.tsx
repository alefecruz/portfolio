'use client';

import { CardProject } from '@/components/organisms/card-project';
export default function App() {
    return (
        <main>
            <CardProject
                projectImage={{
                    alt: 'Default',
                    source: 'https://avatars.githubusercontent.com/u/98561479?v=4',
                }}
                accessLink={{
                    label: 'Ver mais',
                    navigate:
                        'https://github.com/Raissatkm/the-last-of-us-website',
                }}
                title="Organizações Tabajara"
                description="Cras maximus nibh ac accumsan ultrices. Aliquam auctor dolor leo, vel convallis neque iaculis quis. Aenean eget varius quam. Donec faucibus interdum nibh, et suscipit ante porta in. Aenean eget varius quam. Donec faucibus interdum nibh, et suscipit ante porta in."
                tagList={[
                    'Reactjs',
                    'Nextjs',
                    'Typescript',
                    'Styled Component',
                ]}
            />
        </main>
    );
}
