import { useState } from "react";

interface SearchBarProps {
    onSearchSubmit: (data: string) => void;
}

function SearchBar({ onSearchSubmit: onSubmit }: SearchBarProps) {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        onSubmit(searchTerm);
    }

    const searchTermChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchTerm(event.target.value);
    };

    return (
        <form onSubmit={handleFormSubmit} className="flex gap-2">
            <input
                name="query"
                value={searchTerm} // controlled component 
                onChange={searchTermChange}
                placeholder="Search…"
                className="border p-2 rounded w-full"
            />
            <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">
                Search
            </button>
        </form>
    );
}

export default SearchBar;