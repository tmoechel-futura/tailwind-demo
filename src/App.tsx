import searchPhotos from "./api/unsplash-api"
import SearchBar from "./components/SearchBar"
import ImageList from "./components/ImageList"; 
import { useState } from "react";
import type { UnsplashPhoto } from "./api/unsplash.types";


function App() {
  const [images, setImages] = useState<UnsplashPhoto[]>([]);

  // returns a promise
  const handleFormSubmit = async (data: string): Promise<void> => {
    const searchResult = await searchPhotos({ query: data, page: 1, per_page: 10 });
    setImages(searchResult);
    console.log(searchResult);
  }

  return (
    <main className="mx-auto max-w-6xl p-6">
      <SearchBar onSearchSubmit={handleFormSubmit} />
      <ImageList images={images} />
    </main> 
  )
}

export default App
