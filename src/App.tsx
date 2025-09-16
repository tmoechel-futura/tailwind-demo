import { useContext, useEffect } from "react";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { BooksContext } from "./context/BooksContext";

export default function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  //render
  return (
    <main>
      <BookList />
      <BookCreate />
    </main>
  )
}