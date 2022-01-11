import React, { useState } from 'react';

export const AddTodos = ({ addTodo }) => {
    // Using setState methods for form handling
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be empty");
            return;
        }

        // we are calling addTodo function in app.js and passing title and desc to it
        addTodo(title, desc);
        setTitle("");
        setDesc("");
    }

    return (
        <div className='container my-3'>
            <h2>Add a Todo</h2>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(event) => setDesc(event.target.value)} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
