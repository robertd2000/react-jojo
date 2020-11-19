import React from 'react'
import './header.css'

const Nav = ({data}) => {

    const links = 
        data.map((element, i) => {
            // console.log(<a key={element} className="nav_link" href="#">{element}</a>);
            return <a key={i} className="nav_link" href="#">{element}</a>
        }
    )

    return (
        <nav className="nav">
            {links}
        </nav>)
}

const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                    <div className="header_logo">JoJo</div>
                        <Nav data={['Главная', 'Часть', 'Персонажи', 'Опенинги', 'Отзывы']} />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header