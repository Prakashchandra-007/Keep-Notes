import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notesData from '../notes'



function App() {
    return (
        <div >
            <Header />
            {/* adding notes from the notesData array */}
            {
                notesData.map(cardData=>
                     <Note  key = {cardData.id} title = {cardData.title} content = { cardData.content}/>  )
            }
            <Footer />

        </div>
    );
}

export default App;