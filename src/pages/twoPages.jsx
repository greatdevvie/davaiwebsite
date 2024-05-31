import { useEffect, useState } from 'react';
import { LogoAdult, LogoChildren, XingDong } from '../assets/media/Logos';
import Bandit from '../assets/media/secondBandit.png';

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
                <div className={`absolute bg-[#007BAD] ${isClicked ? `w-full` : `w-2/4 right-0`} h-full`}>
                    <div className='flex justify-center items-center w-full h-full'>
                        <div className='w-2/4'>
                            <LogoChildren />
                        </div>
                    </div>
                </div>
            </PrevPage>
            <PrevPage side={`right`} width={width.right} setIsClicked={setIsClicked}>
                <div className={`absolute bg-[#211E1D] ${isClicked ? `w-full` : `w-2/4`} h-full`}>
                    <div className='flex justify-center items-start w-full h-full'>
                        <div className={`flex flex-col justify-center items-center w-full ${isClicked ? `h-5/6` : `h-full`}`}>
                            <div className={`pb-2.5 ${isClicked ? `w-44` : `w-24`}`}>
                                <XingDong />
                            </div>
                            <div className={isClicked ? `w-full` : `w-2/4`}>
                                <LogoAdult />
                            </div>
                            <p className={`font-halvar font-bold text-white ${isClicked ? `text-xl tracking-[1em] mt-[0.5rem]` : `text-sm tracking-[0.5em] mt-[1rem]`}`}>&nbsp;ANIMATION STUDIO</p>
                        </div>
                        {isClicked ? 
                        <>
                            <span className='absolute right-0 w-1/4 bottom-0 mr-24'>
                                <img src={Bandit} />
                            </span>
                        </>
                        : <></>}
                    </div>
                </div>
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