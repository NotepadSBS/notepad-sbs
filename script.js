
const notepad = document.getElementById("notepad");

// Load saved notes
window.onload = () => {
    notepad.value = localStorage.getItem("notes") || "";
};

// Save notes automatically
notepad.addEventListener("input", () => {
    localStorage.setItem("notes", notepad.value);
  
// Clear Notes Button Functionality
clearNotesBtn.addEventListener("click", () => {
    const confirmation = window.confirm("Are you sure you want to clear all notes?");
    if (confirmation) {
        notepad.value = '';  // Clear the text area
        localStorage.removeItem("notes");  // Clear the saved notes in localStorage
    }

});
