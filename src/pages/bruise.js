import React from 'react'
import Base from '../layouts/base'


function EnjoyYourShoes(props) {
    return (
        <Base
            match={props.match}
            backgroundImage='bruise.jpg'
            title='Have a good birthday,'>
            <div className='subtitle'>
                Try not to bruise your chin again. Here is a photo of you,
                showing us your bruise.
            </div>
            <div>
                Nice one, dummy
            </div>
        </Base>
    )
}

export default EnjoyYourShoes
