
import type { Dispatch, SetStateAction } from 'react';
import type { IdataType } from '../../Type';
import { toast } from 'react-toastify';


interface ItechnologyCard {
    techData: IdataType,
    selectedTech: IdataType[],
    setSelectedTech: Dispatch<SetStateAction<IdataType[]>>,
    isSelected:string[],
    setIsSelected: Dispatch<SetStateAction<string[]>>
}
const TechnologyCard = ({techData, selectedTech, setSelectedTech,isSelected, setIsSelected}:ItechnologyCard) => {

    const selected = isSelected.includes(techData.id)

    const handleTechData =(data:IdataType)=>{

        const checkingData = [...isSelected, data.id];
        setIsSelected(checkingData);
        const newData = [...selectedTech, data];
        setSelectedTech(newData);
        toast.success(`${data.name} is added in your stack`);
    }



    return (
        <div className='flex flex-col justify-between gap-6 border border-gray-300 shadow-gray-900 px-4 py-3 rounded-lg mb-5' >
            <div className='flex justify-between'>
                <div className='flex items-center gap-3'>
                    <img className='w-10 h-auto rounded-full ' src={techData.icon} alt="" />
                     <h2 className='font-bold text-lg md:hidden'>{techData.name}</h2>
                </div>
                <div><p className='border px-3 py-1 rounded-2xl text-center'>{techData.badge}</p></div>
            </div>
            <h2 className='hidden md:block font-bold '>{techData.name}</h2>
            <p>{techData.description}</p>
            <div className='flex justify-between'>
                <p className='text-sm border px-2 py-1 rounded-xl border-none bg-gray-200'>{techData.category}</p>
                <p className='text-sm'>{techData.difficulty}</p>
                <p className='text-sm'>{techData.rating}</p>
            </div>
            <button
            disabled={selected} 
            onClick={()=>{handleTechData(techData)}}
            className='border btn-gradient'>
                {selected?'Added':'Add to Stack'}
            </button>
        </div>
    );
};

export default TechnologyCard;