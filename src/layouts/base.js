import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {MAXPAGE} from '../pages/pageList'

function Base(props) {
    useEffect(() => {
        if (props.backgroundImage) {
            let elt = document.getElementsByTagName('html')[0]
            elt.style.background = `url("/images/${props.backgroundImage}")`
            elt.style.backgroundSize = 'cover'
            elt.style.backgroundRepeat = 'no-repeat'
            elt.style.backgroundPosition = 'center'
        }
    }, [props.backgroundImage])

    let page = parseInt(props?.match?.params?.id || 0)
    const nextLink = `/page/${page + 1}`
    const backLink = page === 1 ? '/': `/page/${page - 1}`
    return (
        <div className="container">
            <div style={{ height: 70 }}></div>
            <div className="content box">
                <h1 className='title'>{props.title}</h1>
                {props.children}
                <div className='nav-buttons'>
                    {page > 0 &&
                        <Link
                            role='button'
                            className='btn btn-default'
                            to={backLink}>
                            <button className='btn btn-secondary'>
                                back
                            </button>
                        </Link>
                    }
                    {page < MAXPAGE &&
                        <Link to={nextLink}>
                            <button className='btn btn-primary'>
                                next
                            </button>
                        </Link>
                    }
                    {page === MAXPAGE &&
                        <Link to='/'>
                            <button className='btn btn-primary'>
                                home
                            </button>
                        </Link>
                    }
                </div>
            </div>

        </div>
    )
}

export default Base
