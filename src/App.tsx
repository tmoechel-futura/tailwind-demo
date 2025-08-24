import SearchBar from "./components/SearchBar"
function App() {
  const handleFormSubmit = (data: string): void => {
    console.log(data); 
  }

  return (
    // mx is x marging
    <main className="mx-auto max-w-6xl p-6">
      <SearchBar onSubmit={handleFormSubmit} />
    </main>
  )
}

export default App
