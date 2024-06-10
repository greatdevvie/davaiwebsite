import { useState } from 'react';
import StartPageBasic from './basicPage';
import TwoPages from './twoPages';
import { AdultPart, ChildrenPart } from './sides/template';

export default function MainPage() {
    const [sizeInit, setSizeInit] = useState(1);
    return (
        <>
            <ChildrenPart />
        </>
    )
}