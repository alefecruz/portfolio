'use client';

import { useState } from 'react';
import { LinkTree as LinkTreeTemplate } from '@/components/templates/link-tree';
import * as data from '@/data';
import { IIdioma } from '@/data/interfaces';

export default function LinkTree() {
    const [idioma, setIdioma] = useState<IIdioma>('PT_BR');
    const { linkTree } = data;

    return (
        <LinkTreeTemplate
            myPicture={linkTree[idioma].myPicture}
            settings={{
                idioma: {
                    initialIdioma: idioma,
                    onSelectIdioma: (value) => setIdioma(value),
                },
            }}
            linkOne={linkTree[idioma].linkOne}
            linkTwo={linkTree[idioma].linkTwo}
            linkThree={linkTree[idioma].linkThree}
            linkFour={linkTree[idioma].linkFour}
            socialButtonList={linkTree[idioma].socialButtonList}
            footerMessage={linkTree[idioma].footerMessage}
        />
    );
}
