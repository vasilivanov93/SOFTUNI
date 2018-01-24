function hospital(args){
    let period = Number(args[0]);

    let treatedPatients = 0;
    let untreatedPatients = 0;
    let countOfDoctors = 7;

    for(let i = 1; i <= period; i++){
        let currentPatients = Number(args[i]);

        if ((i % 3 == 0) && (untreatedPatients > treatedPatients))
        {
            countOfDoctors++;
        }

        if (currentPatients > countOfDoctors)
        {
            treatedPatients += countOfDoctors;
            untreatedPatients += currentPatients - countOfDoctors;
        }
        else
        {
            treatedPatients += currentPatients;
        }
    }

    console.log(`Treated patients: ${treatedPatients}.`)
    console.log(`Untreated patients: ${untreatedPatients}.`)
}