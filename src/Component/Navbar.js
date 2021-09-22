import React from 'react'
import { NavLink, useHistory} from 'react-router-dom'
import './Style.css'

function Navbar() {
    let userInfo=useHistory();
    return (
        <div>
            <div className="main-nav">
                {/* 1st logo part */}
                <div className="logo">
                    <h1>
                        <span>L</span>ets
                        <span>G</span>row
                        <span>M</span>ore
                    </h1>
                </div>
                {/* 2nd menu part */}
                <div className="menu-link">
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/service'>Services</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
                {/* 3rd Get Users */}
                <div className="get-user">
                    <span>To Get User Information <br/> Please hit the button</span>
                    <button onClick={()=>{
                        userInfo.push('/useritem')
                    }}>Get User</button>
                    {/* <button><a href="#">Get User</a></button> */}
                </div>
            </div>
        </div>
    )
}
export default Navbar;