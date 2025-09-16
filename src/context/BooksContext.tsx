import { createContext, useState } from "react";
import type { Book } from "../types/book.types";
import { createBook, deleteBook, getBooks, updateBook } from "../api/BookApi";

interface BooksContextType {
    books: Book[];
    fetchBooks: () => Promise<void>;
    handleBookCreate: (title: string) => Promise<void>;
    handleBookDelete: (id: number) => Promise<void>;
    handleBookChange: (id: number, title: string) => Promise<void>;
}

interface BooksProviderProps {
    children: React.ReactNode;
}

export const BooksContext = createContext<BooksContextType>(
    {} as BooksContextType
)

export default function BooksProvider({ children }: BooksProviderProps) {
    //hooks
    const [books, setBooks] = useState<Book[]>([])

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
            setBooks((prev) => [...prev, bookCreated]);
        } catch (error) {
            console.error("Error creating book:", error);
        }
    }

    const handleBookDelete = async (id: number) => {
        try {
            await deleteBook(id);
            setBooks(books.filter((book) => book.id !== id));
        } catch (error) {
            console.error("Error deleting book:", error);
        }
    }

    const handleBookChange = async (id: number, title: string) => {
        const bookUpdated = await updateBook(id, title);
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...bookUpdated };
            }
            return book;
        });
        setBooks(updatedBooks);
    }

    // value prop determines what values are accessible to child components
    return (
        <BooksContext.Provider value={{ books, fetchBooks, handleBookCreate, handleBookDelete, handleBookChange }}>
            {children}
        </BooksContext.Provider>
    );
}