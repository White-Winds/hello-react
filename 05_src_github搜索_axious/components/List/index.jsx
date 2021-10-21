import React, { Component } from 'react'

export default class List extends Component {
    render() {
        const {isFirst,isLoading,err} =this.props;
        return (
            isFirst?<h2>欢迎使用</h2>:
            isLoading?<h2>loading...</h2>:
            err?<h2 style={{color:'red'}}>{err}</h2>:
            <div className="row">
                {
                    this.props.users.map((userObj) => {
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
