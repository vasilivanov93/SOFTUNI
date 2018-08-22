function solve(arrKingdom, arrBattle) {
    let kingdoms = {};
    for (let obj of arrKingdom) {
        if(!kingdoms.hasOwnProperty(obj.kingdom)) {
            kingdoms[obj.kingdom] = {
                kingdomWins: 0,
                kingdomLosses: 0,
            }
        }

        if (!kingdoms[obj.kingdom].hasOwnProperty(obj.general)) {
            kingdoms[obj.kingdom][obj.general] = {
                army: 0,
                wins: 0,
                losses: 0,
            }
        }

        kingdoms[obj.kingdom][obj.general].army += obj.army;
    }

    for (let battle of arrBattle) {
        let attackingKingdom = battle[0];
        let attackingGeneral = battle[1];
        let defendingKingdom = battle[2];
        let defendingGeneral = battle[3];

        if (attackingKingdom !== defendingKingdom) {
            if (kingdoms[attackingKingdom][attackingGeneral].army > kingdoms[defendingKingdom][defendingGeneral].army) {
                kingdoms[attackingKingdom][attackingGeneral].wins += 1;
                kingdoms[defendingKingdom][defendingGeneral].losses += 1;

                kingdoms[attackingKingdom][attackingGeneral].army =
                    Math.floor(kingdoms[attackingKingdom][attackingGeneral].army + (kingdoms[attackingKingdom][attackingGeneral].army * 0.1));
                kingdoms[defendingKingdom][defendingGeneral].army =
                    Math.floor(kingdoms[defendingKingdom][defendingGeneral].army - (kingdoms[defendingKingdom][defendingGeneral].army * 0.1));

                kingdoms[attackingKingdom].kingdomWins += 1;
                kingdoms[defendingKingdom].kingdomLosses += 1;
            } else if (kingdoms[attackingKingdom][attackingGeneral].army < kingdoms[defendingKingdom][defendingGeneral].army) {
                kingdoms[attackingKingdom][attackingGeneral].losses += 1;
                kingdoms[defendingKingdom][defendingGeneral].wins += 1;

                kingdoms[attackingKingdom][attackingGeneral].army =
                    Math.floor(kingdoms[attackingKingdom][attackingGeneral].army - (kingdoms[attackingKingdom][attackingGeneral].army * 0.1));
                kingdoms[defendingKingdom][defendingGeneral].army =
                    Math.floor(kingdoms[defendingKingdom][defendingGeneral].army + (kingdoms[defendingKingdom][defendingGeneral].army * 0.1));

                kingdoms[attackingKingdom].kingdomLosses += 1;
                kingdoms[defendingKingdom].kingdomWins += 1;
            }
        }
    }

    let sortedKingdoms = Object.entries(kingdoms).sort((a, b) => {
       if (b[1].kingdomWins !== a[1].kingdomWins) {
           return b[1].kingdomWins - a[1].kingdomWins;
       } else {
           if (a[1].kingdomLosses !== b[1].kingdomLosses) {
               return a[1].kingdomLosses - b[1].kingdomLosses;
           } else {
               return a[0] > b[0];
           }
       }
    } );

    let winnerKingdom = sortedKingdoms[0];
    let winnerGenerals = winnerKingdom[1];
    delete winnerGenerals.kingdomWins;
    delete winnerGenerals.kingdomLosses;
    winnerGenerals = Object.entries(winnerGenerals).sort((a, b) => b[1].army - a[1].army);

    console.log(`Winner: ${winnerKingdom[0]}`);
    for (let winnerGeneral of winnerGenerals) {
        console.log(`/\\general: ${winnerGeneral[0]}`);
        console.log(`---army: ${winnerGeneral[1].army}`);
        console.log(`---wins: ${winnerGeneral[1].wins}`);
        console.log(`---losses: ${winnerGeneral[1].losses}`);
    }
}

solve([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
    { kingdom: "Stonegate", general: "Ulric", army: 4900 },
    { kingdom: "Stonegate", general: "Doran", army: 70000 },
    { kingdom: "YorkenShire", general: "Quinn", army: 0 },
    { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
    { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]
);
