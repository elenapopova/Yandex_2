'use strict'
//Функция, возвращающая объект с уникальными старыми именами классов:
function minimize(data) {
    let single = {};
    data.forEach(function (item) {
        if(item===''){ret}
        single[item] = (single[item] ? single[item] : 0) + 1;
    });
    return single;
}
//Используемые символы для составления новых имен классов:
let alph = '-kazwheblmrsjoxctqfvugypnidDHAUREWOTXNJBLGKZCFQMYPSVI_0123456789';
/**
 * Функция, генерирующая новое имя класса.
 * @param {Number} num_dec – число в десятичной системе счисления;
 * @param {Number} base – основание системы счисления;
 * @returns {*}
 */
let getBase = function (num_dec, base) {
    if (num_dec < base) {
        return alph[num_dec];
    }
    return '' + getBase(Math.floor(num_dec / base), base) + alph[num_dec % base];

};
//Функция, возвращающая объект с новыми именами классов:
function generateNames(data) {
    let names = {};
    data.forEach(function (item, index) {
        let newName = getBase(index + 1, 64);
        let firstSymbol = alph.indexOf(newName[0]);
        //Имя класса может начинаться только с буквы латинского алфавита:
        if (firstSymbol > 52) {
            newName = getBase(firstSymbol, 53) + newName.slice(1);
        }
        names[item] = newName;
    });
    return names;
}
/**
 * @param {Array} data – массив CSS классов
 */
module.exports = function (data) {
    //Удаление повторяющихся старых имен классов:
    let singleCounts = minimize(data);
    //Подсчет вхождений уникальных имен в исходном массиве:
    let single = Object.keys(singleCounts);
    //Сортировка массива single:
    single.sort(function (a, b) {
        return singleCounts[b] - singleCounts[a];
    });
    //Составление нового имени класса:
    return generateNames(single);
};
