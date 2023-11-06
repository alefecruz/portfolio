'use client';

import { CardExperience } from '@/components/organisms/card-experience';
export default function App() {
    return (
        <main>
            <CardExperience
                period="2022 - present"
                title="Organizações Tabajara"
                subtitle="Dev Junior I"
                description="Cras maximus nibh ac accumsan ultrices. Aliquam auctor dolor leo, vel convallis neque iaculis quis. Aenean eget varius quam. Donec faucibus interdum nibh, et suscipit ante porta in. Aenean eget varius quam. Donec faucibus interdum nibh, et suscipit ante porta in."
                iconName="DEVOT"
                tagList={['Reactjs', 'Styled-Component', 'Nextjs']}
            />
            <CardExperience
                period="2022 - present"
                title="Organizações Tabajara"
                subtitle="Dev Junior I"
                description="Cras maximus nibh ac accumsan ultrices. Aliquam auctor dolor leo, vel convallis neque iaculis quis. Aenean eget varius quam. Donec faucibus interdum nibh, et suscipit ante porta in. Aenean eget varius quam. Donec faucibus interdum nibh, et suscipit ante porta in."
                iconName="DEVOT"
                tagList={['Reactjs', 'Styled-Component', 'Nextjs']}
            />
        </main>
    );
}
