import React from 'react'
import Todo from './Todo'

function Todos() {
    return (
        <div className="Todos">
            <Todo />
            <Todo />
            <Todo />
            <div className="Add-Todo">+ Add TODO</div>
        </div>
    )
}

export default Todos