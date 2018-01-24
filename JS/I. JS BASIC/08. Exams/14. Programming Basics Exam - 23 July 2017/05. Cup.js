function cup([arg1]){
    let n = Number(arg1);

    let dot = n;
    let dies = n * 3;
    for(let i = 1; i <= n + 1; i++){
        if(i <= n / 2){
        console.log(".".repeat(dot) + "#".repeat(dies) + ".".repeat(dot));
        
        }else{
            console.log(".".repeat(dot) + "#" + ".".repeat(dies - 2) + "#" + ".".repeat(dot))
        }

        dot++;
        dies -= 2;
    }

    console.log(".".repeat(dot - 1) + "#".repeat(dies + 2) + ".".repeat(dot - 1));

    for(let i = 1; i <= n + 2; i++){
        if(i == n / 2 + 1){
            console.log(".".repeat(((5 * n - 10) / 2)) + "D^A^N^C^E^" + ".".repeat(((5 * n - 10) / 2)));            
        }else{
            console.log(".".repeat(n * 2 - 2) + "#".repeat(n + 4) + ".".repeat(n * 2 - 2));
        }
        
    }
}