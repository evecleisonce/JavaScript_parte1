/*Função 1*/
function verifica_Array(entrada){
    let verificado = Array.isArray(entrada);
    if(verificado){
        console.log("A entrada é um Array");
    }else{
        console.log("A entrada não é um Array");
    }
}

/*Função 2*/
function clonar_Array(array_clonar){
    let array_clone = [];
    array_clone = array_clonar.slice();
    console.log(array_clone);
}

/*Função 3*/
function primeiros_elementos(array_colocado,n = 1){
    let elementos = array_colocado.slice(0,n);
    console.log(elementos);
}

/*Função 4*/
function ultimos_elementos(array_colocado,n = 1){
    let elementos = [];
    for (let i = 1; i <= n; i++) {
        elementos[i-1] = array_colocado[array_colocado.length-i];
    }
    console.log(elementos);
}

/*Função 5*/
function juntar_string(array_colocado){
    let string_formada = array_colocado.join('');
    console.log(string_formada);
}

/*Função 6*/
function traços(numero){
    numero = String(numero);
    numero = Array.from(numero);
    numero = numero.join('-');
    numero = Array.from(numero);
    let i = 0;
    while(i < numero.length){
        if(numero[i] !== "-"){
            if(parseInt(numero[i]) % 2 !== 0 || parseInt(numero[i+2]) % 2 !== 0){
                numero.splice(i+1,1);
            }
        }
        i = i + 1;
    }
    
    let res = numero.join('');
    console.log(res);
}

/*Função 7*/
function mais_frequente(array_colocado){
    let elementos_existentes = [];

    for ( let i = 0 ; i < array_colocado.length ; i++ ){
        elementos_existentes[array_colocado[i]] = 1 + (elementos_existentes[array_colocado[i]] || 0);
    }
        
    let maior = null;
    let numero_maior = -1;

    for ( var p in elementos_existentes ){
        if ( elementos_existentes[p] > numero_maior ) {
            maior = p;
            numero_maior = elementos_existentes[p];
        }
    }
        
    console.log(maior + " (" + numero_maior + " ocorrências)");
}

/*Função 8*/
function remover_duplicação(array_colocado){
    for (let i = 0; i < array_colocado.length; i++) {
        if(typeof array_colocado[i] == "string"){
            array_colocado[i] = array_colocado[i].toLowerCase();
        }
    }
    let novo_array = Array.from(new Set(array_colocado));
    console.log(novo_array);
}

/*Função 9*/
function soma_valor_indice(array1,array2){
    let i = 0, tamanho, resultado = [];
    if(array1.length <= array2.length){
        tamanho = array2.length;
    }else{
        tamanho = array1.length;
    }
    while(i < tamanho){
        resultado[i] = array1[i] + array2[i];
        i++;
    }
    console.log(resultado);
}

/*Função 10*/
function adicionar_vetores(vetorPilha,vetorAdiciona){
    vetorPilha = [].concat(vetorPilha, vetorAdiciona);
    console.log(vetorPilha);
}
