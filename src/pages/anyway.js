import React from 'react'
import Base from '../layouts/base'


function Anyway(props) {
    return (
        <Base
            match={props.match}
            backgroundImage='anyway.jpg'
            title='Anyway,'>
            <div className='subtitle'>
                You're a cool sister.  I'm kinda sad we can't hang out
                more often.  If covid shit wasn't happening I'd come visit
                more. gg no re. swaggy
            </div>
        </Base>
    )
}

export default Anyway
