import './navbar.css'

function NavBar() {
    return (
        <nav className='container'>
            <div>
                <img src="/nav_images/brand_logo.png" alt="asd" />
            </div>
            <menu>
                <ul>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Location</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </menu>
            <div>
                <button className='nav-login-btn'>Login</button>
            </div>
        </nav>
    )
}

export default NavBar;