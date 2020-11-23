import React from 'react'
import Base from '../layouts/base'


function Kacie(props) {
    return (
        <Base
            match={props.match}
            backgroundImage='kacie.jpg'
            title="Here's a picture of you with Kacie for good measure">
            <div className='subtitle'>
                Probably after one glass.
            </div>
        </Base>
    )
}

export default Kacie
