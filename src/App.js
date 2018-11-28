import React, { Component } from 'react';
import {BrowserRouter as Router,NavLink,Route,Redirect,Switch} from 'react-router-dom';
import Home from './pages/home/Home';
import Hot from './pages/hot/Hot';
import Mine from './pages/mine/Mine';

import Detail from './pages/detail/Detail';
import Shape from './pages/shape/Shape';
import City from './pages/city/City';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

import './App.scss';
class App extends Component {
  render() {
    return (
      <Router>
          <div className='app'>
            
            <Switch>
              <Route path='/' exact render={()=>{return <Redirect to='/home'/>}}/>
              <Route path='/home' component={Home}/>
              <Route path='/hot' component={Hot}/>
              <Route path='/mine' component={Mine}/>
              <Route render={()=>{return <Redirect to='/home'/>}}/>
            </Switch>

            <Route path='/home/detail' component={Detail}/>
            <Route path='/home/shape' component={Shape}/>
            <Route path='/home/city' component={City}/>

            <Route path='/mine/login' component={Login}/>
            <Route path='/mine/register' component={Register}/>

            <nav className='tabs'>
            <NavLink className='tab' to='/home'>
              <i className="iconfont icon-shouye"></i>
              <span>首页</span>
            </NavLink>
            <NavLink className='tab' to='/hot'>
              <i className="iconfont icon-icon--"></i>
              <span>换新机</span>
            </NavLink>
            <NavLink className='tab' to='/mine'>
              <i className="iconfont icon-wode"></i>
              <span>我的</span>
            </NavLink>
          </nav>
          </div>
          
        
      </Router>

    );
  }
}

export default App;
