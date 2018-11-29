import React,{Component} from 'react';
import store from '../../store';
import HomeUI from './HomeUI';
import './Home.scss'
import API from '../../api'
import 'whatwg-fetch'
// console.log(fetch);



export default class Home extends Component{
    constructor(){
        super();
        this.state={
            mobilesos:[]
        }
    }
    render(){
        let {mobilesos}=this.state;
        return (
            <HomeUI dataSlide={mobilesos}></HomeUI>
        );
    }
    changeAction(ev){
        this.setState({
            value:ev.target.value
        })
    }
    sendAction(){
        console.log(this.state.value);
    }
    componentDidMount(){
        let _that=this;
        fetch(API.BANNER_API)
        .then(function(response) {
            return response.json()
        }).then((json)=> {
            console.log('parsed json', json)
            this.setState({
                mobilesos:json.data
            },()=>{
                new window.Swiper('.swiper-container01',{
                    autoplay:true,
                    loop:true,
                    pagination:{
                        el:'.swiper-pagination01'
                    }
                });
                new window.Swiper('.swiper-container02',{
                    autoplay:false,
                    loop:false
                })
            })
            
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
    }
}