import React from 'react';
import { NavLink } from 'react-router-dom';
export default function HomeUI(props){
    console.log('props.dataSlide');
    console.log(props);
    if(props.dataSlide.length > 0){
    return (
        <div className='page' id='home'>
            <div className="loveR-home-header">
                {/* <NavLink to={`/city`} className="city">{ props.cityName }</NavLink> */}
                <NavLink to='/home/city' className="city">{props.cityDef.city}</NavLink>
                <span className="search"></span>
                <span className="cart"></span>
            </div>
            <div className="content">
                <div className="slider-img">
                
                    <div className="swiper-container">
                        <div className="swiper-wrapper swiper-wrapper01">
                            {
                                props.dataSlide[0].items.map((item,index)=>{
                                    return (
                                        <div className="swiper-slide" key={index}><img src={item.imageUrl} alt=""/></div>
                                    )
                                })
                            }
                        </div>
                        {/* <!-- 如果需要分页器 --> */}
                        <div className="swiper-pagination swiper-pagination01"></div>
                    </div>
                    {/* 导航等组件可以放在container之外 */}
                </div>
                <div className="item">
                    <a>
                            <img src={props.dataSlide[1].items[0].imageUrl} alt=""/>
                    </a>
                </div>
                <div className="item nav">
                    
                        {
                            props.dataSlide[2].items.map((item,index)=>{
                                // console.log(item);
                                return (
                                    <a onClick = {()=>{props.pop.onClick(item.urlType)}} key={index}>
                                    <img src={item.imageUrl} alt=""/>
                                    <span>{item.title}</span>
                                    </a>
                                )
                            })
                        }
                            
                    
                </div>
                <div className="item">
                        <a onClick={()=>{props.pop.onClick(4)}}>
                            <img src={props.dataSlide[3].items[0].imageUrl} alt=""/>
                        </a>
                </div>
                <div className="item">
                        <div className='hotRecycle'>
                            <h3>热门回收</h3>
                            <div className='swip'>
                                <div className="swiper-container swiper-container02">
                                    <div className="swiper-wrapper">
                                        {
                                            props.dataSlide[4].item.map((item,index)=>{
                                                return (
                                                    <a className="swiper-slide" key={item.id}>
                                                        <img src={item.productImgUrl} alt=""/>
                                                        <h5 className='productName'>{item.productName}</h5>
                                                        <span className='priceTitle'>最高回收价</span>
                                                        <span className='price'><small>￥</small>{item.topPrice}</span>
                                                    </a>
                                                )
                                            })
                                        }
                                    </div>
                                    {/* <!-- 如果需要分页器 --> */}
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>

                        </div>
                </div>
                <div className="item">
                        <div className='hotRecycle'>
                            <a>
                                <img src={props.dataSlide[5].items[0].imageUrl} alt=""/>
                            </a>
                        </div>
                </div>
                <div className="item">
                        <div className='hotRecycle'>
                            <a>
                                <img src={props.dataSlide[6].items[0].imageUrl} alt=""/>
                            </a>
                        </div>
                </div>
                <div className="item activities">
                        <div className='hotRecycle01'>
                        {
                            props.dataSlide[7].items.map((item,index)=>{
                                return (
                                    <a key={index}>
                                        <img src={item.imageUrl} alt=""/>
                                    </a>
                                )
                            })
                        }
                        </div>
                        <div className='hotRecycle02'>
                        {
                            props.dataSlide[8].items.map((item,index)=>{
                                return (
                                    <a key={index}>
                                        <img src={item.imageUrl} alt=""/>
                                    </a>
                                )
                            })
                        }
                        </div>
                </div>
                <div className="item">
                        <div className='oldNew'>
                            <a>
                                <img src={props.dataSlide[9].items[0].imageUrl} alt=""/>
                            </a>
                        </div>
                </div>
                <div className="item">
                        <div className='oldNew02'>
                        {
                            props.dataSlide[10].items.map((item,index)=>{
                                return (
                                    <a key={index}>
                                        <img src={item.imageUrl} alt=""/>
                                    </a>
                                )
                            })
                        }
                        </div>
                </div>
                <div className="item">
                        <div className='oldNew'>
                            <a>
                                <img src={props.dataSlide[11].items[0].imageUrl} alt=""/>
                            </a>
                        </div>
                </div>
                <div className="item">
                        <div className='oldNew'>
                            <a>
                                <img src={props.dataSlide[12].items[0].imageUrl} alt=""/>
                            </a>
                        </div>
                </div>
                <div className="item">
                        <div className='oldNew'>
                            <a>
                                <img src={props.dataSlide[13].items[0].imageUrl} alt=""/>
                            </a>
                        </div>
                </div>
            </div>
        </div>
    )
    }
    else{
        return null;
    }
}