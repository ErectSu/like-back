import React from 'react';
import { NavLink } from 'react-router-dom';
export default function HomeUI(props){
    return (
        <div className='page' id='home'>
            <div className="loveR-home-header">
                {/* <NavLink to={`/city`} className="city">{ props.cityName }</NavLink> */}
                <NavLink to={`/city`} className="city">111</NavLink>
                <span className="search"></span>
                <span className="cart"></span>
            </div>
            <h1>首页</h1>
        </div>
    )
}