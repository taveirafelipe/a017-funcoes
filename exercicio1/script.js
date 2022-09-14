// function imprimaNome(nome){
//     console.log(`Olá, ${nome}!`)
// }

// function tabuadaSeis(){
//     for(let i = 1 ; i<11 ; i++ ){
//         console.log(`6 X ${i} = ${6*i}`)
//     }
// }

const imprimaNome = (nome) => {
    console.log(`Olá, ${nome}!`)
}

const tabuadaSeis = () => {
    for(let i = 1 ; i<11 ; i++ ){
        console.log(`6 X ${i} = ${6*i}`)
    }
}

imprimaNome(prompt("Insira seu nome:").toUpperCase())
tabuadaSeis()