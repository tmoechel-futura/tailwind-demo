import { useState } from "react";

interface BookCreateProps {
  title?: string;
}

interface BookCreateProps {
    onBookCreate: (data: string) => void;
}

export default function BookCreate({ onBookCreate }: BookCreateProps) {
    const [bookTitle, setBookTitle] = useState<string>("");

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        onBookCreate(bookTitle);
    }

    const bookTitleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setBookTitle(event.target.value);
    };

    return (
        <form onSubmit={handleFormSubmit} className="flex gap-2">
            <input
                name="query"
                value={bookTitle} // controlled component 
                onChange={bookTitleChange}
                placeholder="Add Book Title…"
                className="border p-2 rounded w-full"
            />
            <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">
                Add Book
            </button>
        </form>
    );
}
