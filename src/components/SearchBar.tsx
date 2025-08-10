function SearchBar() {
    const handleFormSubmit = (): void => {
        console.log('I need to tell the parent about some dat');
    }

    return (
        <div>
            <h2>Search Bar Component</h2>
            <div>
                <form onSubmit={handleFormSubmit}>
                    <input />
                </form>
            </div>
        </div>
    );
}

export default SearchBar;