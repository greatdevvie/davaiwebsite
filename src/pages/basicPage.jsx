import { useState } from 'react';
import { Logo } from '../assets/media/Logos';

export default function StartPageBasic(props) {
    const [isActive, setIsActive] = useState({
        ru: true,
        en: false
    });
    function handleClick(point) {
        if (point === 'ru') {
            setIsActive({
                ru: true,
                en: false,
            })
        } else if (point === 'en') {
            setIsActive({
                ru: false,
                en: true,
            })
        }
    }
    return (
        <div className="w-[100vw] h-[100vh]">
        <div className='flex flex-col w-full h-full justify-center items-center'>
            <div className="cursor-pointer w-60" onClick={() => {props.setSizeInit(0.5)}}>
                <Logo/>
            </div>
        </div>
        <div className="flex w-full font-halvar select-none text-xl font-bold absolute bottom-16 justify-center">
            <span className={`cursor-pointer transition-opacity ${isActive.ru ? 'opacity-25' : ''}`} onClick={() => {handleClick('ru')}}>RU</span>
            &nbsp;/&nbsp;
            <span className={`cursor-pointer transition-opacity ${isActive.en ? 'opacity-25' : ''}`} onClick={() => {handleClick('en')}}>EN</span>
        </div>
    </div>
    )
}