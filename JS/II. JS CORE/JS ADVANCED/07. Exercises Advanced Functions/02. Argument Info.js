function result() {
    let typeCounts = {};
    for(let arg of arguments){
        console.log(`${typeof(arg)}: ${arg}`);
        if(! typeCounts[typeof(arg)]){
            typeCounts[typeof(arg)] = 1;
        } else {
            typeCounts[typeof(arg)]++;
        }
    }

    Object.keys(typeCounts).sort((a, b) => typeCounts[b] - typeCounts[a]).forEach(k => console.log(`${k} = ${typeCounts[k]}`))
}
result(42, 'cat', 15, 'kitten', 'tomcat');