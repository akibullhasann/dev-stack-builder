import { Suspense } from "react";
import type { IdataType } from "../../Type";
import TechnologiesGrid from "./TechnologiesGrid";
import Stack from "./Stack";

const dataFetch = async ():Promise<IdataType[]> =>{
    const response = await fetch(`${import.meta.env.BASE_URL}data.json`);
    const responsData = await response.json();
    return responsData;
}

const TechnologySection = () => {
    const dataPromise = dataFetch();
    return (
        <div className="mx-auto  container p-5 ">
            <h2 className="text-center text-3xl text-nowrap font-bold ">Explore the <span className="gradient-text">Technologies</span></h2>
            <p className="text-center text-gray-700 font-mono mb-5">Explore 10+ popular technologies and add your favorites to build your stack. </p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="md:col-span-4">
                    <Suspense fallback={<h1>Data Loading........</h1>}>
                        <TechnologiesGrid dataPromise={dataPromise}></TechnologiesGrid>
                    </Suspense>
                </div>
                <div className="md:col-span-1">
                    <Stack></Stack>
                </div>
            </div>
        </div>
    );
};

export default TechnologySection;