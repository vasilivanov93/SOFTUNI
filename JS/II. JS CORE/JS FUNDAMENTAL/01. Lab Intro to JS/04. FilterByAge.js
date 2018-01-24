function filterByAge(minAge, nameFirstPerson, ageFirstPerson, nameSecondPerson, ageSecondPerson) {
    let firstPerson =  { Name: nameFirstPerson, Age: ageFirstPerson };
    let secondPerson =  { Name: nameSecondPerson, Age: ageSecondPerson };

    if(firstPerson.Age >= minAge){
        console.log(`{ name: '${firstPerson.Name}', age: ${firstPerson.Age} }`);
    }

    if(secondPerson.Age >= minAge){
        console.log(`{ name: '${secondPerson.Name}', age: ${secondPerson.Age} }`);
    }  
}

filterByAge(12, 'Ivan', 15, 'Asen', 9);