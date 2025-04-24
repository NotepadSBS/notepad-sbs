const notepad = document.getElementById("notepad");
const clearNotesBtn = document.getElementById("clearNotesBtn");
const downloadBtn = document.getElementById("downloadBtn");
const copyBtn = document.getElementById("copyBtn");
const toggleCheckbox = document.getElementById("checkbox");

// Load saved notes from localStorage when the page is loaded
window.onload = () => {
    notepad.value = localStorage.getItem("notes") || "";  // Set text area content from localStorage
};

// Auto-save notes in localStorage when the user types in the textarea
notepad.addEventListener("input", () => {
    localStorage.setItem("notes", notepad.value);  // Save notes to localStorage
});

// Clear notes button functionality
clearNotesBtn.addEventListener("click", () => {
    const confirmation = window.confirm("Are you sure you want to clear all notes?");
    if (confirmation) {
        notepad.value = '';  // Clear the textarea
        localStorage.removeItem("notes");  // Remove notes from localStorage
    }
});

downloadBtn.addEventListener("click", () => {
    const text = notepad.value;
    const blob = new Blob([text], { type: "text/plain" });
    const anchor = document.createElement("a");

    anchor.href = URL.createObjectURL(blob);
    anchor.download = "notes.txt";
    anchor.click();

    // Cleanup
    URL.revokeObjectURL(anchor.href);
});

copyBtn.addEventListener("click", () => {
    notepad.select();
    document.execCommand("copy");

    // Optional: Alert user that it's copied
    copyBtn.textContent = "Copied!";
    setTimeout(() => {
        copyBtn.textContent = "Copy to Clipboard";
    }, 1500);
});

// Handle theme toggle inside hamburger menu
toggleCheckbox.addEventListener("change", () => {
    if (toggleCheckbox.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    }
});

// Show/hide hamburger menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}
