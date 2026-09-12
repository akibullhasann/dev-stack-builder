
import { use, type Dispatch, type SetStateAction } from 'react';
import type { IdataType } from '../../Type';
import TechnologyCard from './TechnologyCard';

interface ItechnologiesGrid {
    dataPromise: Promise<IdataType[]>,
    selectedTech: IdataType[],
    setSelectedTech: Dispatch<SetStateAction<IdataType[]>>
}
const TechnologiesGrid = ({dataPromise, selectedTech, setSelectedTech}:ItechnologiesGrid) => {
    const dataOfTech:IdataType[] =use(dataPromise);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {dataOfTech.map((techData)=>{
                return(
                    <TechnologyCard techData={techData} selectedTech={selectedTech} setSelectedTech={setSelectedTech}></TechnologyCard>
                )
            })}
        </div>
    );
};

export default TechnologiesGrid;