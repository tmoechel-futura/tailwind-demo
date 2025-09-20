import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import type { BooksContextType } from "../context/BooksContext";

export function useBooksContext(): BooksContextType {
    return useContext(BooksContext);
}