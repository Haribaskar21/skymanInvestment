const BASE_URL = "http://localhost:4000/api/announcements";

export async function fetchAnnouncements() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch announcements");
  return await res.json();
}
