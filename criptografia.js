function testar(palavra){

while(/[abc]/.test(palavra)){
    let palavra2 = palavra.replace("a", "1").replace("b", "2").replace("c", "3")
.replace("d", "4").replace("e", "5").replace("f", "6").replace("g", "7").replace("h", "8").replace("i", "9")
.replace("j", "10").replace("k", "11").replace("l", "12").replace("m", "13").replace("n", "14").replace("o", "15").replace("p", "16")
.replace("q", "17").replace("r", "18").replace("s", "19")
}

console.log(palavra2)
}





testar("abc")