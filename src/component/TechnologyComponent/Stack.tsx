import type { Dispatch, SetStateAction } from "react";
import type { IdataType } from "../../Type";
import { MdDeleteForever } from "react-icons/md";
import { toast } from 'react-toastify';

interface Istack {
    selectedTech: IdataType[],
    setSelectedTech: Dispatch<SetStateAction<IdataType[]>>,
    isSelected:string[],
    setIsSelected: Dispatch<SetStateAction<string[]>>
}

const Stack = ({ selectedTech, setSelectedTech,isSelected, setIsSelected }: Istack) => {

    const deleteAllData = () =>{
        setSelectedTech([]);
        setIsSelected([]);
        toast.error(`All Technology are deleted from your stack`);
    }

    const deleteCurrentData = (data: IdataType) => {
        const newData = selectedTech.filter((d) => d !== data);
        setSelectedTech(newData);

        const newSelected = isSelected.filter((id) => id !== data.id);
        setIsSelected(newSelected);
        toast.error(`${data.name} is deleted from your stack`);
    }


    return (
        <div className="flex flex-col border py-5 px-5 md:px-2 border-gray-300 shadow-gray-800 rounded-lg">
            <div className="">
                <h1 className="font-bold text-lg">Your Stack</h1>

                {selectedTech.length ? <p> <span className="mr-1">{selectedTech.length}</span>Techonology selected</p> : <p>No technologies selected yet</p>}

                {selectedTech.length === 0 ? <div><h1>Your Stack is Empty</h1></div> : ''}

                {/* <p> <span className="mr-1">{selectedTech.length}</span> Technology Selected</p> */}
                <div>
                    {selectedTech.map((selectedData) => {



                        return (
                            <div>
                                <div className="flex justify-between items-center border border-gray-400 py-2 px-2 my-2 rounded-lg">
                                    <div className="flex gap-2 items-center">
                                        <img className='w-8 h-auto rounded-full md:w-5  ' src={selectedData.icon} alt="" />
                                        <div>
                                            <h2 className='font-bold text-sm md:text-xs'>{selectedData.name}</h2>
                                            <p className='text-xs text-gray-500 font-semibold'>{selectedData.category}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => deleteCurrentData(selectedData)}
                                    ><MdDeleteForever /></button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {selectedTech.length ? <button onClick={()=> deleteAllData()}
            className="border py-2 mt-6 text-red-700" >Remove All</button> : ''}
        </div>
    );
};

export default Stack;