
import { use } from 'react';
import type { IdataType } from '../../Type';
import TechnologyCard from './TechnologyCard';

interface ItechnologiesGrid {
    dataPromise: Promise<IdataType[]>
}
const TechnologiesGrid = ({dataPromise}:ItechnologiesGrid) => {
    const dataOfTech:IdataType[] =use(dataPromise);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {dataOfTech.map((techData)=>{
                return(
                    <TechnologyCard techData={techData}></TechnologyCard>
                )
            })}
        </div>
    );
};

export default TechnologiesGrid;