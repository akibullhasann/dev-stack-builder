
import FooterLogo from "../assets/logo-text.png"

const Footer = () => {
    return (
        <footer>
            <div className='container mx-auto px-4'>
                <div className='md:grid grid-cols-4 justify-items-center'>
                    <div className='flex flex-col justify-center items-center md:items-start'>
                        <img src={FooterLogo} alt="" />
                        <p className='text-center md:text-left text-sm px-4 md:px-0 mt-2 mb-2 text-gray-600'>Curated tools, technologies, and resources for developers
                            building modern software.</p>
                        <div className='flex justify-between gap-5 md:mt-6 md:font-bold'>
                            <a href="">Github   .</a>
                            <a href="">Twitter   .</a>
                            <a href="">Linkedin   .</a>
                        </div>
                    </div>
                    <div className='hidden md:flex flex-col'>
                        <h2 className='font-bold mb-3.5'>Product</h2>
                        <ul className='text-gray-600'>
                            <li>Home</li>
                            <li>Technologies</li>
                            <li>Projects</li>
                        </ul>
                    </div>
                    <div className='hidden md:flex flex-col'>
                        <h2 className='font-bold mb-3.5'>Company</h2>
                        <ul className='text-gray-600'>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Career</li>
                        </ul>
                    </div>
                    <div className='hidden md:flex flex-col'>
                        <h2 className='font-bold mb-3.5' >Legal</h2>
                        <ul className='text-gray-600'>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-between text-gray-400 border-t pb-8 pt-3 mt-3 md:mt-9 md:pt-5'>
                    <p className='text-xs'>© 2026 Dev Stack. All rights reserved.</p>
                    <div className='flex justify-between gap-2'>
                        <p className='text-xs'>Privacy</p>
                        <p className='text-xs'>Terms</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;