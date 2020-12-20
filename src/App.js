import React from 'react'
import Todo from './Todo'
import AddTodo from './Form'

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        content: 'Buy some milk',
      },
      {
        id: 2,
        content: 'Play a Game',
      },
    ],
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id
    })
    this.setState({
      todos: todos,
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos,
    })
    console.log(todos)
  }
  render() {
    return (
      <div className='todo-app container'>
        <h1 className='center blue-text jumbotron'>Todo</h1>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App
