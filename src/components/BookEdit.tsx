import { useContext, useState } from "react";
import type { Book } from "../types/book.types";
import { BooksContext } from "../context/BooksContext";

interface BookEditProps {
  book: Book
  onSubmit: () => void;
}

export default function BookEdit({ book, onSubmit }: BookEditProps) {

  const [bookTitle, setBookTitle] = useState<string>(book.title);
  const { handleBookChange } = useContext(BooksContext);


  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(`New title: ${bookTitle}`); // TODO: call onBookUpdate prop
    onSubmit();
    handleBookChange(book.id, bookTitle);
  }

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setBookTitle(event.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-2 m-6 p-6 bg-gray-700 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="text-white font-bold mb-1">Title</div>
      <input
        name="query"
        value={bookTitle} // controlled component 
        onChange={handleTitleChange}
        placeholder="Change Title…"
        className="border border-green-700 bg-white text-green-900 p-1 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
      <button type="submit" className="px-2 py-1 rounded-md bg-green-600 hover:bg-green-700 text-white font-semibold shadow transition">
        Save!
      </button>
    </form>
  )
}
