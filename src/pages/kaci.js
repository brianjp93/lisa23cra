import React from 'react'
import Base from '../layouts/base'


function Kaci(props) {
    return (
        <Base
            match={props.match}
            backgroundImage='kaci.jpg'
            title="Here's a picture of you with Kaci for good measure">
            <div className='subtitle'>
                Probably after one glass.
            </div>
        </Base>
    )
}

export default Kaci
