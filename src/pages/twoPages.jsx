import { useEffect, useState } from 'react';
import AdultSection from './sides/adult';
import ChildrenSection from './sides/children';

export default function TwoPages() {
    const [sizeInit, setSizeInit] = useState(1);
    const [isClicked, setIsClicked] = useState('');
    let width = {
        left: 1,
        right: 1
    };
    useEffect(() => {
        function handleScroll(e) {
            const math = Math.max(-1, Math.min(1, e.deltaY));
            const step = 0.1;
            const vol = Math.max(0, Math.min(1, sizeInit - math * step));
            if (vol >= 0.5) {
                setSizeInit(vol)
            }
        }
        window.addEventListener('wheel', handleScroll)
        return () => {
            window.removeEventListener('wheel', handleScroll)
        }
    })
    switch (isClicked) {
        case 'right': {
            width.left = 1;
            width.right = 0;
            break;
        }
        case 'left': {
            width.right = 1;
            width.left = 0;
            break;
        }
        default: {
            width.right = sizeInit;
            width.left = sizeInit;
        }
    }
    document.childNodes[1].style.overflowX = "hidden";
    return (
        <div>
            <PrevPage side={`left`} width={width.left} setIsClicked={setIsClicked}>
                <ChildrenSection isClicked={isClicked} />
            </PrevPage>
            <PrevPage side={`right`} width={width.right} setIsClicked={setIsClicked}>
                <AdultSection isClicked={isClicked} />
            </PrevPage>
        </div>
    )
}

function PrevPage(props) {
    return (
        <div className={`absolute transition-transform w-full h-full z-10`} style={{
            transform: `translate(${props.side == `left` ? `-${props.width * 100}` : props.width * 100}%)`
        }} onClick={() => {props.setIsClicked(props.side)}}>
            {props.children}
        </div>
    )
}