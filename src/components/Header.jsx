import { useState } from 'react';
import './header.css'

function Header() {
    const [searchText, setSearchText] = useState();

    return (
        <header>
            <nav>
                <section className='brand-image'> <img src="../assets/Logo 2.jpg" alt="" />
                </section>
                <section className='nav-links'>Nav Links
                </section>
            </nav>
        </header>)
}

export default Header;