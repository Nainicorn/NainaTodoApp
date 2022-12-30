import React from 'react'
import "./Add.css"

function Add() {
  return (
    <>
      <h3 className='add-head'>Add TODO</h3>
      <form className="add-form">
        <label className="label">
          TODO Name:
          <input type="text" name="todo" />
        </label>

        <label className="label">
          TODO Date:
          <input type="date" name="date" />
        </label>

        <label className="label">
          TODO Category:
          <select name="category">
            <option value="school">School</option>
            <option value="work">Work</option>
            <option value="chores">Chores</option>
          </select>
        </label>

        <input type="submit" value="Submit" className="submit-btn" />
      </form>
    </>
  )
}

export default Add