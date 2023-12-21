import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Note from './components/note'
import notes from './notes'

const App = () => {


function createNote(noteItem){
 return  <Note key= {noteItem.key} title ={noteItem.title}
  content ={noteItem.content} />
}

  return (
    <div>
      <Navbar/>
      {notes.map(createNote)}
      <Footer/>
    </div>
    

  )
}

export default App