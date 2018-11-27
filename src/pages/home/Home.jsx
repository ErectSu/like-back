import React,{Component} from 'react';
import store from '../../store';
import HomeUI from './HomeUI';
import './Home.scss'
export default class Home extends Component{
    constructor(){
        super();
        this.state={
            value:'初始值'
        }
    }
    render(){
        return (
            <HomeUI/>
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
}