import { useState } from "react";

interface SearchBarProps {
    onSubmit: (data: string) => void;
}

function SearchBar({ onSubmit }: SearchBarProps) {
    const [value, setValue] = useState<string>("");

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        onSubmit(value);
    }

    return (
        <form onSubmit={handleFormSubmit} className="flex gap-2">
            <input
                name="query"
                value={value}
                onChange={(event) => setValue(event.target.value)}
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