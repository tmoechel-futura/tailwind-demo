import { useState } from "react";
import type { Book } from "../types/book.types";
import BookEdit from "./BookEdit";

import { X, Pencil } from "lucide-react";

interface BookShowProps {
  book: Book;
  onBookDelete: (id: string) => void;
  onBookChange: (id: string, title: string) => void;
}

export default function BookShow({ book, onBookDelete, onBookChange }: BookShowProps) {

  const [showEdit, setShowEdit] = useState(false);

  const handleBookDelete = () => {
    onBookDelete(book.id);
  }

  const handleBookEdit = () => {
    setShowEdit(!showEdit);
  }

  const handleBookChange = (id: string, title: string) => {
    onBookChange(id, title);
    setShowEdit(false);
  }

  let content =
    <div className="font-bold text-amber-950 mb-2">
      {book.title}
      <img
        src={`https://picsum.photos/seed/${book.id}/200/300`}
        alt={book.title}
        className="w-full h-48 object-cover rounded-md mt-2"
      />
    </div>
  if (showEdit) {
    content = <BookEdit book={book} onBookChange={handleBookChange} />
  }

  return (
    <div className="bg-gray-200 rounded-lg shadow p-4 flex flex-col text-white relative">
      <button
        onClick={handleBookEdit}
        className="absolute top-2 right-9 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-blue-600"
        aria-label="Edit book"
      >
        <Pencil className="w-4 h-4" />
      </button>
      <button
        onClick={handleBookDelete}
        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center 
        justify-center hover:bg-red-600 text-lg leading-none text-center"
        aria-label="Delete book"
      >
        <X className="w-4 h-4" />
      </button>
      {content}
    </div>
  )
}
