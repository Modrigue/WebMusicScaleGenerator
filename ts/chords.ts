// chords dictionaries

// chords with 2 notes
const chords2Dict: Map<string, Array<number>> = new Map<string, Array<number>>();
chords2Dict.set("5", [0, 7]);

// chords with 3 notes
const chords3Dict: Map<string, Array<number>> = new Map<string, Array<number>>();
chords3Dict.set("M",                [0, 4, 7]);
chords3Dict.set("m",                [0, 3, 7]);
chords3Dict.set("dim",              [0, 3, 6]);
chords3Dict.set("aug",              [0, 4, 8]);
chords3Dict.set("flat5",            [0, 4, 6]);
chords3Dict.set("sus2",             [0, 2, 7]);
chords3Dict.set("sus2flat5",        [0, 2, 6]);
chords3Dict.set("sus2sharp5",       [0, 2, 8]);
chords3Dict.set("sus4",             [0, 5, 7]);
chords3Dict.set("sus4flat5",        [0, 5, 6]);
chords3Dict.set("sus4sharp5",       [0, 5, 8]);
chords3Dict.set("msharp5",          [0, 3, 8]);
chords3Dict.set("6M(no5)",          [0, 4, 9]);
chords3Dict.set("6(no5)",           [0, 3, 9]);
chords3Dict.set("m7sus4(no5)",      [0, 5, 10]);
chords3Dict.set("6sus4(no5)",       [0, 5, 9]);
chords3Dict.set("6flat5(no3)",      [0, 6, 9]);
chords3Dict.set("madd4(no5)",       [0, 3, 5]);
chords3Dict.set("sus2add4(no5)",    [0, 2, 5]);
chords3Dict.set("phryg",            [0, 1, 7]); // phrygian
chords3Dict.set("lyd",              [0, 6, 7]); // lydian
chords3Dict.set("loc",              [0, 5, 6]); // locrian
chords3Dict.set("It+6",             [0, 4, 10]);

// chords with 4 notes
const chords4Dict: Map<string, Array<number>> = new Map<string, Array<number>>();
chords4Dict.set("add9",               [0, 4, 7, 14]);
chords4Dict.set("madd9",              [0, 3, 7, 14]);
chords4Dict.set("add4",               [0, 4, 5, 8]);
chords4Dict.set("madd4",              [0, 3, 5, 8]);
chords4Dict.set("7M",                 [0, 4, 7, 11]);
chords4Dict.set("7",                  [0, 4, 7, 10]);
chords4Dict.set("m7",                 [0, 3, 7, 10]);
chords4Dict.set("m7M",                [0, 3, 7, 11]);
chords4Dict.set("7Msus2",             [0, 2, 7, 11]);
chords4Dict.set("7Msus4",             [0, 5, 7, 11]);
chords4Dict.set("m7sus2",             [0, 2, 7, 10]);
chords4Dict.set("m7sus4",             [0, 5, 7, 10]);
chords4Dict.set("7flat5",             [0, 4, 6, 10]);
chords4Dict.set("m7flat5",            [0, 3, 6, 10]);
chords4Dict.set("m7Mflat5",           [0, 3, 6, 11]);
chords4Dict.set("m7Msharp5",          [0, 3, 8, 11]);
chords4Dict.set("7sharp5",            [0, 4, 8, 10]);
chords4Dict.set("7Msharp5",           [0, 4, 8, 11]);
chords4Dict.set("7Mflat5",            [0, 4, 6, 11]);
chords4Dict.set("6M",                 [0, 4, 7, 9]);
chords4Dict.set("6",                  [0, 4, 7, 8]);
chords4Dict.set("m6",                 [0, 3, 7, 8]);
chords4Dict.set("m6M",                [0, 3, 7, 9]);
chords4Dict.set("6flat5",             [0, 4, 6, 9]);
chords4Dict.set("mdim7",              [0, 3, 6, 9]);
chords4Dict.set("m6flat5",            [0, 3, 6, 8]);
chords4Dict.set("sus2add6flat5",      [0, 2, 6, 9]);
chords4Dict.set("sus2add4sharp5",     [0, 2, 5, 8]);
chords4Dict.set("6Msus2add4(no5)",    [0, 2, 5, 9]);
chords4Dict.set("7sus2flat5",         [0, 2, 6, 10]);
chords4Dict.set("6sus2",              [0, 2, 7, 9]);
chords4Dict.set("7Msus4sharp5",       [0, 5, 8, 11]);
chords4Dict.set("7Msus4sharpsharp5",  [0, 5, 9, 11]);
chords4Dict.set("m7add4(no5)",        [0, 3, 5, 10]);
chords4Dict.set("m6Madd4(no5)",       [0, 3, 5, 9]);
chords4Dict.set("tristan",            [0, 6, 10, 15]);

