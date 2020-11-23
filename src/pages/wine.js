import React from 'react'
import Base from '../layouts/base'


function Wine(props) {
    return (
        <Base
            match={props.match}
            backgroundImage='wine.jpg'
            title="Jk, you're still pretty cool ig.">
            <div className='subtitle'>
                here's you pretending to drink wine.
            </div>
        </Base>
    )
}

export default Wine
