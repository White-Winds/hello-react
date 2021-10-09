import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
    handleKeyUp = (event) => {
        const { keyCode, target } = event;
        if (keyCode !== 13) return;
        if(target.value===''){
            alert('输入无效');
            return;
        }
        const todosObj = { id:Date.now(), name: target.value, done: false }
        this.props.addTodos(todosObj);
        target.value='';

    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
