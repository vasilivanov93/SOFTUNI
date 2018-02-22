function personalBMI(name, age, weight, height) {
    let bmi = Math.round(weight /(height * height / 10000))
    let status = '';

    if (bmi < 18.5) {
        status = 'underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        status = 'normal';
    } else if (bmi >= 25 && bmi < 30) {
        status = 'overweight';
    } else if (bmi >= 30) {
        status = 'obese';
    }

    let patient = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: bmi,
        status: status
    }

    if(status == "obese"){
        patient['recommendation'] = 'admission required';
    }

    return patient
}

console.log(personalBMI('Petkan', 20, 80, 178))

