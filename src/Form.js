import React, { Component } from 'react'

class AddTodo extends Component {
  state = {
    content: '',
    msg: '',
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.content === '') {
      this.setState({
        msg: 'Your todo is empty',
      })
    } else {
      this.props.addTodo(this.state)
      this.setState({
        content: '',
      })
    }
  }
  render() {
    const msg = this.state.msg ? (
      <footer className='alert alert-danger'>Your todo is empty</footer>
    ) : null
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <br />
          <br />
          <label className='label'>Add TODO</label>
          <input
            type='text'
            className='form-control'
            onChange={this.handleChange}
            value={this.state.content}
          ></input>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
        <br />
        <span>{msg}</span>
      </div>
    )
  }
}
export default AddTodo
