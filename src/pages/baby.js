import React from 'react'
import Base from '../layouts/base'


function Baby(props) {
    return (
        <Base
            match={props.match}
            backgroundImage='baby.jpg'
            title='Look how small and innocent you were,'>
            <div className='subtitle'>
                idk what happened
            </div>
        </Base>
    )
}

export default Baby
