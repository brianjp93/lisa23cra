import React from 'react'
import Base from '../layouts/base'


function Emma(props) {
    return (
        <Base
            match={props.match}
            backgroundImage='emma.jpg'
            title="Here's you with your other wife">
            <div className='subtitle'>
                yes.
            </div>
        </Base>
    )
}

export default Emma
