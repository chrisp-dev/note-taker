class Note {
    constructor({ title, text }) {
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

module.exports = Note;