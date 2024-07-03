import { useState } from 'react';
import StartPageBasic from './basicPage';
import TwoPages from './twoPages';
import { AdultPart, ChildrenPart } from './sides/template';

export default function MainPage() {
    const [sizeInit, setSizeInit] = useState(1);
    return (
        <>            
            <TwoPages setSizeInit={setSizeInit} sizeInit={sizeInit} />
            <StartPageBasic setSizeInit={setSizeInit} />

            {/* <AdultPart /> */}
            {/* <ChildrenPart /> */}

            {/* чтобы работало все корректно, закомменти TwoPages + StartPageBasic, а уже после этого раскомменти AdultPart или ChildrenPart */}
        </>
    )
}