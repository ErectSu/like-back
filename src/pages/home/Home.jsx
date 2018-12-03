import React,{Component} from 'react';
import store from '../../store';
import HomeUI from './HomeUI';
import './Home.scss'
import API from '../../api'
import 'whatwg-fetch'

import { connect } from 'react-redux';

// console.log(fetch);


// export default 
class Home extends Component{
    constructor(){
        super();
        this.state={
            mobilesos:[]
        }
    }
    render(){
        console.log(store.getState());
        let {mobilesos}=this.state;
        return (
            <HomeUI dataSlide={mobilesos} cityDef={store.getState()} pop={this.props}></HomeUI>
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
        console.log(this.props);
        let _that=this;
        fetch(API.BANNER_API)
        .then(function(response) {
            return response.json()
        }).then((json)=> {
            console.log('parsed json', json)
            this.setState({
                mobilesos:json.data
            },()=>{
                let swip1=new window.Swiper('.swiper-container01',{
                    autoplay:true,
                    loop:true,
                    pagination:{
                        el:'.swiper-pagination01'
                    }
                });
                let swip2=new window.Swiper('.swiper-container02',{
                    autoplay:false,
                    loop:false
                })
            })
            
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
    }
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
    //   list: state.Home.list,
    //   lbt: state.Home.lbt
    a:'001'
    }
  }
  
  
  const mapDispatchToProps = (dispatch) => {
    console.log(dispatch);
    return {
      onClick: (id) => {
        window.location.href = '/home/shape?type='+id
      },
      goDetail: (id) => {
        window.location.href = '/home/detail?'+id
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);