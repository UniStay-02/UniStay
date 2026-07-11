const API_URL = "https://api.rentcast.io/v1/properties";

const API_KEY = import.meta.env.VITE_RENTCAST_API_KEY;

// Get all hostels/properties
export async function getProperties() {
  const response = await fetch(
    `${API_URL}?city=Austin&state=TX&limit=20`,
    {
      headers: {
        "X-Api-Key": API_KEY,
        Accept: "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch properties");
  }

  return await response.json();
}

// Get one hostel/property by ID
export async function getPropertyById(id) {
  const properties = await getProperties();

  return properties.find(
    (property) => String(property.id) === String(id)
  );
}