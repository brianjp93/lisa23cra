import React from 'react'
import Base from '../layouts/base'


function Home(props) {
    return (
        <Base
            match={props.match}
            backgroundImage='funnyface.jpg'
            title='Hello Lisa,'>
            <div className='subtitle'>
                You have made it to 23 years old, congratulations.
                You are old now, I have decided.
                <div>
                    I wasn't really planning on making this website, but
                    I thought of it earlier and now here it is.
                </div>
            </div>

        </Base>
    )
}

export default Home
