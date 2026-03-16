let nomeHeroi = "Holmes"
let xp = 5.650

if (xp >= 2.000 && xp <= 3.000) {
    console.log( nomeHeroi + " é um herói nivel bronze")

}else if (xp >= 3.001 && xp <= 4.000) {
    console.log( nomeHeroi + " é um herói nivel prata")
    
}else if (xp >= 4.001 && xp <= 5.000) {
    console.log( nomeHeroi + " é um herói nivel ouro")
    
}else if (xp >= 5.001 && xp <= 6.000) {
    console.log( nomeHeroi + " é um herói nivel diamante")
    
}else {
    console.log( nomeHeroi + " é um herói nivel mestre")   
}