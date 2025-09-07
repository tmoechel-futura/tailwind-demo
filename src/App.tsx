import { useState } from "react";
import BookCreate from "./components/BookCreate";
import type { Book } from "./types/book.types";
import BookList from "./components/BookList";

function App() {
  const [books, setBooksState] = useState<Book[]>([])

  const handleBookCreate = (title: string) => {
    const newBook = {
      id: crypto.randomUUID(),
      title
    }
    console.log(newBook);
    //immutable state update with the spread operator
    setBooksState([...books, newBook])
  }

  const handleBookDelete = (id: string) => {
    //books.filter creates a new array
    const updatedBooks = books.filter((book) => book.id !== id)
    setBooksState(updatedBooks)
  }

  const handleBookChange = (id: string, title: string) => {
    console.log(`change book with id ${id} and title ${title}}`);
    const updatedBooks = books.map((book) => book.id === id ? { ...book, title } : book)
    setBooksState(updatedBooks)
  }

  return (
    <main>
      <BookList books={books} onBookDelete={handleBookDelete} onBookChange={handleBookChange} />
      <BookCreate onBookCreate={handleBookCreate} />
    </main>
  )
}

export default App
