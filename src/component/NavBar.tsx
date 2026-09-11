import Logo from "../assets/logo-text.png"
import HamIcon from "../assets/hamburger.png"

const NavBar = () => {
    return (
        <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
            <div className="flex justify-between py-3 container mx-auto items-center px-5">
                <img src={HamIcon} className="w-6.5 h-4 md:hidden"></img>
                <img src={Logo} className="w-22 md:w-auto"></img>
                <ul className="md:flex justify-between gap-6 items-center hidden">
                    <li><a href="">Home</a></li>
                    <li><a href="">Technologies</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <div className="flex gap-3 shrink text-center">
                    <button className="text-xs md:text-base">Sign In</button>
                    <button className="text-xs md:text-base
                    
                    btn-gradient btn-gradient:hover cursor-pointer">Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;