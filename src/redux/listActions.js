import { FETCH_LISTS, DELETE_LIST, EDIT_LIST_ITEM, ADD_LIST, ADD_ITEM, DELETE_LIST_ITEM } from "./constants"

export function fetchLists(){
    return (dispatch) => {
        fetch("https://listtrackr-backend.herokuapp.com/api/v1/lists")
          .then(res => res.json())
          .then(lists => dispatch({ type: FETCH_LISTS, payload: lists }))
    }
}

export function createList(list){
    return (dispatch) => {
        fetch("https://listtrackr-backend.herokuapp.com/api/v1/lists", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify(list)
      })
        .then(res => res.json())
        .then(list => dispatch({ type: ADD_LIST, payload: list }))
    }    
}

export function createListItem(item, listId) {
  return (dispatch) => {
    fetch(`https://listtrackr-backend.herokuapp.com/api/v1/lists/${listId}/list_items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(item)
    })
      .then(res => res.json())
      .then(list => dispatch({ type: ADD_ITEM, payload: list }))
  }
}


export const deleteListItem = (listId, itemId) => {
  return (dispatch) => {
      fetch(`https://listtrackr-backend.herokuapp.com/api/v1/lists/${listId}/list_items/${itemId}`, {
          method: "DELETE",
        })
        .then(resp => resp.json())
        .then(list => dispatch({ type: DELETE_LIST_ITEM, payload: list }))
  }
}

export const deleteList = (listId) => {
  return (dispatch) => {
    fetch(`https://listtrackr-backend.herokuapp.com/api/v1/lists/${listId}`, {
      method: "DELETE",
    })
      .then(resp => resp.json())
      .then(lists => dispatch({ type: DELETE_LIST, payload: lists }))
  }
}

export const editListItem = (listId, item) => {
  return (dispatch) => {
    fetch(`https://listtrackr-backend.herokuapp.com/api/v1/lists/${listId}/list_items/${item.id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(item)
    })
      .then((resp) => resp.json())
      .then(lists => console.log(lists))
      .then((lists) => dispatch({ type: EDIT_LIST_ITEM, payload: lists }))
  }
}