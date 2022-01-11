import React from 'react'

export const TodoItem = ({ todo, onDeleteFunc }) => {
    return (
        <>
            <div>
                <h5>{todo.title}</h5>
                <p>{todo.desc}</p>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Done
                    </label>
                </div>
                <button className='btn btn-sm btn-danger my-2' onClick={() => onDeleteFunc(todo)}>Delete</button>
            </div>
            <hr />
        </>
    )
}
