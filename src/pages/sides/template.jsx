import { LogoAdult, XingDong } from '../../assets/media/Logos';
import Bandit from '../../assets/media/secondBandit.png';
import Glitch1 from '../../assets/media/VHS Glitch_фон 7.png';
import Glitch2 from '../../assets/media/VHS Glitch_фон 6.png';
import noise1 from '../../assets/media/noise 4.png';
import noise2 from '../../assets/media/noise 3.png';
import preCover from '../../assets/media/pre-cover.jpg';
import picStrangeMan from '../../assets/media/picstrangeman.png';
import mainPartPic from '../../assets/media/childrenSectionElements/mainPartPic.png';
import Morkov from '../../assets/media/childrenSectionElements/footer/morkov.png';
import { Logo } from '../../assets/media/Logos';
import { LogoChildren } from '../../assets/media/Logos';

function Wrapper(props) {
    return (
        <div className={`${props.bgColor} w-full h-full`}>
            {props.content}
        </div>
    )
}

function Header({children}) {
    return (
        <header className={`flex justify-center items-start object-cover w-full h-screen`}>
            {children}
        </header>
    )
}

function PreCover() {
    return (
        <div className={`w-full h-96`}>
            <img className='w-full object-cover h-96' src={preCover} alt="" />
        </div>
    )
}

function MainPart({children}) {
    return (
        <main className={`flex justify-center w-full h-full z-20`}>
            <div className={`flex flex-col justify-between w-[1332px]`}>
                {children}
            </div>
        </main>
    )
}

function BriefDesc(props) {
    return (
        <section className={`flex flex-row justify-between mt-12`}>
            <article className={`${props.textColor} font-circe text-md mb-12`}>
                <h1 className='font-halvar font-bold text-[3.25rem] text-nowrap tracking-[0.1rem] pb-4'>{props.articleName}</h1>
                <p className='h-36 font-couriernewcyr font-bold text-md w-[32rem] h-[12rem] leading-[1.25rem]'>
                    ДЕЛАЙ — профессиональная анимационная студия полного цикла и анимационное агентство, специализирующееся <br />на создании различного анимационного контента. <br />Наша команда занимается полным циклом производства анимационных коротких метров, полных метров <br />и сериалов в 2D и 3D технике.<br /><br />
                    А еще мы осуществляем помощь в производстве на разных этапах: от сценария до звукорежиссуры.
                </p>
            </article>
            <div className={`flex justify-end w-full ${props.itemsCenter ? `items-center` : `items-end`} pb-0 ${props.mixExc ? `mix-blend-exclusion` : ``}`}>
                <img className={`max-w-[826px]`} src={props.picSrc} alt="" />
             </div>
        </section>
    )
}

function WorkList({children}) {
    return (
        <section className={`flex justify-center w-full h-full`}>
            <div className={`flex flex-col justify-center w-full grow gap-3`}>
                {children}
            </div>
        </section>
    )
}

function Footer(props) {
    return (
        <footer className={`flex flex-row w-full ${props.bg} h-[33.4rem] bg-white mt-2.5`}>
            {props.children}
        </footer>
    )
}

