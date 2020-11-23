import React from 'react'
import Base from '../layouts/base'


function EnjoyYourShoes(props) {
    return (
        <Base
            match={props.match}
            backgroundImage='adventure.jpg'
            title='Enjoy your shoes &gt;:)'>
            <div className='subtitle'>
                You haven't even received the best ones yet.  But you should
                soon I think.
            </div>
        </Base>
    )
}

export default EnjoyYourShoes
