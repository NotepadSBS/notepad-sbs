
const notepad = document.getElementById("notepad");

// Load saved notes
window.onload = () => {
    notepad.value = localStorage.getItem("notes") || "";
};

// Save notes automatically
notepad.addEventListener("input", () => {
    localStorage.setItem("notes", notepad.value);
});
