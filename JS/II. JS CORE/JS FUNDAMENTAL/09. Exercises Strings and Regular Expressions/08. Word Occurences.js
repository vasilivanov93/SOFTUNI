function wordOccurences(sentence, word) {
    let pattern = new RegExp("\\b"+word+"\\b", "gi");
    count = 0;
    
    let match = pattern.exec(sentence);

    while(match) {
        count++;
        match = pattern.exec(sentence);
    }

    console.log(count)
}

wordOccurences('The waterfall was so high, that the child couldn’t see its peak.', 'the');