export function AdultPart() {
    
    return (
        <Wrapper bgColor={`bg-[#1D1D1D]`} content={
            <>
                <Header>
                    <span className='absolute w-full h-full z-0'>
                        <img className={`w-full h-full`} src={Glitch1} />
                    </span>
                    <div className='flex flex-col w-full h-full'>
                        <div className={`flex flex-col justify-center items-center w-full h-[84%] z-10`}>
                            <div className={`pb-1 w-52`}>
                                <XingDong />
                            </div>
                            <div className={`w-full`}>
                                <LogoAdult />
                            </div>
                            <p className={`font-halvar font-bold text-white text-3xl tracking-[0.6em] mt-10`}>&nbsp;ANIMATION STUDIO</p>
                        </div>
                        <div className={`flex flex-row justify-between w-full justify-between`}>
                            <span className={`text-white font-courier font-bold ml-16 z-20 absolute bottom-9`}>
                                <p className={`text-3xl mb-4`}>
                                    6-22.ПАВ.(00:50)
                                </p>
                                <p className={`text-2xl`}>
                                    Ночь. Молния сверкает.<br />
                                    Льет цветной дождь. В Питере <br />гроза.<br />
                                    {`<...>`}
                                </p>
                            </span>
                            <div className={`flex w-full h-full z-30`}>
                                <img className={`absolute max-w-[520px] right-20 bottom-0`} src={Bandit} />
                            </div>
                        </div>
                    </div>
                </Header>
                <PreCover />
                <MainPart>
                    <BriefDesc textColor={`text-white`} articleName={`ВЗРОСЛАЯ АНИМАЦИЯ`} picSrc={picStrangeMan} mixExc />
                    <WorkList>
                        <div className={`flex flex-row gap-3`}>
                            <img className='grow w-full h-full' src="/src/assets/media/example.png" alt="" />
                            <img className='grow w-full h-full' src="/src/assets/media/example.png" alt="" />
                            <img className='grow w-full h-full' src="/src/assets/media/example.png" alt="" />
                        </div>
                        <div className={`flex flex-row gap-3`}>
                            <img className='grow w-full h-full' src="/src/assets/media/example.png" alt="" />
                            <img className='grow w-full h-full' src="/src/assets/media/example.png" alt="" />
                            <img className='grow w-full h-full' src="/src/assets/media/example.png" alt="" />
                        </div>
                        <div className={`flex flex-row gap-3`}>
                            <img className='grow w-full h-full' src="/src/assets/media/example.png" alt="" />
                            <img className='grow w-full h-full' src="/src/assets/media/example.png" alt="" />
                            <img className='grow w-full h-full' src="/src/assets/media/example.png" alt="" />
                        </div>
                        <div className={`flex flex-row gap-3`}>
                            <img className='grow w-full h-full' src="/src/assets/media/example.png" alt="" />
                            <img className='grow w-full h-full' src="/src/assets/media/example.png" alt="" />
                            <img className='grow w-full h-full' src="/src/assets/media/example.png" alt="" />
                        </div>
                        <div className={`flex flex-row gap-3`}>
                            <img className='grow w-full h-full' src="/src/assets/media/example.png" alt="" />
                            <img className='grow w-full h-full' src="/src/assets/media/example.png" alt="" />
                            <img className='grow w-full h-full' src="/src/assets/media/example.png" alt="" />
                        </div>
                    </WorkList>
                </MainPart>
                <Footer bg={`bg-[url('/src/assets/media/adultSectionElements/bgfooter.png')] bg-no-repeat bg-center`} children={
                    <div className={`flex flex-row w-full font-circe tracking-wide`}>
                        <div className={`flex flex-col w-1/4 h-full border-b-[14px] justify-between px-16 py-12 border-[#007BAD]`}>
                            <div className={`flex flex-col`}>
                                <h1 className={`font-extrabold text-5xl pb-4`}>CONTACT US</h1>
                                <ul className={`text-lg font-bold leading-[1.5rem]`}>
                                    <li>Head <span className={`opacity-30 underline underline-offset-4 hover:no-underline cursor-pointer`}>hello@delai.studio</span></li>
                                    <li>HR <span className={`opacity-30 underline underline-offset-4 hover:no-underline cursor-pointer`}>@jenechkina1</span></li>
                                    <li>Work <span className={`opacity-30 underline underline-offset-4 hover:no-underline cursor-pointer`}>documents@horshield.com</span></li>
                                </ul>
                            </div>
                            <div className={`flex`}>
                                <div className={`w-4`}>
                                    <Logo width={152} height={38} />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between w-1/4 border-b-[14px] px-16 py-12 border-[#DBFF00]'>
                            <div className={`w-full`}>
                                <h1 className={`font-extrabold text-5xl pb-4`}>CAREER</h1>
                                <ul className={`text-lg font-bold leading-[1.5rem] cursor-pointer`}>
                                    <li>Animator</li>
                                    <li>Art-director</li>
                                    <li>3D-Character artist</li>
                                    <li>CG-Generalist</li>
                                    <li>Motion Designer</li>
                                    <li>Web Designer</li>
                                </ul>
                            </div>
                            <p className={`transition-opacity font-bold text-xl`}>
                                <span className={`cursor-pointer opacity-30`}>Ru</span>
                                &nbsp;/&nbsp;
                                <span className={`cursor-pointer`}>En</span>
                            </p>
                        </div>
                        <div className='flex flex-col justify-between w-1/4 border-b-[14px] px-16 py-12 border-[#F12B00]' />
                        <div className='flex flex-col justify-between w-1/4 border-b-[14px] px-16 py-12 border-[#38044C]'>
                            <h1 className={`font-extrabold text-5xl text-end`}>ABOUT US</h1>
                            <div className={`flex flex-row justify-between font-bold text-xl`}>
                                <span>
                                    <span className={`underline underline-offset-4 hover:no-underline cursor-pointer`}>Be</span>&nbsp;/&nbsp;
                                    <span className={`underline underline-offset-4 hover:no-underline cursor-pointer`}>Vk</span>&nbsp;/&nbsp;
                                    <span className={`underline underline-offset-4 hover:no-underline cursor-pointer`}>Tg</span>
                                </span>
                                <span>All rights reserved</span>
                            </div>
                        </div>
                    </div>
                } />
            </>
        } />
    )
}

export function ChildrenPart() {
    
    return (
        <Wrapper bgColor={`bg-white`} content={
            <>
                <Header>
                    <div className='grid grid-cols-6 grid-flow-row auto-rows-auto auto-cols-auto w-full h-full '>
                        <div className={`bg-[#18181A] row-span-2`}>

                        </div>
                        <div className={`bg-[url('src/assets/media/childrenSectionElements/inStartPage.png')] bg-cover bg-center col-span-3`} />
                        <div className={`bg-white`}>

                        </div>
                        <div className={`bg-[#FF1267]`}>

                        </div>
                        <div className={`bg-[#007BAD] col-span-4 `}>
                                <div className={`flex w-2/4 h-2/4`}>

                                </div>
                        </div>
                        <div className={`bg-[#38044C] row-span-2`}>

                        </div>
                        <div className={`bg-[#DBFF00] `}>

                        </div>
                        <div className={`bg-[#00C2FF]`}>

                        </div>
                        <div className={`bg-[#F12B00] col-span-3`}>

                        </div>
                    </div>
                </Header>
                <PreCover />
                <MainPart>
                    <BriefDesc textColor={`text-black`} articleName={`ДЕТСКАЯ АНИМАЦИЯ`} picSrc={mainPartPic} itemsCenter />
                    <WorkList>
                        <div className={`grid grid-cols-3 auto-rows-auto w-full gap-3`}>
                            <img className='grow rounded-3xl w-full h-full' src="/src/assets/media/example.png" alt="" />
                            <img className='grow rounded-3xl w-full h-full' src="/src/assets/media/example.png" alt="" />
                            <img className='grow rounded-3xl w-full h-full' src="/src/assets/media/example.png" alt="" />
                            <img className='grow rounded-3xl w-full h-full' src="/src/assets/media/example.png" alt="" />
                            <img className='grow rounded-3xl w-full h-full' src="/src/assets/media/example.png" alt="" />
                            <img className='grow rounded-3xl w-full h-full' src="/src/assets/media/example.png" alt="" />
                            <img className='grow rounded-3xl w-full h-full' src="/src/assets/media/example.png" alt="" />
                            <img className='grow rounded-3xl w-full h-full' src="/src/assets/media/example.png" alt="" />
                            <img className='grow rounded-3xl w-full h-full' src="/src/assets/media/example.png" alt="" />
                            <img className='grow rounded-3xl w-full h-full' src="/src/assets/media/example.png" alt="" />
                            <img className='grow rounded-3xl w-full h-full' src="/src/assets/media/example.png" alt="" />
                        </div>
                    </WorkList>
                </MainPart>
                <Footer bg={`bg-no-repeat bg-center`} children={
                    <div className={`flex flex-row w-full font-circe tracking-wide`}>
                        <div className='flex flex-col text-white w-3/4 h-full justify-between px-16 py-12 bg-[#007BAD]'>
                            <main className={`flex flex-col`}>
                                <h1 className={`font-extrabold text-5xl pb-4`}>CONTACT US</h1>
                                <ul className={`text-lg font-bold leading-[1.5rem]`}>
                                    <li>Head <span className={`text-lime-400`}>hello@delai.studio</span></li>
                                    <li>HR <span className={`text-lime-400`}>@jenechkina1</span></li>
                                    <li>Work <span className={`text-lime-400`}>documents@horshield.com</span></li>
                                </ul>
                            </main>
                            <footer className={`flex`}>
                                <div className={`w-4 h-8 opacity-20`}>
                                    <Logo width={150} />
                                </div>
                            </footer>
                        </div>
                        <div className='flex flex-col justify-between w-1/4 px-16 py-12 bg-[#DBFF00]'>
                            <div className={`w-full`}>
                                <h1 className={`font-extrabold text-5xl pb-4`}>CAREER</h1>
                                <ul className={`text-lg font-bold leading-[1.5rem] cursor-pointer`}>
                                    <li>Animator</li>
                                    <li>Art-director</li>
                                    <li>3D-Character artist</li>
                                    <li>CG-Generalist</li>
                                    <li>Motion Designer</li>
                                    <li>Web Designer</li>
                                </ul>
                            </div>
                            <p className={`transition-opacity font-bold text-xl`}>
                                <span className={`cursor-pointer opacity-30`}>Ru</span>
                                &nbsp;/&nbsp;
                                <span className={`cursor-pointer`}>En</span>
                            </p>
                        </div>
                        <div className='flex text-white justify-between flex-col w-full px-16 py-12 bg-[#F12B00]'>
                            <h1 className={`font-extrabold text-5xl pb-4`}>COME <span className={`text-[#8CFF33]`}>HERE</span></h1>
                            <div className={`flex flex-row justify-between font-bold text-xl`}>
                                <span>
                                    <span className={`underline underline-offset-4 hover:no-underline cursor-pointer`}>Be</span>&nbsp;/&nbsp;
                                    <span className={`underline underline-offset-4 hover:no-underline cursor-pointer`}>Vk</span>&nbsp;/&nbsp;
                                    <span className={`underline underline-offset-4 hover:no-underline cursor-pointer`}>Tg</span>
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col w-3/4 px-16 py-12 bg-[#38044C]'>
                            <h1 className={`font-extrabold text-white text-5xl text-center`}>ABOUT US</h1>
                            <div className={`flex justify-center items-end w-full h-full`}>
                                <img className='w-44 h-48' src={Morkov} alt="" />
                            </div>
                        </div>
                    </div>
                } />
            </>
        } />
    )
}