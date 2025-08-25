import type { UnsplashPhoto } from "../api/unsplash.types";
import ImageShow from "./ImageShow";

interface ImageListProps {
    images: UnsplashPhoto[];
}

function ImageList({ images }: ImageListProps) {
    
    const showImages = images.map((image: UnsplashPhoto) => {
            return <ImageShow key={image.id} id={image.id} urls={image.urls} alt={image.alt_description} />
        })

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {showImages}
        </div>
    )
}

export default ImageList;