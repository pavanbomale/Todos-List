import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    let Style={
        marginBottom : "50px"
    }

    return (
        <div  style={Style}>
            <h2>{todo.title}</h2>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={ () => {onDelete(todo)}}>Delete</button>
        </div>
    )
}
