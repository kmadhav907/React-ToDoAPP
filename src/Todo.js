import React from 'react'

const Todo = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className='collection-item' key={todo.id}>
          <span
            onClick={() => {
              deleteTodo(todo.id)
            }}
          >
            {todo.content}
          </span>
        </div>
      )
    })
  ) : (
    <span className='alert alert-danger' md={5}>
      {' '}
      You have no todos left{' '}
    </span>
  )

  return (
    <div className='todos collection' style={{ fontSize: '30px' }}>
      {todoList}
    </div>
  )
}

export default Todo
