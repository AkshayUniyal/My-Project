function addNote() {
    const noteInput = document.getElementById('note-input');
    const notesContainer = document.getElementById('notes-container');

    if (noteInput.value.trim() !== '') {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note';
        noteDiv.textContent = noteInput.value;

        notesContainer.appendChild(noteDiv);
        noteInput.value = '';
    }
}

function clearNotes() {
    const notesContainer = document.getElementById('notes-container');
    notesContainer.innerHTML = '';
}

