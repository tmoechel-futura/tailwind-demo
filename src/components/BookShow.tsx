import { useState } from "react";
import { X, Pencil } from "lucide-react";

import type { Book } from "../types/book.types";
import BookEdit from "./BookEdit";
import { useBooksContext } from "../hooks/useBooksContext";

interface BookShowProps {
  book: Book;
}

export default function BookShow({ book }: BookShowProps) {

  const [showEdit, setShowEdit] = useState(false);
  const { handleBookDelete } = useBooksContext();

  const bookDelete = () => {
    handleBookDelete(book.id);
  }

  const onBookEdit = () => {
    setShowEdit(!showEdit);
  }

  const onSubmit = () => {
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
    content = <BookEdit onSubmit={onSubmit} book={book} />
  }

  return (
    <div className="bg-gray-200 rounded-lg shadow p-4 flex flex-col text-white relative">
      <button
        onClick={onBookEdit}
        className="absolute top-2 right-9 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-blue-600"
        aria-label="Edit book"
      >
        <Pencil className="w-4 h-4" />
      </button>
      <button
        onClick={bookDelete}
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
