import React, { Component } from 'react'

export default class MyForm extends Component {
  state = {
    name: 'ben',
    favPet: '',
    remMe: false,
    number: 'Two'
  }

  handleChange = (e, fieldName) => {
    console.log(fieldName)
    this.setState({
      [fieldName]: "checkbox" ? e.target.checked : e.target.value
    })
  }

  handleSubmit = () => {
    console.log(this.state)
  }
  render () {
    return (
      <div>
        <input
          value={this.state.name}
          onChange={e => this.handleChange(e, 'name')}
        />
        <textarea
          value={this.state.favPet}
          onChange={e => this.handleChange(e, 'favPet')}
        />
        <input
          type='checkbox'
          onChange={e => this.handleChange(e, 'remMe')}
          checked={this.state.remMe}
        />
        <select
          value={this.state.number}
          onChange={e => this.handleChange(e, 'number')}
        >
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
