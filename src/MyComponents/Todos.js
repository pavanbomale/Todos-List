import React from 'react'
import { TodoItem } from "../MyComponents/TodoItem";

export const Todos = (props) => {
    let myStyle={
        minHeight : '40vh',
        margin : "70px auto"
    } 
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Todos List</h3>
            {props.todos.length===0? " YOU HAVE NO TODOS FOR NOW, YOUR TODOS WILL DISPLAY HERE.":
            props.todos.map((todo) => {
                return (
                    <>
                <TodoItem todo={todo} key={todo.sno}  onDelete={props.onDelete} />
                <hr />
                </>
                )
            })
            }
        </div>
    )
}
