// Definindo a função de callback
function callbackFunction(result: string) {
    console.log("Resultado:", result);
}

// Função que recebe um callback como parâmetro
function performAsyncOperation(callback: (result: string) => void) {
    setTimeout(() => {
        const result = "Operação assíncrona concluída";
        callback(result);
    }, 2000);
}

// Chamando a função com o callback
performAsyncOperation(callbackFunction);