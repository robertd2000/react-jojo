import React from 'react'
import './title.css'

const Title = ({text}) => {
    return (
        <div className="section_header">
            <h1 className="section_title"> {text} </h1>
        </div>
    )
    
}

export default Title