'use strict'
//Подключение модуля:
let obfuscator = require('./obfuscator');

//Чтение данных из файла data.json в массив data:
let data = require('./data.json');

//Возвращение результата в объект newData:
let newData = obfuscator(data);

//Вывод результата на экран:
console.log(newData);
