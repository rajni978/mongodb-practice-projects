const noteForm = document.getElementById("noteForm");
const notesList = document.getElementById("notesList");
const responseMessage = document.getElementById("responseMessage");

async function fetchNotes() {
    try {
        const response = await fetch("http://localhost:3000/notes");

        const notes = await response.json();

        notesList.innerHTML = "";

        notes.forEach(function(note) {
            const card = document.createElement("div");

            card.className = "note-card";

            card.innerHTML = `
                <h3>${note.title}</h3>
                <p>${note.content}</p>
                <small>
                    Created: ${new Date(note.createdAt).toLocaleString()}
                </small>
            `;

            notesList.appendChild(card);
        });

    } catch (error) {
        console.log("Failed to fetch notes:", error);
    }
}


noteForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    try {

        const response = await fetch("http://localhost:3000/notes", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                title: title,
                content: content
            })
        });

        const data = await response.json();

        console.log(data);

        responseMessage.textContent = "Note saved successfully! ✨";

        noteForm.reset();

        fetchNotes();

    } catch (error) {

        console.log("Failed to save note:", error);

        responseMessage.textContent = "Failed to save note.";
    }
});


fetchNotes();

