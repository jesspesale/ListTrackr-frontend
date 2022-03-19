import React, {useState} from 'react'
import { deleteListItem, editListItem } from '../../redux/listActions'
import "../Lists/Lists.css"
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import {BsTrash} from "react-icons/bs"
import { FiEdit } from "react-icons/fi"

export default function ListItem({item}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [edit, setEdit] = useState(false)
  const [newItem, setNewItem] = useState(item.description);
    
  const capitalize = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
  }

  console.log(capitalize("yes"))

    const handleDelete = (clickedItem) => {
        const listId = clickedItem.list_id
        dispatch(deleteListItem(listId, clickedItem.id))
        navigate(`/lists/${listId}`)
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      item.description = newItem
      dispatch(editListItem(item.list_id, item))
      setEdit(false)
    }


    if(edit){
      return (
        <form onSubmit={(event) => handleSubmit(event)}>
          <input
            className="update-input"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Edit your list"
          />
          <button className="update-button" >Update</button>
        </form>
      );
    }


  return (
    <div className="list-item">
      <div className="item-row">{item.description}</div>
      <BsTrash className="delete-icon" onClick={() => handleDelete(item)} />
      <FiEdit className="edit-icon" onClick={() => setEdit(true)} />
    </div>
  );
}
