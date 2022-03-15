import React from 'react'
import './App.css'
import "../src/components/Lists/Lists.css"
import "../src/components/ListItems/ListItems.css";
import { Routes, Route } from "react-router-dom"
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLists } from './redux/listActions';

import Lists from "./components/Lists/Lists";
import ListForm from "./components/Lists/ListForm";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ListContainer from "./components/ListContainer";

export default function App() {
  const lists = useSelector((state) => state.lists);
  // replaces mapStateToProps
  const dispatch = useDispatch();
  // replaces mapDispatchToProps

  useEffect(() => {
    dispatch(fetchLists());
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <br></br>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lists" element={<Lists lists={lists} />} />
          <Route path="/lists/new" element={<ListForm />} />
          <Route path="/lists/:id" element={<ListContainer />} />
        </Routes>
      </div>
    </div>
  );
}