// chords with 5 notes
const chords5Dict: Map<string, Array<number>> = new Map<string, Array<number>>();
chords5Dict.set("9M",               [0, 4, 7, 11, 14]);
chords5Dict.set("9",                [0, 4, 7, 10, 14]);
chords5Dict.set("m9",               [0, 3, 7, 10, 14]);
chords5Dict.set("m9M",              [0, 3, 7, 11, 14]);
chords5Dict.set("9Msus4",           [0, 5, 7, 11, 14]);
chords5Dict.set("m9sus4",           [0, 5, 7, 10, 14]);
chords5Dict.set("7Madd6",           [0, 4, 7, 9 , 11]);
chords5Dict.set("7add6",            [0, 4, 7, 8 , 11]);
chords5Dict.set("m7add6",           [0, 3, 7, 8 , 11]);
chords5Dict.set("m7Madd6",          [0, 3, 7, 9 , 11]);
chords5Dict.set("7Madd11",          [0, 4, 7, 9 , 14]);
chords5Dict.set("7add11",           [0, 4, 7, 8 , 14]);
chords5Dict.set("m7add11",          [0, 3, 7, 8 , 14]);
chords5Dict.set("m7Madd11",         [0, 3, 7, 9 , 14]);
chords5Dict.set("elektra",          [0, 7, 9, 13, 16]);

// chords with 6 notes
const chords6Dict: Map<string, Array<number>> = new Map<string, Array<number>>();
chords6Dict.set("11M",               [0, 4, 7, 11, 14, 17]);
chords6Dict.set("11",                [0, 4, 7, 10, 14, 17]);
chords6Dict.set("m11",               [0, 3, 7, 10, 14, 17]);
chords6Dict.set("m11M",              [0, 3, 7, 11, 14, 17]);
chords6Dict.set("11Mflat9",          [0, 4, 7, 11, 13, 17]);
chords6Dict.set("11flat9",           [0, 4, 7, 10, 13, 17]);
chords6Dict.set("m11flat9",          [0, 3, 7, 10, 13, 17]);
chords6Dict.set("m11Mflat9",         [0, 3, 7, 11, 13, 17]);
chords6Dict.set("13M",               [0, 4, 7, 11, 14, 21]);
chords6Dict.set("13",                [0, 4, 7, 10, 14, 21]);
chords6Dict.set("m13",               [0, 3, 7, 10, 14, 21]);
chords6Dict.set("m13M",              [0, 3, 7, 11, 14, 21]);
chords6Dict.set("13Msus",            [0, 5, 7, 11, 14, 21]); // sus4
chords6Dict.set("m13sus",            [0, 5, 7, 10, 14, 21]); // sus4
chords6Dict.set("13Mflat9",          [0, 4, 7, 11, 13, 21]);
chords6Dict.set("13flat9",           [0, 4, 7, 10, 13, 21]);
chords6Dict.set("m13flat9",          [0, 3, 7, 10, 13, 21]);
chords6Dict.set("m13Mflat9",         [0, 3, 7, 11, 13, 21]);
chords6Dict.set("mystic",            [0, 4, 6, 9 , 10, 14]);


// global chords dictionary
const chordsDicts: Map<number, Map<string, Array<number>>> = new Map<number, Map<string, Array<number>>>();
chordsDicts.set(2, chords2Dict);
chordsDicts.set(3, chords3Dict);
chordsDicts.set(4, chords4Dict);
chordsDicts.set(5, chords5Dict);
chordsDicts.set(6, chords6Dict);

/////////////////////////////////// FUNCTIONS /////////////////////////////////

function initChordSelector(id: string, defaultChordId: string = "-1", firstChordEmpty: boolean = false): void
{
    // get chord selector
    const chordSelect: HTMLSelectElement = <HTMLSelectElement>document.getElementById(id);
    const initialized = (chordSelect.options != null && chordSelect.options.length > 0);
    if (initialized) // nop if already initialized
        return;

    // get chord parameter if existing
    const chordParamValue = parseParameterById("chord");
    if (chordParamValue != "")
        defaultChordId = chordParamValue;

    // fill chord selector
    if (firstChordEmpty)
    {
        let option: HTMLOptionElement = document.createElement('option');
        option.value = "-1";
        option.innerHTML = "";
        if (defaultChordId == "-1")
            option.selected = true;
        chordSelect.appendChild(option);
    }

    // disable chords options given selected nb. of strings
    const nbStrings: number = getSelectedGuitarNbStrings('chord_explorer_guitar_nb_strings');

    // init
    for (const [nbNotesInChord, chordsDict] of chordsDicts)
    {
        // add header
        let header: HTMLOptionElement = document.createElement('option');
        header.value = nbNotesInChord.toString();
        header.innerHTML = `-- ${nbNotesInChord.toString()} NOTES --`;
        header.classList.add('bolden');
        header.disabled = true;
        chordSelect.appendChild(header);

        // add chords
        for (const [key, value] of chordsDict)
        {
            let option = document.createElement('option');
            option.value = key;
            option.innerHTML = getAltChordNotation(key);
            option.disabled = (nbNotesInChord > nbStrings);
            if (key == defaultChordId && !option.disabled)
                option.selected = true;
            chordSelect.appendChild(option);
        }

        // add separator
        if (nbNotesInChord < 6) // TEMP
        {
            let separator = document.createElement('option');
            separator.value = nbNotesInChord.toString();
            separator.innerHTML = "";
            separator.disabled = true;
            chordSelect.appendChild(separator);
        }
    }
}

