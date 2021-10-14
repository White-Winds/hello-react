import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        changeTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
    }
    render() {
        const { todos, changeTodo, deleteTodo} = this.props;
        // const { changeTodo } = this.props;
        return (
            <ul className="todo-main">
                {
                    todos.map(todos => {
                        return <Item key={todos.id} {...todos} changeTodo={changeTodo} deleteTodo={deleteTodo}  />
                    })
                }
            </ul>
        )
    }
}
