import React from 'react';
export default function CityUI(props){
    console.log(props.dataCity);
    return (
        <div className='page' id='city'>
        <hr /><hr />huanhang<hr /><hr />
            <h1>城市列表页</h1>
            <div>
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