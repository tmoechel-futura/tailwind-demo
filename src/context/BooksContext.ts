import { createContext } from "react";
import type { Book } from "../types/book.types";

export interface BooksContextType {
    books: Book[];
    fetchBooks: () => Promise<void>;
    handleBookCreate: (title: string) => Promise<void>;
    handleBookDelete: (id: number) => Promise<void>;
    handleBookChange: (id: number, title: string) => Promise<void>;
}

export const BooksContext = createContext<BooksContextType>(
    {} as BooksContextType
)