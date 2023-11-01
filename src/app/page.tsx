'use client';

import { Tag } from '@/components/molecules/tag';

export default function App() {
    return (
        <main>
            <Tag label="ReactJs" />
            <Tag label="NextJs" color="PRIMARY" />
            <Tag label="Typescript" />
            <Tag label="Javascript" />
        </main>
    );
}
