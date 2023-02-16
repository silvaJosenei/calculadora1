function insert(num) /** insert função para que funcione os botões  */
{
    var numero = document.getElementById('resultado').innerHTML; //**para inserir o resultado e um numero ficar um do lado do outro */
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resultado').innerHTML = ""; //**função para realizar limpeza da calculadora */
}

function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado); //**eval vai computar toda a calculadora */
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}
