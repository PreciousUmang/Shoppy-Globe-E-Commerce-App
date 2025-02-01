import { Link } from 'react-router';
import brandLogo from '/public/assets/logo 2.jpg'

function Header() {


    return (
        <header className='top-0 sticky bg-theme shadow-darkAccent shadow-md mb-4 text-darkAccent'>
            <nav className='flex justify-between items-center mx-16 p-2'>
                <Link to={'/'}> <section className="w-20 brand-image">
                    <img src={brandLogo} alt="Brand Logo" className='rounded-lg' />
                </section>
                </Link>
                <Link to={'/'}>
                    <p className="md:flex hidden font-bold font-mono text-3xl text-white">  SHOPPY <i className="px-2 fa-bag-shopping fa-beat-fade fa-solid fa-wiggle"></i> Globe</p>
                </Link>
                <Link to={'/cart'}>
                    <section className="nav-links">
                        <i className="fa-cart-shopping fa-solid"></i>
                    </section>
                </Link>
            </nav>
        </header>
    )
}

export default Header;