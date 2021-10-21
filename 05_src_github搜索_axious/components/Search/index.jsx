import React, { Component } from 'react'
import axios from 'axios';

export default class Search extends Component {

    search = () => {
        const { keyWordElement: { value: search_value } } = this;
        this.props.updataAppState({isFirst: false,isLoading: true,})
        // console.log(this.props.updataAppState());
        axios.get(`http://localhost:3000/api1/search/users2?q=${search_value}`).then(
            response => { this.props.updataAppState({users: response.data.items,isLoading: false}) },
            error => { this.props.updataAppState({err:error.message,isLoading: false}) }
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索 Github 用户</h3>
                <div>
                    <input ref={currentNode => { this.keyWordElement = currentNode }} type="text" placeholder="输入关键词点击搜索" />&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
