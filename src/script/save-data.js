import { notesData } from "../data/data.js";

// Fungsi untuk menyimpan data catatan ke localStorage
function saveDataToLocalStorage() {
  localStorage.setItem("notesData", JSON.stringify(notesData));
}

export default saveDataToLocalStorage;
