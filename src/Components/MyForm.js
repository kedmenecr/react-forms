import React, { Component } from 'react'

export default class MyForm extends Component {
  state = {
    name: 'ben',
    favPet: '',
    remMe: false,
    number: 'Two'
  }

  handleChange = e => {
    const isCheckbox = e.target.type === 'checkbox'
    console.log(isCheckbox)
    this.setState({
      [e.target.name]: isCheckbox ? e.target.checked : e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <textarea
          name='favPet'
          value={this.state.favPet}
          onChange={this.handleChange}
        />
        <input
          name='remMe'
          type='checkbox'
          onClick={e => this.handleChange}
          checked={this.state.remMe}
        />
        <select
          name='number'
          value={this.state.number}
          onChange={this.handleChange}
        >
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
        </select>
        <div>
          <button type='submit'>Submit!</button>
        </div>
      </form>
    )
  }
}
