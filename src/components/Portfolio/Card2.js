import React from "react"
import 'tw-elements'
import './Card2.css'

const Card2 = (props) => {
    return (
        <>
            <div className=''>
                <a href={props.live_url} target="_blank" rel="noreferrer">
                    <div className="card2 rounded-2xl">
                        <img className="object-cover" src={props.image} alt='' />
                        <small>{props.project}</small>
                    </div>
                </a>
            </div>

        </>
    )
}

export default Card2
