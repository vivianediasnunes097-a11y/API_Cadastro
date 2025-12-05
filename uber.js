const pedir = new Promise((aceitou, recusou)=>{
    console.log("Chamando uber...")
    const motoristaAceito = false 
    setTimeout(()=>{
        if (motoristaAceito){
           resolve("Motorista a caminho")
        } else{
            reject("motorista não aceitou a corrida")
        }
        }, 5000);
    })
pedir .then((msg)=>{
    console.log(msg)
})