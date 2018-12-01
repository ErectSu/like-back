import React,{Component} from 'react';
import './City.scss';
import CityUI from './CityUI';
import API from '../../api'
import 'whatwg-fetch'
import store from '../../store'
import './City.scss'
export default class Detail extends Component{

    constructor(){
        super();
        this.state={
            city:[],
            listCity:[]
        }
    }
    render(){
        // console.log(store.getState());
        let {city,listCity}=this.state;
        return (
            <CityUI dataCity={city} listData={listCity}/>
        );
    }
    
    componentDidMount(){
        let _that=this;
        fetch(API.CITY_API)
        .then(function(response) {
            return response.json()
        }).then((json)=> {
            // console.log('city', json);
            var list=json.data.map((item,index)=>{
                // console.log(item);
                if(item.isHot===true){
                    return item.name;
                }else{
                    return '';
                }
            })
            list=list.filter(item=>{
                return item!='';
            })
            this.setState({
                listCity:list
            })
            console.log(list);
            let cityMap = {};
            json.data.map((item)=>{
                    // 取得首字母
                    let letter = item.character[0];
                    //按首字母分类
                    if(!cityMap[letter]){
                        cityMap[letter] = [];
                    }
                    cityMap[letter].push(item);
                })
                //排序
                let keys = Object.keys(cityMap);
                // 选择排序,升序
                for(let i = 0; i < keys.length; i++){
                    for(let j = i+1; j < keys.length; j++){
                        if(keys[i] > keys[j]){
                            let tmp = keys[i];
                            keys[i] = keys[j];
                            keys[j] = tmp;
                        }
                    }
                }
                //组装数据
                let newData = keys.map(letter=>{
                    return {
                        key: letter,
                        value: cityMap[letter]
                    }
                })
                // console.log(newData);
                _that.setState({
                    city:newData
                })
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
    }
}