function updateChordSelectorGivenNbStrings(id: string): void
{
    // get chord selector
    const chordSelect: HTMLSelectElement = <HTMLSelectElement>document.getElementById(id);
    const initialized = (chordSelect.options != null && chordSelect.options.length > 0);
    if (!initialized) // nop if not initialized
        return;

    // disable chords options given selected nb. of strings
    const nbStrings: number = getSelectedGuitarNbStrings('chord_explorer_guitar_nb_strings');

    for (let option of chordSelect.options)
    {
        const id = option.value;
        const chordValues: Array<number> = getChordValues(id);
        const nbNotesInChord: number = chordValues.length;
        if (nbNotesInChord == 0)
            continue;

        option.disabled = (nbNotesInChord > nbStrings);
        if (option.selected && option.disabled)
            chordSelect.selectedIndex = 4; // default chord
    }
}

function getChordValues(id: string): Array<number>
{
    for (const [nbNotesInChord, chordsDict] of chordsDicts)
        for (const [key, value] of chordsDict)
            if (key == id)
                return value;

    return [];
}

////////////////////////////// CHORDS NOTATIONS ///////////////////////////////


// get chord compact representation (for tables)
function getCompactChordNotation(text: string, chordID: string): string
{
  let suffix = chordID; // default
  switch (chordID)
  {
    case "M":
      suffix = "";
      break;
  }
  
//   suffix = suffix.replaceAll("sharp", "#");
//   suffix = suffix.replaceAll("flat", "♭");
//   suffix = suffix.replaceAll("dim", "°");
//   suffix = suffix.replaceAll("aug", "+");
  suffix = suffix.replace(/sharp/g, "#");
  suffix = suffix.replace(/flat/g , "♭");
  suffix = suffix.replace(/dim/g  , "°");
  suffix = suffix.replace(/aug/g  , "+");

  return text + suffix;
}

// get alternate chord notations (for selectors)
function getAltChordNotation(chordId: string): string
{
    let notation = chordId;
    switch (chordId)
    {
        case "M":
            return "MAJ";

        case "m":
            return "min";

        case "dim":
            return "dim, °";

        case "aug":
            return "aug, +";

        case "m6M":
            return "m6M, dor";

        case "mystic":
            return "mystic, prom";
    }

    // notation = notation.replaceAll("sharp", "#");
    // notation = notation.replaceAll("flat", "♭");
    // notation = notation.replaceAll("dim", "°");
    // notation = notation.replaceAll("aug", "+");
    notation = notation.replace(/sharp/g, "#");
    notation = notation.replace(/flat/g , "♭");
    notation = notation.replace(/dim/g  , "°");
    notation = notation.replace(/aug/g  , "+");

    return notation;
}


////////////////////////////////// ARPEGGIOS //////////////////////////////////


function getArpeggioNotes(noteFondamental: number, chordValues: Array<number>): string
{
    let arpeggioNotesStr = "";
    chordValues.forEach(function (intervalValue)
    {
      const newNoteValue = addToNoteValue(noteFondamental, intervalValue);
      const noteName = getNoteName(newNoteValue);
      arpeggioNotesStr += `${noteName}, `;
    });
    arpeggioNotesStr = arpeggioNotesStr.slice(0, -2);
    
    return arpeggioNotesStr;
}

function getArpeggioIntervals(chordValues: Array<number>): string
{
    let arpeggioIntervalsStr = "";
    chordValues.forEach(function (intervalValue)
    {
      let intervalName = intervalsDict.get(intervalValue);
      if (intervalName == "T")
        intervalName = "F"; // fondamental

      arpeggioIntervalsStr += `${intervalName}, `;
    });
    arpeggioIntervalsStr = arpeggioIntervalsStr.slice(0, -2);

    return arpeggioIntervalsStr;
}

function getChordDictionary(nbNotes: number): Map<string, Array<number>>
{
    let chordsDict = chords2Dict;
    switch (nbNotes)
    {
        case 3:
            chordsDict = chords3Dict;
            break;

        case 4:
            chordsDict = chords4Dict;
            break;

        case 5:
            chordsDict = chords5Dict;
            break;

        case 6:
            chordsDict = chords6Dict;
            break;
    }

    return chordsDict;
}