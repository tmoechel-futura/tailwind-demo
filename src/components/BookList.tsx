import type { Book } from "../types/book.types";
import BookShow from "./BookShow";

interface BookListProps {
  books: Book[];
  onBookDelete: (id: string) => void;
  onBookChange: (id: string, title: string) => void;
}

export default function BookList({ books, onBookDelete, onBookChange }: BookListProps) {
  return (
    <div className="max-w-4xl mx-auto m-6 p-6 bg-gray-700 rounded-lg shadow-lg flex flex-col gap-3">
      <div className="text-2xl font-bold text-white mb-4"> Reading List </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {books.map((book) => (
          <BookShow key={book.id} book={book} onBookDelete={onBookDelete} onBookChange={onBookChange} />
        ))}
      </div>
    </div>
  );
}
