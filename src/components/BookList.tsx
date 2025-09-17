import BookShow from "./BookShow";
import { useBooksContext } from "../hooks/useBooksContext";

export default function BookList() {
  const { books } = useBooksContext();

  console.log("booklist", books);

  return (
    <div className="max-w-4xl mx-auto m-6 p-6 bg-gray-700 rounded-lg shadow-lg flex flex-col gap-3">
      <div className="text-2xl font-bold text-white mb-4"> Reading List </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {books.map((book) => (
          <BookShow key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
