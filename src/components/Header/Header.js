import React from 'react'
import './Header.css'

import withAuth from '../../hoc/withAuth'

function Header(props) {
    console.log(props)
    return (
        <div className="header">
            <h1>header</h1>
            {props.isAuth ? <p>Logout</p> : <p>Signin</p>}
        </div>
    )
}

export default withAuth(Header)
