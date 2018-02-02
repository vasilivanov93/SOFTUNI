function usernames(arr) {
    let result = new Set();
    for (let name of arr) {
        result.add(name);
    }

    Array.from(result.keys()).sort((a, b) => sortUsernames(a, b)).forEach(u => console.log(u));

    function sortUsernames(a, b) {
        if(a.length !== b.length) {
            return (a.length - b.length);
        } else {
            return a.localeCompare(b);
        }
    }
}

usernames(['Ashton', 
    'Kutcher', 
    'Ariel', 
    'Lilly', 
    'Keyden', 
    'Aizen', 
    'Billy', 
    'Braston']);