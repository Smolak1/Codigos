function Calcular(n1, op, n2){
    
    if(op === "*"){
        result = n1 * n2
        console.log(`O resultado da expressão ${n1} ${op} ${n2} foi ${result}.`)
    }else if(op === "x"){
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

Calcular(1, "+", 1)