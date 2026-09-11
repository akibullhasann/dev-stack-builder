import BannerImg from "../assets/banner-stack.png"

const Hero = () => {
    return (
       <div className="mt-20">
           <div className="grid grid-cols-1 px-2.5  md:grid-cols-3 justify-items-center items-center gap-4 container mx-auto ">
            <div className="flex flex-col justify-between gap-5 md:col-span-2">
                <h2 className="text-center md:text-left text-4xl md:text-7xl font-bold">Build Your Perfect <span className="block gradient-text text-4xl md:text-7xl">Development Stack</span></h2>
                <p className="font-serif text-center md:text-left">Discover, explore, and choose the best technologies for your projects. Build your perfect tech stack, learn new tools, and take your development journey to the next level.
                </p>
                <div className="flex gap-6 justify-center md:justify-start">
                    <button className="btn-gradient ">Explore Tecnologies</button>
                    <button className="border px-5 rounded-2xl font-semibold border-gray-300">Learn More</button>
                </div>
            </div>
            <div>
                <img src={BannerImg} alt="" />
            </div>
        </div>
       </div>
    );
};

export default Hero;