'use client';

import { Button } from '@/components/molecules/button';

export default function App() {
    return (
        <main>
            <Button
                format="OUTLINE_ACCENTED"
                size="XXSMALL"
                label="Entre em contato"
                onPress={() => {}}
                iconLeftName="DEVOT"
            />
            <Button
                format="OUTLINE_SECONDARY"
                size="XSMALL"
                label="Entre em contato"
                onPress={() => {}}
                iconLeftName="DEVOT"
                isStretch
            />
            <Button
                size="SMALL"
                format="OUTLINE_PRIMARY"
                label="Entre em contato"
                onPress={() => {}}
                iconLeftName="DEVOT"
            />
        </main>
    );
}
