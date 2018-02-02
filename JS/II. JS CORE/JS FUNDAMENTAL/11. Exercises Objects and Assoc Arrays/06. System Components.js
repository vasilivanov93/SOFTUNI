function systemComponents(arr) {
    let result = new Map();
    for (let str of arr) {
        let tokens = str.split(' | ');
        let systemName = tokens[0];
        let componentName = tokens[1];
        let subcomponentName = tokens[2];
        
        if(!result.get(systemName)){
            result.set(systemName, new Map());
        }

        if(!result.get(systemName).get(componentName)){
            result.get(systemName).set(componentName, []);
        }

        result.get(systemName).get(componentName).push(subcomponentName);
    }

    let resultSorted = Array.from(result.keys()).sort((s1, s2) => sortSystems(s1, s2));

    for(let system of resultSorted) {
        console.log(system);
        let componentsSorted = Array.from(result.get(system).keys()).sort((c1, c2) => sortComponents(system, c1, c2));

        for(let component of componentsSorted) {
            console.log(`|||${component}`);
            result.get(system).get(component).forEach(sc => console.log(`||||||${sc}`))
        }
    }

    function sortSystems(s1, s2) {
        if(result.get(s1).size != result.get(s2).size) {
            return result.get(s2).size - result.get(s1).size;
        } else {
            return s1.toLowerCase().localeCompare(s2.toLowerCase());
        }
    }

    function sortComponents(system, c1, c2) {
        return result.get(system).get(c2).length - result.get(system).get(c1).length;
    }
}

systemComponents(['SULS | Main Site | Home Page', 
    'SULS | Main Site | Login Page', 
    'SULS | Main Site | Register Page', 
    'SULS | Judge Site | Login Page', 
    'SULS | Judge Site | Submittion Page', 
    'Lambda | CoreA | A23', 
    'SULS | Digital Site | Login Page', 
    'Lambda | CoreB | B24', 
    'Lambda | CoreA | A24', 
    'Lambda | CoreA | A25', 
    'Lambda | CoreC | C4', 
    'Indice | Session | Default Storage', 
    'Indice | Session | Default Security']);