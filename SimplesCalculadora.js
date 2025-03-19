function Calcular(n1, op, n2){
    
    if(op === "*" || op === "x"){
        result = n1 * n2
        console.log(`O resultado da expressão ${n1} ${op} ${n2} foi ${result}.`)
        }else if(op === "-"){
            result = n1 - n2
            console.log(`O resultado da expressão ${n1} ${op} ${n2} foi ${result}.`)}
            else if(op === "+"){
                result = n1 + n2
                console.log(`O resultado da expressão ${n1} ${op} ${n2} foi ${result}.`)}
                else if(op === "/"){
                    result = n1 / n2
                    console.log(`O resultado da expressão ${n1} ${op} ${n2} foi ${result}.`)}
                    else if(op === "%"){
                        result = n1 % n2
                        console.log(`O resultado da expressão ${n1} ${op} ${n2} foi ${result}.`)
                        }
                    }

function fatoracao(n1){
let fatoriado = 1n 
while(n1 > 1){
    fatoriado *= BigInt(n1);
        console.log(`Fatorando...${fatoriado}`)
        n1--       


}
}
                    fatoracao()
                    Calcular(10, "x", 2)