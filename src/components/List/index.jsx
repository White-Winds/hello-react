import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
    render() {
        const { todos, changeTodo, changeAllTodo } = this.props;
        // const { changeTodo } = this.props;
        return (
            <ul className="todo-main">
                {
                    todos.map(todos => {
                        return <Item key={todos.id} {...todos} changeTodo={changeTodo} changeAllTodo={changeAllTodo} />
                    })
                }
            </ul>
        )
    }
}
