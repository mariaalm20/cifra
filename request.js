const sha1 = require('js-sha1')
const fetch = require('node-fetch')
//const url = 'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=f3ac6dbe2fefb9cbb679961fb56bf8e714588df9'
const url = 'desafio/answer.json'
//console.log(url)
fetch(url).then((resp) => resp.json()).then(function(requestURL){

let lalfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
requestURL.cifrado.toLowerCase()
requestURL.numero_casas = -1
const desloc = requestURL.numero_casas
let result = requestURL.decifrado
result = []
for (var i = 0; i < requestURL.cifrado.length; i++)
{
 if(requestURL.cifrado[i] != ' ')
 {
   for (var j = 0; j < lalfabeto.length; j++)
   {
     if (requestURL.cifrado[i] == lalfabeto[j])
     {
       result[i] = lalfabeto[(j + desloc) % lalfabeto.length];
       break;
     }
   }
 }
 else
 {
   result[i] = ' ';
 }
}
console.log(result.join(""))

sha1(String)
let hash = sha1 (result.join(""))
console.log(hash)

})

//.catch (function(error){
   // console.log(error)
//})
