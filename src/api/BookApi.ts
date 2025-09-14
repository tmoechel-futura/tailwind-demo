import axios from "axios";
import type { Book } from "../types/book.types";

export const getBooks = async () => {
    const response = await axios.get<Book[]>('http://localhost:3001/books');
    return response.data;
}

export const createBook = async (title: string) => {
    const response = await axios.post<Book>('http://localhost:3001/books', { title });
    return response.data;
}