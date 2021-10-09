import React, { Component } from 'react'

export default class Footer extends Component {
    handleCheck = (done) => {
        return (event) => {
            console.log(event.target.checked);
            this.props.changeAllTodo(event.target.checked);
        }
    }
    render() {
        const { done } = this.props;
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange= {this.handleCheck(done)}/>
                </label>
                <span>
                    <span>已完成0</span> / 全部2
                </span>
                <button className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
