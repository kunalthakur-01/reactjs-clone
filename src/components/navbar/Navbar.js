import './Navbar.css';

import { FaReact } from 'react-icons/fa';
import { IoLanguage } from 'react-icons/io5';

function Navbar() {
    return (
        <nav className="navbar">
            <a href="" className="logo">
                <FaReact className="icons" />
                <span>React</span>
            </a>
            <ul>
                <li><a href="">Docs</a></li>
                <li><a href="#">Tutorial</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Community</a></li>
            </ul>
            <div className="others">
                <input type="text" placeholder="Search" />
                <a href="" className='language'>
                    <IoLanguage className="icons" />
                    <span>Languages</span>
                </a>
                <a href="">Github</a>
            </div>
        </nav>
    );
}

export default Navbar;
