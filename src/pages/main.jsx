import { useState } from 'react';
import StartPageBasic from './basicPage';
import TwoPages from './twoPages';

export default function MainPage() {
    const [sizeInit, setSizeInit] = useState(1);
    return (
        <>
            <TwoPages sizeInit={sizeInit} setSizeInit={setSizeInit}  />
            <StartPageBasic setSizeInit={setSizeInit} />
        </>
    )
}