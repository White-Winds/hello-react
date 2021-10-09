import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {

    state = {
        todos: [
            { id: '01', name: '干饭', done: true },
            { id: '02', name: '摸鱼', done: false },
            { id: '03', name: '划水', done: true },

        ]
    }

    addTodos = (todosObj) => {
        const { todos } = this.state;
        const newTodos = [todosObj, ...todos]
        this.setState({ todos: newTodos })
    }

    changeTodo = (id, done) => {
        const { todos } = this.state;
        const newTodos = todos.map((todosObj) => {
            if (todosObj.id === id) return { ...todosObj, done: done }
            else return todosObj;
        })
        this.setState({ todos: newTodos });
    }
    changeAllTodo = (done)=>{
        const { todos } = this.state;
        const newTodos = todos.map((todosObj)=>{
            
            return{...todosObj,done: done}
        })
        console.log(newTodos,'done');
        this.setState({ todos: newTodos });
    }

    render() {
        const { todos } = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodos={this.addTodos} />
                    <List todos={todos} changeTodo={this.changeTodo} changeAllTodo={this.changeAllTodo} />
                    <Footer changeAllTodo={this.changeAllTodo}/>
                </div>
            </div>
        )
    }
}
