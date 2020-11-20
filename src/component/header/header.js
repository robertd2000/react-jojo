import React from 'react'
import {Link} from 'react-router-dom';
import './header.css'

const data = [
    {title: 'Главная', path: '/'},
    {title: 'Часть', path: '/parts'},
    {title: 'Персонажи', path: '/smt'},
    {title: 'Опенинги', path: '/'},

]

const Nav = ({data}) => {

    const links =
        data.map((element, i) => {
            // console.log(<Link to={element.path} key={i} className="nav_link" href="#">{element.title}</Link>);
            return (
                <Link to={element.path} key={i} className="nav_link" href="#">{element.title}</Link>
                )
        }
    )

    console.log(links);

    // return (
    //     <nav className="nav">
    //         {links}
    //     </nav>)

    return (
        <nav className="nav">
            <ul>
                {links}
            </ul>
            
        </nav>)
}

const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                    <div className="header_logo">JoJo</div>
                        <Nav data={data} />


                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header