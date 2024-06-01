import { LogoAdult, XingDong } from '../../assets/media/Logos';
import Bandit from '../../assets/media/secondBandit.png';
import Glitch1 from '../../assets/media/VHS Glitch_фон 7.png';
import Glitch2 from '../../assets/media/VHS Glitch_фон 6.png';
import noise1 from '../../assets/media/noise 4.png';
import noise2 from '../../assets/media/noise 3.png';

export default function AdultSection(props) {
    return (
        <div className={`absolute bg-[#211E1D] ${props.isClicked ? `w-full` : `w-2/4`} h-full`}>
            <div className='flex justify-center items-start object-cover w-full h-full'>
                <span className='absolute w-full h-full z-0'>
                    <img className={`w-full h-full`} src={Glitch1} />
                </span>
                <div className={`flex flex-col justify-center items-center w-full ${props.isClicked ? `h-5/6` : `h-full`} z-10`}>
                    <div className={`pb-2.5 ${props.isClicked ? `w-44` : `w-28`}`}>
                        <XingDong />
                    </div>
                    <div className={props.isClicked ? `w-full` : `w-3/4`}>
                        <LogoAdult />
                    </div>
                    <p className={`font-halvar font-bold text-white ${props.isClicked ? `text-xl tracking-[1em] mt-[0.5rem]` : `text-xl tracking-[0.6em] mt-[1.4rem]`}`}>&nbsp;ANIMATION STUDIO</p>
                </div>
                {props.isClicked ? 
                <>
                    <span className='absolute right-0 w-1/4 bottom-0 z-20'>
                        <img className='z-11' src={Bandit} />
                    </span>
                </>
                : <></>}
                <span className='flex flex-col object-cover absolute w-full h-2/4 z-0 bottom-0'>
                    <img className={`w-full h-full`} src={Glitch2} />
                    {props.isClicked 
                    ?                     
                        <div className='flex flex-col justify-center items-center bottom-0 absolute w-full h-4/5'>
                            <img className={`mb-4 w-full`} src={noise1} />
                            <img className={`w-full`} src={noise2} />
                        </div> 
                    : <></>}
                </span>
            </div>
        </div>
    )
}