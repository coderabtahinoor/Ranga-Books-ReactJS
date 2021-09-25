import React, { useState } from 'react'
import Bookmarks from './Components/Bookmarks'
import Books from './Components/Books'
import Header from './Components/Header'

const App = () => {
  const [bookmarked, setBookMarked] = useState([])
  const handleBookMarks = ({ book }) => {
    const newBookmark = [...bookmarked, book]
    setBookMarked(newBookmark)
  }

  return (
    <div className="max-w-screen-2xl mx-auto px-12">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-10 my-16">
        {/* all books  */}
        <div className="col-span-3">
          <Books handleBookMarks={handleBookMarks} />
        </div>

        {/* bookmarks  */}
        <div className="col-span-1">
          <Bookmarks bookmarked={bookmarked} />
        </div>
      </div>
    </div>
  )
}

export default App
