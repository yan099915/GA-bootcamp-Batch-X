function warnTheSheep(queue) {
    // your code here
    let a =  queue.reverse().indexOf("wolf"); // array yang dikirim lalu dibalik lalu cari wolf dari array tsb
    // console.log(a)
    if(a == 0 ) { // jika a == 0
        console.log(`Pls go away and stop eating my sheep`)
    } else {
        console.log(`Oi! Sheep number ${a}! You are about to be eaten by a wolf!`)
    }
    
}
// Test Function do not edit
function Test(fun, result) {
    console.log(fun === result)
}


// Test assertions
Test(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
Test(warnTheSheep(["sheep", "sheep", "wolf"]), "Pls go away and stop eating my sheep");
Test(warnTheSheep(["sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
Test(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 6! You are about to be eaten by a wolf!");