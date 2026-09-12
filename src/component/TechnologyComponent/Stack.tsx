import type { IdataType } from "../../Type";

interface Istack {
    selectedTech: IdataType[],
}

const Stack = ({selectedTech}: Istack) => {
    return (
        <div>
            <h1>Your Stack</h1>
            <p> Technology Selected</p>
            <div>
                {selectedTech.map((selectedData)=>{
                    return(
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <img  className='w-8 h-auto rounded-full ' src={selectedData.icon} alt="" />
                                <div>
                                    <h2 className='font-bold text-sm'>{selectedData.name}</h2>
                                    <p className='text-xs text-gray-500'>{selectedData.category}</p>
                                </div>
                            </div>
                            <button>X</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Stack;