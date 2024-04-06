import tambahNote from "./add.js";
import deleteNote from "./delete.js";
import editNote from "./edit.js";
import "../data/data.js";
import "./check.js";

// Elemen kustom untuk catatan
class NoteElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const { id, title, body } = this.dataset;
    this.innerHTML = `
      <div class="note" data-id="${id}">
        <h2>${title}</h2>
        <p>${body}</p>
        <div class="edit-buttons" style="display: flex; justify-content: center;"> <button id="buttonEdit"><i class="fa-solid fa-pen"></i></button>
          <button id="buttonDel"><i class="fas fa-trash"></i></button>
        </div>
      </div>
    `;
    this.querySelector("#buttonDel").addEventListener("click", () => {
      deleteNote(id);
    });
    this.querySelector("#buttonEdit").addEventListener("click", () => {
      editNote(id);
    });
  }
}
customElements.define("note-element", NoteElement);

// Elemen kustom untuk bar aplikasi
class barApk extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="text">
        <h1 id="notesApp">Aplikasi Note</h1>
        <div class="search-container">
          <i class="fas fa-search"></i>
          <input type="text" id="pencarian" placeholder="Cari Note">
        </div>
      </header>
    `;
  }
}
customElements.define("bar-aplikasi", barApk);

// Elemen kustom untuk input catatan
class NoteInput extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="text">
        <textarea id="judulNote" name="story" rows="1" cols="50" placeholder="Masukkan Judul Disini"></textarea>
      </div>
      <div class="text">
        <textarea id="isiNote" name="story" rows="10" cols="50" placeholder="Masukkan Isi Note Disini"></textarea>
      </div>
        <div class="text">
      <button id="buttonAdd"><i class="fas fa-add"></i> Tambah Note</button>
      </div>
    `;
    this.querySelector("#buttonAdd").addEventListener("click", () => {
      tambahNote();
    });
  }
}

customElements.define("note-input", NoteInput);
