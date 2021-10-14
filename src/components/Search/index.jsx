import React, { Component } from 'react'

export default class Search extends Component {
    search = () => {    
        const {keyWordElement:{value:search_value}}=this;
        console.log(search_value);
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索 Github 用户</h3>
                <div>
                    <input ref={currentNode=>{this.keyWordElement=currentNode}} type="text" placeholder="输入关键词点击搜索" />&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
