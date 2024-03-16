import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateBooks from './Pages/CreateBooks';
import DeleteBooks from './Pages/DeleteBooks';
import EditBooks from './Pages/EditBooks';
import HomeBooks from './Pages/HomeBooks';
import ShowBooks from './Pages/ShowBooks';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeBooks/>}/>
      <Route path='/books/create' element={<CreateBooks/>}/>
      <Route path='/books/details/:id' element={<ShowBooks/>}/>
      <Route path='/books/edit/:id' element={<EditBooks/>}/>
      <Route path='/books/delete/:id' element={<DeleteBooks/>}/>


    </Routes>
  )
}

export default App
