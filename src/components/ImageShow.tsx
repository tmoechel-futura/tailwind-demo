import type { UnsplashUrls } from "../api/unsplash.types";

interface ImageShowProps {
    id: string;
    urls: UnsplashUrls
    alt: string | null;
}

export default function ImageShow({ id, urls, alt }: ImageShowProps) {
    return <div className="rounded-xl shadow-xl overflow-hidden hover:shadow-2xl bg-gray-100 p-2 transition-shadow duration-200">
        <img alt={alt ?? id} src={urls.small} className="w-full h-60 object-cover rounded-l"/>
    </div>
}