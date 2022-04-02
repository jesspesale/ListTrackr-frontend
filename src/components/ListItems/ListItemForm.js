import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { createListItem } from "../../redux/listActions"

export default function ListItemForm({list}) {
  
  const [item, setItem] = useState("")
  const dispatch = useDispatch()

    const capitalize = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

  function handleSubmit(e) {
    e.preventDefault()
    let newItem = {description: capitalize(item), completed: false, list_id: list.id}
    dispatch(createListItem(newItem, list.id))
    setItem("")
  }


  return (
    <div>
      <br></br>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Add something to your list"
        />
        <button className="add-button">Add</button>
      </form>
    </div>
  )
}
