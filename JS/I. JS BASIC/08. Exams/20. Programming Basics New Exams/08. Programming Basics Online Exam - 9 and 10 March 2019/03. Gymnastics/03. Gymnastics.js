function task(arr) {
    let country = arr[0];
    let instrument = arr[1];
    let max = 20;

    let scores = 0;

    if (instrument === 'ribbon' && country === 'Russia') {
        scores = 9.100 + 9.400;
    } else if (instrument === 'ribbon' && country === 'Bulgaria') {
        scores = 9.600 + 9.400;
    } else if (instrument === 'ribbon' && country === 'Italy') {
        scores = 9.200 + 9.500;
    }

    if (instrument === 'hoop' && country === 'Russia') {
        scores = 9.300 + 9.800;
    } else if (instrument === 'hoop' && country === 'Bulgaria') {
        scores = 9.550 + 9.750;
    } else if (instrument === 'hoop' && country === 'Italy') {
        scores = 9.450 + 9.350;
    }

    if (instrument === 'rope' && country === 'Russia') {
        scores = 9.600 + 9.000;
    } else if (instrument === 'rope' && country === 'Bulgaria') {
        scores = 9.500 + 9.400;
    } else if (instrument === 'rope' && country === 'Italy') {
        scores = 9.700 + 9.150;
    }

    let diff = 0;
    if (max > scores) {
        diff = ((max - scores) / 20) * 100;
    }

    console.log(`The team of ${country} get ${scores.toFixed(3)} on ${instrument}.`);
    console.log(`${diff.toFixed(2)}%`);
}

task([
        'Russia',
        'rope'
    ]
);