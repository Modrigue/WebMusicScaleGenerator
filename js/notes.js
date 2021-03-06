"use strict";
//////////////////////////////////// STRINGS //////////////////////////////////
// notes dictionnary (international notation)
const notesDict_int = new Map();
notesDict_int.set(0, "A");
notesDict_int.set(1, "A#");
notesDict_int.set(2, "B");
notesDict_int.set(3, "C");
notesDict_int.set(4, "C#");
notesDict_int.set(5, "D");
notesDict_int.set(6, "D#");
notesDict_int.set(7, "E");
notesDict_int.set(8, "F");
notesDict_int.set(9, "F#");
notesDict_int.set(10, "G");
notesDict_int.set(11, "G#");
// notes dictionnary (french notation)
const notesDict_fr = new Map();
notesDict_fr.set(0, "La");
notesDict_fr.set(1, "La#");
notesDict_fr.set(2, "Si");
notesDict_fr.set(3, "Do");
notesDict_fr.set(4, "Do#");
notesDict_fr.set(5, "Ré");
notesDict_fr.set(6, "Ré#");
notesDict_fr.set(7, "Mi");
notesDict_fr.set(8, "Fa");
notesDict_fr.set(9, "Fa#");
notesDict_fr.set(10, "Sol");
notesDict_fr.set(11, "Sol#");
// global dictionary
const notesDicts = new Map();
notesDicts.set("int", notesDict_int);
notesDicts.set("fr", notesDict_fr);
/////////////////////////////////// FUNCTIONS /////////////////////////////////
// add interval to note value
function addToNoteValue(noteValue, interval) {
    return ((noteValue + interval) % 12);
}
function updateNoteSelector(id, defaultNoteValue = -1, firstNoteEmpty = false) {
    // get selected culture
    const lang = getSelectedCulture();
    // get note selecor
    const noteSelect = document.getElementById(id);
    const initialized = (noteSelect.options != null && noteSelect.options.length > 0);
    const notesDict = notesDicts.get(lang);
    const noteParamValue = parseNoteParameter();
    if (noteParamValue >= 0)
        defaultNoteValue = noteParamValue;
    // do not set default values for scale finder / chord finder notes selectors
    if ((id.startsWith("note_finder") && id != "note_finder_tonic")
        || id.startsWith("chord_explorer_note"))
        defaultNoteValue = -1;
    // fill note selector
    if (!initialized) {
        if (firstNoteEmpty) {
            let option = document.createElement('option');
            option.value = "-1";
            option.innerHTML = "";
            if (defaultNoteValue == -1)
                option.selected = true;
            noteSelect.appendChild(option);
        }
        // init
        for (const [key, value] of notesDict) {
            let option = document.createElement('option');
            option.value = key.toString();
            option.innerHTML = notesDict.get(key);
            if (key == defaultNoteValue)
                option.selected = true;
            noteSelect.appendChild(option);
        }
    }
    else {
        // update
        let index = firstNoteEmpty ? 1 : 0;
        for (const [key, value] of notesDict) {
            // if empty note, nop
            if (key == -1)
                continue;
            noteSelect.options[index].innerHTML = notesDict.get(key);
            index++;
        }
    }
}
//# sourceMappingURL=notes.js.map