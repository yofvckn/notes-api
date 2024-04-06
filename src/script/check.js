import { notesData } from "../data/data.js";

// Mengecek apakah ada data catatan di localStorage
const localStorageNotes = localStorage.getItem("notesData");
if (localStorageNotes) {
  try {
    const parsedNotes = JSON.parse(localStorageNotes);
    Object.assign(notesData, parsedNotes);
  } catch (error) {
    console.error("Error parsing notes data from localStorage:", error);
  }
}
