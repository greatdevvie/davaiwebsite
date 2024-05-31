import { LogoAdult, XingDong } from '../../assets/media/Logos';
import Bandit from '../../assets/media/secondBandit.png';

export default function AdultSection(props) {
    return (
        <div className={`absolute bg-[#211E1D] ${props.isClicked ? `w-full` : `w-2/4`} h-full`}>
            <div className='flex justify-center items-start w-full h-full'>
                <div className={`flex flex-col justify-center items-center w-full ${props.isClicked ? `h-5/6` : `h-full`}`}>
                    <div className={`pb-2.5 ${props.isClicked ? `w-44` : `w-24`}`}>
                        <XingDong />
                    </div>
                    <div className={props.isClicked ? `w-full` : `w-2/4`}>
                        <LogoAdult />
                    </div>
                    <p className={`font-halvar font-bold text-white ${props.isClicked ? `text-xl tracking-[1em] mt-[0.5rem]` : `text-sm tracking-[0.5em] mt-[1rem]`}`}>&nbsp;ANIMATION STUDIO</p>
                </div>
                {props.isClicked ? 
                <>
                    <span className='absolute right-0 w-1/4 bottom-0 mr-24'>
                        <img src={Bandit} />
                    </span>
                </>
                : <></>}
            </div>
        </div>
    )
}