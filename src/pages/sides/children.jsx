import { LogoChildren } from '../../assets/media/Logos';

export default function ChildrenSection(props) {
    return (
        <div className={`absolute bg-[#007BAD] ${props.isClicked ? `w-full` : `w-2/4 right-0`} h-full`}>
            <div className='flex justify-center items-center w-full h-full'>
                <div className='w-2/4'>
                    <LogoChildren />
                </div>
            </div>
        </div>
    )
}