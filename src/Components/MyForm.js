import React, { Component } from 'react'

export default class MyForm extends Component {
  state = {
    name: 'ben',
    favPet: '',
    remMe: false,
    number: 'Two'
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleChangePet = e => {
    this.setState({
      favPet: e.target.value
    })
  }
  handleChangeCheck = e => {
    this.setState({
      remMe: e.target.checked
    })
  }

  handleSelect = e => {
    this.setState({
      number: e.target.value
    })
  }

  handleSubmit = () => {
    console.log(this.state)
  }

  render () {
    return (
      <div>
        <input value={this.state.name} onChange={this.handleChange} />
        <textarea value={this.state.favPet} onChange={this.handleChangePet} />
        <input
          type='checkbox'
          onChange={this.handleChangeCheck}
          checked={this.state.remMe}
        />
        <select value={this.state.number} onChange={this.handleSelect}>
          <option>
            One
          </option>
          <option>
            Two
          </option>
          <option>
            Three
          </option>
        </select>

        <div>
          <button onClick={this.handleSubmit}>Submit!</button>
        </div>
      </div>
    )
  }
}
