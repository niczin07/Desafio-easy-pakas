let nome = "Nic"
let nível = "XP"
let monstros = ["Esqueletos", "Zumbis", "Moths"]

XP = 0
//cada monstro da uma cera quantia de xp blz?
    Esqueletos = 500
    Zumbis = 200
    Moths = 800
let xpTotal = 0

//suponhamos que nosso herói fazia parte de um pequeno vilarejo, e quando após participar de uma raid que exigiu muito de suas habilidades de aventureiro(assim matando vários mobs) ele se registra em uma guilda e vê quanto de experiência acumulou.
// 49 monstros foram mortos sendo eles 5 moths 38 zumbis e 6 esqueletos
//xpTotal = (Esqueletos) * 6 + (Moths) * 5 + (Zumbis) * 26.  Edit: esquece isso, mas a fórmula ajudou mt
xpTotal = (Esqueletos) * 6 + (Moths) * 5 + (Zumbis) * 26
console.log (xpTotal)
         

if (xpTotal >= 10000) {
console.log ("O herói " + nome + " é considerado experiente e habilidoso")
}
    else {
console.log (nome + " é considerado habilidoso e com muito potencial, porém ainda tem muito o que aprender")
    }

    let contadorRank = 0

    do {
        contadorRank++
        console.log("O herói subiu para o nível " + contadorRank);
    } while (contadorRank <= 7)

        switch (contadorRank) {
        case 1.000 < xpTotal : 1
        break;
        case 1.001 < xpTotal < 2.000 : 2
        break;
        case 2.001 < xpTotal < 5.000 : 3
        break;
        case 5.001 < xpTotal < 7.000 : 4
        break;
        case  7.001 < xpTotal < 8.000 : 5
        break;
        case  8.001 < xpTotal < 9.000 : 6;
        break;
        case 9.001 < xpTotal < 10.000 : 7;
        break;
        case 10.001 < xpTotal : 8
    }

    if (contadorRank === 1)
        {
           console.log ("O herói " + nome + " está no nível Ferro")
        } else if (contadorRank === 2){
            console.log("O herói " + nome + " está no nível Bronze")
        } else if (contadorRank === 3){
            console.log("o herói " + nome + " está no nível Prata")
        } else if (contadorRank === 4) {
            console.log("o herói " + nome + " está no nível Ouro")
        } else if (contadorRank === 5) {
            console.log("O herói " + nome + " está no nível Platina")
        } else if (contadorRank === 6) {
            console.log("O herói " + nome + " está no nível Ascendente")
        } else if (contadorRank === 7) {
            console.log("O herói " + nome + " está no nível Imortal")
        } else (contadorRank === 8); {
            console.log("O herói " + nome + " está no nível Radiante")
        }  