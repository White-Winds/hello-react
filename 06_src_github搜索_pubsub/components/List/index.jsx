import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class List extends Component {
    state = {   //初始化状态
        users: [],          //users初始值为数组
        isFirst: true,      //是否第一次打开页面
        isLoading: false,   //是否处于搜索加载中
        err: '',          //请求错误

    }
    componentDidMount(){
        var my_test='123456'
        // console.log(12356115);
        this.my_pubsub = PubSub.subscribe(my_test,(msg,stateObj)=>{
            this.setState(stateObj)
        })
    }
    componentWillUnmount(){
        // console.log(12356);
        PubSub.unsubscribe(this.my_pubsub);
        
    }

    // updataAppState = (stateObj) => {
    //     this.setState(stateObj)
    // }
    render() {
        const {users,isFirst,isLoading,err} =this.state;
        return (
            isFirst?<h2>欢迎使用</h2>:
            isLoading?<h2>loading...</h2>:
            err?<h2 style={{color:'red'}}>{err}</h2>:
            <div className="row">
                {
                    users.map((userObj) => {
                        return (
                            <div key={userObj.id} className="card">
                                <a href={userObj.html_url} target="_blank" rel="noreferrer">
                                    <img alt="reactjs" src={userObj.avatar_url} style={{ width: '100px' }} />
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
