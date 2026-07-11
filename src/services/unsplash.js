const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export async function getHostelImages(count = 20) {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=student accommodation apartment&per_page=${count}`,
    {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Unsplash images");
  }

  const data = await response.json();

  return data.results;
}