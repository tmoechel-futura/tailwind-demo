import { useEffect, useState } from "react";

import type { Book } from "./types/book.types";
import { createBook, getBooks } from "./api/BookApi";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

export default function App() {
  //hooks
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    fetchBooks();
  }, []);

  //handlers
  const fetchBooks = async () => {
    try {
      const books = await getBooks();
      setBooks(books);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };
  const handleBookCreate = async (title: string) => {
    try {
      const bookCreated = await createBook(title);
      setBooks([...books, bookCreated]);
    } catch (error) {
      console.error("Error creating book:", error);
    }
  }

  const handleBookDelete = (id: string) => {
    const updatedBooks = books.filter((book) => book.id !== id)
    setBooks(updatedBooks)
  }

  const handleBookChange = (id: string, title: string) => {
    console.log(`change book with id ${id} and title ${title}}`);
    const updatedBooks = books.map((book) => book.id === id ? { ...book, title } : book)
    setBooks(updatedBooks)
  }

  //render
  return (
    <main>
      <BookList books={books} onBookDelete={handleBookDelete} onBookChange={handleBookChange} />
      <BookCreate onBookCreate={handleBookCreate} />
    </main>
  )
}