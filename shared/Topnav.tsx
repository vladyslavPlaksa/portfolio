import { useState } from 'react';

export default function Topnav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className='p-3 border border-solid border-black'>
            <button onClick={() => setIsMenuOpen(prev => !prev)}>Toggle Menu</button>

            <div className={isMenuOpen ? 'flex' : 'hidden'}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    );
}
