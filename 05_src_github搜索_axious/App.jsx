import React, { Component } from 'react'
import List from './components/List'
import Search from './components/Search'
import './App.css'



export default class App extends Component {

    state = {       //初始化状态
        users: [],          //users初始值为数组
        isFirst: true,      //是否第一次打开页面
        isLoading: false,   //是否处于搜索加载中
        err: '',            //请求错误

    }

    updataAppState = (stateObj) => {
        this.setState(stateObj)
    }

    render() {
        // const { users } = this.state;
        return (

            <div className="container">
                <Search updataAppState={this.updataAppState} />
                <List {...this.state} />
            </div>
        )
    }
}

