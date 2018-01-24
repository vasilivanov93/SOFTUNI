function Scholarship([arg1, arg2, arg3]){
    let income = parseFloat(arg1);
    let averageSuccess = parseFloat(arg2);
    let minimalSelary = parseFloat(arg3);

    let socialScholarship = 0;
    let successScholarship = 0;

    if(income > minimalSelary && averageSuccess < 5.5){
        console.log("You cannot get a scholarship!")
    }else if(income > minimalSelary && averageSuccess >= 5.5){
        successScholarship = averageSuccess * 25;
        console.log(`You get a scholarship for excellent results ${Math.floor(successScholarship)} BGN`)
    }else if(income <= minimalSelary && averageSuccess > 5.5){
        socialScholarship = minimalSelary * 0.35;
        successScholarship = averageSuccess * 25;
        if(socialScholarship > successScholarship){
            console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`)
        }else{
            console.log(`You get a scholarship for excellent results ${Math.floor(successScholarship)} BGN`);
        }
    }else if(income < minimalSelary && averageSuccess > 4.5){
        socialScholarship = minimalSelary * 0.35;
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`)
    }else if(income < minimalSelary && averageSuccess < 5.5){
        console.log("You cannot get a scholarship!")
    }
}