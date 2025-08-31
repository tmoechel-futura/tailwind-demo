import { useState } from "react";
import BookCreate from "./components/BookCreate";

interface BookProps {
  id: string;
  title: string;
}

function App() {
  const [books, setBooksState] = useState<BookProps[]>([])

  const handleBookCreate = (title: string) => {
    const newBook = {
      id: crypto.randomUUID(),
      title
    }
    console
    setBooksState([...books, newBook])
  }

  return (
    <main>
      <BookCreate onBookCreate={handleBookCreate} />
    </main>
  )
}

export default App
