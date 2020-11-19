import React, { useEffect, useState } from 'react'
import './clock.css'

const Tick = () => {
    const [time, setTime] = useState(new Date())
    const timer = () => setTime(new Date())
    useEffect(() => {
        return setInterval(() => {
            timer()
        }, 1000);
    }, [])
    


    return (
        <div className='clock_inner'>
            {time.toLocaleTimeString()}
        </div>
    )
}

const Clock = () => {
    return (
        <div className='container'>
            <div className='clock'>
                <Tick/>
            </div>
        </div>
    )
}

export default Clock