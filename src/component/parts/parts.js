import React from 'react'
import './parts.css'
import Title from '../title'

const data = [
    {
        name: 'Phantom Blood',
        img: '/images/phantom.jpg'
    },
    {
        name: 'Battle Tendency',
        img: './images/tendency.png'
    },
    {
        name: 'Stardust Crusaders',
        img: './images/stardust.jpg'
    },
    {
        name: 'Diamond is unbreakable',
        img: './images/diamond.jpg'
    },
    {
        name: 'Golden Wind',
        img: './images/golden.jpg'
    },
    {
        name: 'Stone Ocean',
        img: './images/stone.jpg'
    },
    {
        name: 'Steel Ball Run',
        img: './images/Steel_Ball_Run.jpg'
    },
    {
        name: 'Jojolion',
        img: './images/jojolion.jpg'
    },
] 

const PartItems = ({data}) => {
    const item = data.map((i, key) => {
        return (
            <div key={key} className="part_item">
            <a href="#" target="_blank">
                <div className="part_inner">
                    <div className="part_img">
                        <img className="images" src={i.img} alt="" />
                    </div>
                </div>
                <div className="part_text">{i.name}</div>
                </a>
            </div>
                // <div key={key}>
                //     <div>{i.name}</div>
                //     <img src={i.img} alt='smt'/>
                // </div>
                
            )
    })
    return (
        <div className="parts">
            {item}
        </div>
    )
}

const Parts = () => {
    return (
        <>
            <div className='container'>
                <Title text={'Части серии JoJo Bizzare Adventure'} />
                <PartItems data={data}/>
            </div>
           
        </>
        
    )
}

export default Parts