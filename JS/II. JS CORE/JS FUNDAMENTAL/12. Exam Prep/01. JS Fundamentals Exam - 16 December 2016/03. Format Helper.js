function formatHelper(arr) {
    let sentence = arr[0];

    sentence = sentence.replace(/[.,!?:;]\s*/g, (match) => match.trim() + ' ');
    sentence = sentence.replace(/\s+[.,!?:;]/g, (match) => match.trim());
    sentence = sentence.replace(/\.\s*\.\s*\.\s*\!/g, '...!');
    sentence = sentence.replace(/(\.\s+)(\d+)/g, (match, gr1, gr2) => gr1.trim() + gr2);
    sentence = sentence.replace(/\"\s*([^\"]+\s*)\"/g, (match, gr1) => `"${gr1.trim()}"`);

    console.log(sentence);
}