import { LogoChildren } from '../../assets/media/Logos';
import preCover from '../../assets/media/pre-cover.jpg';


export default function ChildrenSection(props) {
    return (
        <div className={`absolute bg-[#007BAD] ${props.isClicked ? `w-full` : `w-2/4 right-0`} h-full`}>
            <div className='flex justify-center items-center w-full h-full'>
                <div className='w-3/4'>
                    <LogoChildren />
                </div>
            </div>
            {props.isClicked ?             
                <div>
                    <div className='w-full object-cover h-full'>
                        <img className='w-full' src={preCover} alt="" />
                    </div>
                </div>
            : <></>}
        </div>
    )
}