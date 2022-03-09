import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

// import logo from '../../images/logo.png';
[]
const NavItem = ({ title, classProps }) => {
    return (
        <li className={'mx-4 cursor-pointer ${classProp} '}>
            {title}
        </li>
    );
}


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className='w-full flex md:justify-center justify-between items-center p-4 text-slate-700' >
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                {/* <img src={logo} alt="logo" className='w-16 cursor-pointer' /> */}
                <h2 className='font-bold'>BLOCKCHAIN</h2>
            </div>
            <ul className='text-slate-700 md:flex list-none hidden flex-row justify-between items-center flex-initial'>
                {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
                    <NavItem key={item + index} title={item} />
                ))}

                <li className='bg-gradient-to-r from-purple-600 to-purple-900 text-white py-2 px-7 rounded-full cursor-pointer hover:bg-[#2546bd]'>
                    Login
                </li>
            </ul>
            <div className='flex relative'>
                {toggleMenu
                    ? <AiOutlineClose fontSize={28} className=' md:hidden cursor-pointer' onClick={() => setToggleMenu(false)} />
                    : <HiMenuAlt4 fontSize={28} className=' md:hidden cursor-pointer' onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <ul className=' fixed top-0 -right-2 p-3 text-white w-[70vw] h-screen shadow-2xl md:hiden list-none
                    flex flex-col justify-start items-end rounded-md blue-glassmorphism animate-slide-in'>
                        <li className='text-xl w-full my-2'>
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
                            <NavItem key={item + index} title={item} classProps="my-2 text-lg" />
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;