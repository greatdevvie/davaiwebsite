import { LogoAdult, XingDong } from '../../assets/media/Logos';
import Bandit from '../../assets/media/secondBandit.png';
import Glitch1 from '../../assets/media/VHS Glitch_фон 7.png';
import Glitch2 from '../../assets/media/VHS Glitch_фон 6.png';
import noise1 from '../../assets/media/noise 4.png';
import noise2 from '../../assets/media/noise 3.png';
import preCover from '../../assets/media/pre-cover.jpg';
import picStrangeMan from '../../assets/media/picstrangeman.png';

export default function AdultSection(props) {
    return (
        <div className={`absolute bg-[#1D1D1D] ${props.isClicked ? `w-full` : `w-2/4`} h-full scroll-smooth`}>
            <div className='flex justify-center items-start object-cover w-full h-full'>
                <span className='absolute w-full h-full z-0'>
                    <img className={`w-full h-full`} src={Glitch1} />
                </span>
                <div className='flex flex-col w-full h-full'>
                    <div className={`flex flex-col justify-center items-center w-full ${props.isClicked ? `h-5/6` : `h-full`} z-10`}>
                        <div className={`pb-1 ${props.isClicked ? `w-44` : `w-28`}`}>
                            <XingDong />
                        </div>
                        <div className={props.isClicked ? `w-full` : `w-3/4`}>
                            <LogoAdult />
                        </div>
                        <p className={`font-halvar font-bold text-white ${props.isClicked ? `text-xl tracking-[1em] mt-[0.5rem]` : `text-xl tracking-[0.6em] mt-[1.4rem]`}`}>&nbsp;ANIMATION STUDIO</p>
                    </div>
                    <span className={`text-white font-courier font-bold ml-9 z-20 ${props.isClicked ? `` : `absolute bottom-9`}`}>
                        <p className={`${props.isClicked ? `text-xl` : `text-lg`} mb-2.5`}>
                            6-22.ПАВ.(00:50)
                        </p>
                        <p className={props.isClicked ? `text-lg` : `text-sm`}>
                            Ночь. Молния сверкает.<br />
                            Льет цветной дождь. В Питере гроза.<br />
                            {`<...>`}
                        </p>
                    </span>
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
            {props.isClicked ?             
                <div className='bg-[#1D1D1D]'>
                    <div className='w-full object-cover h-full'>
                        <img className='w-full' src={preCover} alt="" />
                    </div>
                    <section className='px-6'>
                        <div className='flex flex-row justify-between w-full'>
                            <div className='text-white font-circe text-md pt-20'>
                                <h1 className='font-halvar font-bold text-5xl pb-10'>ВЗРОСЛАЯ АНИМАЦИЯ</h1>
                                <p className='h-36 w-[32rem] leading-5'>
                                    <b>ДЕЛАЙ</b> — профессиональная анимационная студия полного цикла и анимационное агентство, специализируемся на создании различного анимационного контента. Наша команда занимается полным циклом производства анимационных коротких метров, полных метров и сериалов в 2D и 3D технике.<br /><br />
                                    А еще мы осуществляем помощь в производстве на разных этапах: от сценария до звукорежиссуры.
                                </p>
                            </div>
                            <div className='flex flex-row'>
                                <img className='mix-blend-exclusion' src={picStrangeMan} />
                            </div>
                        </div>
                        <div className='flex grow flex-wrap px-12 gap-2.5'>
                            <div className='bg-white grow w-[300px] h-[120px]' />
                            <div className='bg-white grow w-[400px] h-[120px]' />
                            <div className='bg-white grow w-[400px] h-[120px]' />
                            <div className='bg-white grow w-[400px] h-[120px]' />
                            <div className='bg-white grow w-[800px] h-[160px]' />
                            <div className='bg-white grow w-[800px] h-[160px]' />
                            <div className='bg-white grow w-[400px] h-[120px]' />
                            <div className='bg-white grow w-[400px] h-[120px]' />
                            <div className='bg-white grow w-[400px] h-[120px]' />
                        </div>
                    </section>
                    <footer className='w-full h-[100px] bg-white mt-2.5'></footer>
                </div>
            : <></>}
        </div>
    )
}