const json = require('./answer.json')
//const buffer = require('buffer')
let hashlib = require('hashlib-js')
const sha1 = require('sha1-hex')
const crypto = require('crypto')

let lalfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
json.numero_casas = -1
const desloc =json.numero_casas
let result = []

for (var i = 0; i <json.cifrado.length; i++)
{
 if(json.cifrado[i] != ' ')
 {
   for (var j = 0; j < lalfabeto.length; j++)
   {
     if (json.cifrado[i] == lalfabeto[j])
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
json.decifrado = result.join("")
console.log(json.decifrado)


/*let hash = crypto.createHash('sha1').update(result.join("")).digest("hex")
json.resumo_criptografico = hash
console.log(json.resumo_criptografico)

let buffer = new Buffer(result.join(""))
sha1(buffer)*/


json.numero_casas = 1
console.log(json)




