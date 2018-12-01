import React from 'react';
import { NavLink } from 'react-router-dom'
export default function CityUI(props){
    console.log(props.dataCity);
    console.log(props.listData);
    return (
        <div className='page' id='city'>
            <div className='head'>
                <NavLink className='left' to='/home'>&lt;</NavLink>
                <h1 className='title'>选择城市</h1>
            </div>
            <div className='wrap'>
                <div className='hot-city'>
                    <span>热门城市</span>
                    <ul className='hot-ul'>
                        {
                            props.listData.map((item,index)=>{
                                return (
                                    <li className='hotCity' key={index}>{item}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <ul>
                    
                    {
                        props.dataCity.map(item=>{
                            return (
                                <li key={item.key}><p>{item.key}</p>
                                    {
                                        item.value.map(items=>{
                                            return (
                                                <p key={items.id}>
                                                    {items.name}
                                                </p>
                                            )
                                        })
                                    }
                                </li>
                            )
                         })
                    }
                    
                </ul>
                
            </div>
            <div className="nav-bar">
            <span className="nav-item">#</span>
                {
                    props.dataCity.map(item=>{
                        return (
                            <span className="nav-item" key={item.key}>{item.key}</span>
                        )
                    })
                }
            </div>
        </div>
    )
}