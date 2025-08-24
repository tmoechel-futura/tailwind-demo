import axios, { AxiosError } from "axios";

import type { UnsplashPhoto, UnsplashSearchResponse } from "./unsplash.types";

const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

if (!accessKey) {
  throw new Error("Unsplash access key is not defined in environment variables.");
}

const unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${accessKey}`,
  },
});

interface SearchPhotosParams {
  query: string;
  page?: number;
  per_page?: number;
  orientation?: "landscape" | "portrait" | "squarish";
  order_by?: "relevant" | "latest";
  content_filter?: "low" | "high";
  color?: string; // you can narrow this later if you like
}

export async function searchPhotos({ query, page = 1, per_page = 10 }: SearchPhotosParams,
  signal?: AbortSignal
): Promise<UnsplashPhoto[]> {
  try {
    const { data } = await unsplash.get<UnsplashSearchResponse<UnsplashPhoto>>(
      "/search/photos",
      { params: { query, page, per_page }, signal }
    );
    return data.results;
  } catch (err) {
    const e = err as AxiosError<{ errors?: string[] }>;
    const details = e.response?.data?.errors?.join(", ");
    throw new Error(`Unsplash request failed: ${details ?? e.message}`);
  }
}

export default searchPhotos;