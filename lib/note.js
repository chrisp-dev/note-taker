class Note {
    constructor({ title, text }) {
        this.id = Note.id;
        Note.id++;
        this.title = title;
        this.text = text;
    }

    get Title() {
        return this.title;
    }

    get Text() {
        return this.text;
    }
}

Note.id = 1;

module.exports = Note;