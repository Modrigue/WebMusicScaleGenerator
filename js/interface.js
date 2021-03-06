"use strict";
const pagesArray = ["page_scale_explorer", "page_scale_finder", "page_chord_explorer"];
let pageSelected = "";
///////////////////////////////// INITIALIZATION //////////////////////////////
window.onload = function () {
    // test chord positions finder algorithms
    //testGenerateChordPositions();
    //testChordPositionsLog();
    // add events callbacks to HTML elements
    initializePlay();
    window.addEventListener("resize", onResize);
    //document.body.addEventListener("resize", onResize); // not working?
    // header
    document.getElementById("button_page_chord_explorer").addEventListener("click", () => { selectPage("page_chord_explorer"); });
    document.getElementById("button_page_scale_explorer").addEventListener("click", () => { selectPage("page_scale_explorer"); });
    document.getElementById("button_page_scale_finder").addEventListener("click", () => selectPage("page_scale_finder"));
    document.getElementById("checkboxLanguage").addEventListener("change", updateLocales);
    // scale explorer
    document.getElementById("note").addEventListener("change", onNoteChanged);
    document.getElementById("scale").addEventListener("change", onScaleChanged);
    document.getElementById("checkboxChords").addEventListener("change", () => { toggleDisplay('chords3_result'); toggleDisplay('chords4_result'); });
    document.getElementById("checkboxGuitar").addEventListener("change", () => toggleDisplay('scale_explorer_guitar_display'));
    document.getElementById("checkboxKeyboard").addEventListener("change", () => toggleDisplay('canvas_keyboard'));
    document.getElementById("scale_explorer_guitar_nb_strings").addEventListener("change", () => onNbStringsChanged('scale_explorer'));
    document.getElementById("scale_explorer_guitar_tuning").addEventListener("change", update);
    // scale finder
    for (let i = 1; i <= 8; i++) {
        const id = i.toString();
        document.getElementById(`note_finder${id}`).addEventListener("change", update);
        document.getElementById(`chord_finder${id}`).addEventListener("change", update);
    }
    document.getElementById('note_finder_tonic').addEventListener("change", update);
    document.getElementById('reset_scale_finder').addEventListener("click", resetScaleFinder);
    // chord explorer
    document.getElementById('note_explorer_chord').addEventListener("change", update);
    document.getElementById('chord_explorer_chord').addEventListener("change", update);
    for (let i = 1; i <= 6; i++) {
        const id = i.toString();
        document.getElementById(`chord_explorer_note${id}`).addEventListener("change", update);
    }
    document.getElementById("chord_explorer_guitar_nb_strings").addEventListener("change", () => onNbStringsChanged('chord_explorer'));
    document.getElementById("chord_explorer_guitar_tuning").addEventListener("change", update);
    document.getElementById("checkboxBarres").addEventListener("change", update);
    document.getElementById("chord_explorer_nb_strings_max").addEventListener("change", update);
};
function initLanguage() {
    const defaultLang = parseCultureParameter();
    const checkboxLanguage = document.getElementById('checkboxLanguage');
    checkboxLanguage.checked = (defaultLang == "fr");
    document.title = getString("title"); // force update
    updateLocales();
}
////////////////////////////////// SELECTORS //////////////////////////////////
function updateSelectors() {
    // get selected culture
    const lang = getSelectedCulture();
    // update scale explorer selectors
    updateNoteSelector('note', 3, false);
    updateScaleSelector('scale', "7major_nat,1");
    initGuitarNbStringsSelector('scale_explorer_guitar_nb_strings');
    initGuitarTuningSelector('scale_explorer_guitar_tuning');
    // update scale finder selectors
    for (let i = 1; i <= 8; i++) {
        const id = i.toString();
        updateNoteSelector(`note_finder${id}`, -1, true);
        initChordSelector(`chord_finder${id}`, "-1", true);
    }
    updateNoteSelector('note_finder_tonic', -1, true);
    // update chord explorer selectors
    updateNoteSelector('note_explorer_chord', 3, false);
    initChordSelector('chord_explorer_chord', "M", false);
    initGuitarNbStringsSelector('chord_explorer_guitar_nb_strings');
    initGuitarTuningSelector('chord_explorer_guitar_tuning');
    updateNbStringsForChordSelector();
    for (let i = 1; i <= 6; i++)
        updateNoteSelector(`chord_explorer_note${i}`, -1, true);
}
// get selected text from selector
function getSelectorText(id) {
    const selector = document.getElementById(id);
    const selectedIndex = selector.selectedIndex;
    return selector.options[selectedIndex].text;
}
//////////////////////////////////// EVENTS ///////////////////////////////////
function selectNoteAndScale(scaleId) {
    const scaleAttributes = scaleId.split("|");
    const tonicValue = parseInt(scaleAttributes[0]);
    const scaleKey = scaleAttributes[1];
    const noteSelect = document.getElementById('note');
    const scaleSelect = document.getElementById('scale');
    // select note and scale
    noteSelect.selectedIndex = tonicValue;
    scaleSelect.selectedIndex = getSelectorIndexFromValue(scaleSelect, scaleKey);
    update();
}
function initPagefromURLParams() {
    // parse URL parameters
    const chordParam = parseParameterById("chord");
    const scaleParam = parseParameterById("scale");
    const chordSpecified = (chordParam != null && chordParam != "");
    const scaleSpecified = (scaleParam != null && scaleParam != "");
    let specifiedPage = "";
    if (scaleSpecified)
        specifiedPage = "page_scale_explorer";
    else if (chordSpecified)
        specifiedPage = "page_chord_explorer";
    selectPage(specifiedPage);
}
function selectPage(pageId = "") {
    for (let id of pagesArray) {
        let button = document.getElementById(`button_${id}`);
        const buttonSelected = (id == pageId);
        button.className = buttonSelected ? "button-page-selected" : "button-page";
    }
    pageSelected = pageId;
    update();
}
function onNoteChanged() {
    update();
}
function onScaleChanged() {
    update();
}
function onNbStringsChanged(id) {
    let nbStrings = -1;
    // update corresponding guitar tuning selector
    nbStrings = getSelectedGuitarNbStrings(`${id}_guitar_nb_strings`);
    updateGuitarTuningGivenNbStrings(`${id}_guitar_tuning`, nbStrings);
    update();
}
// compute and update results
function update() {
    // display selected page
    for (let pageId of pagesArray)
        setVisible(pageId, (pageId == pageSelected));
    // get selected note and scale/mode values
    const noteValue = getSelectedNoteValue();
    const scaleValues = getSelectedScaleValues();
    const charIntervals = getSelectedScaleCharIntervals();
    const nbNotesInScale = scaleValues.length;
    // build scale notes list
    const scaleNotesValues = getScaleNotesValues(noteValue, scaleValues);
    document.getElementById('scale_result').innerHTML = getScaleNotesTableHTML(noteValue, scaleValues, charIntervals);
    // build chords 3,4 notes harmonization tables
    const showChords3 = (nbNotesInScale >= 6);
    const showChords4 = (nbNotesInScale >= 7);
    document.getElementById('chords3_result').innerHTML = showChords3 ? getChordsTableHTML(scaleValues, scaleNotesValues, 3) : "";
    document.getElementById('chords4_result').innerHTML = showChords4 ? getChordsTableHTML(scaleValues, scaleNotesValues, 4) : "";
    const scaleName = getSelectorText("scale");
    // checkboxes
    //setEnabled("checkboxChords3", showChords3);
    //setEnabled("checkboxChords4", showChords4);
    setEnabled("checkboxChords", showChords3);
    // update fretboard
    updateFretboard(noteValue, scaleValues, charIntervals, scaleName);
    updateFretboard(noteValue, scaleValues, charIntervals, scaleName); // HACK to ensure correct drawing
    // update keyboard
    updateKeyboard(noteValue, scaleValues, charIntervals, scaleName);
    updateKeyboard(noteValue, scaleValues, charIntervals, scaleName); // HACK to ensure correct drawing
    // update scale finder chords selectors
    let has1NoteSelected = false;
    for (let i = 1; i <= 8; i++) {
        const id = i.toString();
        const noteSelected = document.getElementById(`note_finder${id}`).value;
        const noteValue = parseInt(noteSelected);
        const hasNoteSelected = (noteValue >= 0);
        if (!hasNoteSelected)
            document.getElementById(`chord_finder${id}`).selectedIndex = 0;
        else
            has1NoteSelected = true;
        setEnabled(`chord_finder${id}`, hasNoteSelected);
    }
    setEnabled('reset_scale_finder', has1NoteSelected);
    setEnabled('note_finder_tonic', has1NoteSelected);
    if (!has1NoteSelected)
        document.getElementById("note_finder_tonic").selectedIndex = 0;
    // hide welcome page
    if (pageSelected != null && pageSelected != "")
        setVisible('page_welcome', false);
    // update found scales given selected page
    const foundScales = document.getElementById('found_scales');
    const negativeScale = document.getElementById('negative_scale');
    const foundChordsFromScale = document.getElementById('section_found_chords_from_scale');
    switch (pageSelected) {
        case "page_scale_explorer":
            foundScales.innerHTML = getRelativeScalesHTML(noteValue, scaleValues);
            negativeScale.innerHTML = getNegativeScaleHTML(noteValue, scaleValues);
            foundChordsFromScale.innerHTML = findChordsFromScaleScalesHTML(noteValue, scaleValues);
            setVisible('found_scales', true);
            setVisible('negative_scale', true);
            setVisible("section_found_chords_from_scale", true);
            break;
        case "page_scale_finder":
            foundScales.innerHTML = findScalesFromNotesHTML();
            setVisible('found_scales', true);
            setVisible('negative_scale', false);
            setVisible("section_found_chords_from_scale", false);
            break;
        case "page_chord_explorer":
            {
                const checkboxBarres = document.getElementById("checkboxBarres");
                updateChordGeneratorMode();
                updateChordSelectorGivenNbStrings('chord_explorer_chord');
                updateNbStringsForChordSelector();
                updateFoundChordElements();
                updateGeneratedChordsOnFretboard(checkboxBarres.checked);
                setVisible('found_scales', false);
                setVisible('negative_scale', false);
                setVisible("section_found_chords_from_scale", false);
                break;
            }
    }
}
function onResize() {
    let canvasGuitar = document.getElementById("canvas_guitar");
    canvasGuitar.width = window.innerWidth - 30;
    let canvasKeyboard = document.getElementById("canvas_keyboard");
    canvasKeyboard.width = window.innerWidth - 30;
    onNoteChanged();
}
function toggleDisplay(id) {
    let elem = document.getElementById(id);
    if (elem.style.display === "none")
        elem.style.display = "block";
    else
        elem.style.display = "none";
}
function setVisible(id, status) {
    let elem = document.getElementById(id);
    elem.style.display = status ? "block" : "none";
}
function setEnabled(id, status) {
    let elem = document.getElementById(id);
    elem.disabled = !status;
}
function updateChordGeneratorMode() {
    // get selected mode
    let selectedMode = getSelectedChordGeneratorMode();
    const nameMode = (selectedMode == "name");
    // get select nb. of strings
    const nbStrings = getSelectedGuitarNbStrings('chord_explorer_guitar_nb_strings');
    // name mode
    setEnabled("note_explorer_chord", nameMode);
    setEnabled("chord_explorer_chord", nameMode);
    setEnabled("chord_explorer_arpeggio_notes", nameMode);
    setEnabled("chord_explorer_arpeggio_intervals", nameMode);
    setVisible("chord_explorer_arpeggio_texts", nameMode);
    // notes mode
    setVisible("chord_explorer_found_chords_texts", !nameMode);
    for (let i = 1; i <= 6; i++) {
        const enableSelector = !nameMode && (i <= nbStrings);
        setEnabled(`chord_explorer_note${i}`, enableSelector);
        // if note index exceeds nb. of strings, reset note
        if (i > nbStrings) {
            let noteSelect = document.getElementById(`chord_explorer_note${i}`);
            noteSelect.selectedIndex = 0;
        }
    }
}
function resetScaleFinder() {
    // reset scale finder note selectors
    for (let i = 1; i <= 8; i++) {
        const id = i.toString();
        let noteSelect = document.getElementById(`note_finder${id}`);
        noteSelect.selectedIndex = 0;
    }
    let noteSelect = document.getElementById('note_finder_tonic');
    noteSelect.selectedIndex = 0;
    update();
}
//////////////////////////////////// LOCALES //////////////////////////////////
function updateLocales() {
    document.title = getString("title");
    // pages buttons
    document.getElementById("button_page_chord_explorer").innerText = getString("page_chord_explorer");
    document.getElementById("button_page_scale_explorer").innerText = getString("page_scale_explorer");
    document.getElementById("button_page_scale_finder").innerText = getString("page_scale_finder");
    // welcome
    document.getElementById("welcome_title").innerText = getString("welcome_title");
    document.getElementById("welcome_subtitle").innerText = getString("welcome_subtitle");
    // scale explorer
    document.getElementById("select_key_text").innerText = getString("select_key");
    document.getElementById("header_scale_finder").innerText = getString("header_scale_finder");
    document.getElementById("checkboxChordsLabel").innerText = getString("chords");
    document.getElementById("checkboxGuitarLabel").innerText = getString("guitar");
    document.getElementById("checkboxKeyboardLabel").innerText = getString("keyboard");
    document.getElementById("checkboxBarresLabel").innerText = getString("show_barres");
    document.getElementById("scale_explorer_guitar_nb_strings_text").innerText = getString("nb_strings");
    document.getElementById("scale_explorer_guitar_tuning_text").innerText = getString("tuning");
    // scale finder
    let resetElements = document.getElementsByClassName("reset");
    for (let resetEelem of resetElements)
        resetEelem.innerText = getString("reset");
    let tonicElements = document.getElementsByClassName("tonic");
    for (let tonicEelem of tonicElements)
        tonicEelem.innerText = getString("tonic");
    // chord explorer
    document.getElementById("radioChordExplorerNameLabel").innerText = getString("name");
    document.getElementById("radioChordExplorerNotesLabel").innerText = getString("notes");
    document.getElementById("play_found_chord").innerText = `${getString("play")} ♪`;
    document.getElementById("play_found_arpeggio").innerText = `${getString("play_arpeggio")} ♪`;
    document.getElementById("chord_explorer_guitar_nb_strings_text").innerText = getString("nb_strings");
    document.getElementById("chord_explorer_guitar_tuning_text").innerText = getString("tuning");
    document.getElementById("chord_explorer_nb_strings_max_text").innerText = getString("chord_explorer_nb_strings_max_text");
    // update computed data
    updateSelectors();
    onNoteChanged();
}
function getSelectorIndexFromValue(selector, value) {
    const options = selector.options;
    const nbOptions = options.length;
    let index = -1;
    for (index = 0; index < nbOptions; index++) {
        if (options[index].value === value)
            return index;
    }
    return index;
}
//# sourceMappingURL=interface.js.map