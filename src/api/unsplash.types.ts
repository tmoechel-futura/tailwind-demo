// unsplash.types.ts
export interface UnsplashUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3?: string;
}

export interface UnsplashUser {
  id: string;
  username: string;
  name: string;
  profile_image?: { small: string; medium: string; large: string };
  links?: { html: string };
}

export interface UnsplashPhoto {
  id: string;
  width: number;
  height: number;
  color?: string | null;
  alt_description: string | null;
  description: string | null;
  urls: UnsplashUrls;
  user: UnsplashUser;
  links: { html: string; download: string; download_location: string };
}

export interface UnsplashSearchResponse<T> {
  total: number;
  total_pages: number;
  results: T[];
}
