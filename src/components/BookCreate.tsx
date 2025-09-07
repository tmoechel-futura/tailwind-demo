import { useState } from "react";

interface BookCreateProps {
    onBookCreate: (title: string) => void;
}

export default function BookCreate({ onBookCreate }: BookCreateProps) {
    const [bookTitle, setBookTitle] = useState<string>("");

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        onBookCreate(bookTitle);
        setBookTitle(""); // clear input field will not work with uncontrolled component
    }

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setBookTitle(event.target.value);
    };

    return (
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-1 m-6 p-6 bg-gray-700 green-900 rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="text-2xl font-bold text-white mb-2">Add a Book</div>
            <div className="text-white font-bold">Title</div>
            <div className="flex gap-2 items-center">
                <input
                    name="query"
                    value={bookTitle} // controlled component 
                    onChange={handleTitleChange}
                    placeholder="Add Book Title…"
                    className="border border-green-700 bg-white text-green-900 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                <button type="submit" className="px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white font-semibold shadow transition">
                    Create!
                </button>
            </div>
        </form>
    );
}
