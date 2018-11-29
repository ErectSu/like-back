import React from 'react';
import { NavLink } from 'react-router-dom';
export default function HomeUI(props){
    console.log('props.dataSlide');
    console.log(props.dataSlide);
    if(props.dataSlide.length > 0){
    return (
        <div className='page' id='home'>
            <div className="loveR-home-header">
                {/* <NavLink to={`/city`} className="city">{ props.cityName }</NavLink> */}
                <NavLink to='/home/city' className="city">111</NavLink>
                <span className="search"></span>
                <span className="cart"></span>
            </div>
            <div className="content">
                <div className="slider-img">
                
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                props.dataSlide[0].items.map((item,index)=>{
                                    return (
                                        <div className="swiper-slide" key={item.id}><img src={item.imageUrl} alt=""/></div>
                                    )
                                })
                            }
                        </div>
                        {/* <!-- 如果需要分页器 --> */}
                        <div className="swiper-pagination"></div>
                    </div>
                    {/* 导航等组件可以放在container之外 */}
                </div>
            </div>
        </div>
    )
    }
    else{
        return null;
    }
}