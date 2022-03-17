import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { createList } from "../../redux/listActions"
import { useNavigate } from "react-router-dom"
import "./Lists.css"


export default function ListForm() {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()


    function handleSubmit(e){
        e.preventDefault()
        dispatch(createList({ title: title, completed: false }))
        setTitle('')
        navigate('/lists')
    }

  return (
    <div className="list-form">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="list-title">What type of list are you making? </h2>
        <label className="list-label">Title: </label>
        <input
          value={title}
          className="input"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br></br><br></br>
        <button className="create-list-button">Create List</button>
      </form>
    </div>
  );
}
