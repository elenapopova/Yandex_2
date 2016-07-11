'use strict';
let expect = require('chai').expect;
let obfuscator = require('../obfuscator');
let input = ["one","two","three","two","three","three","four","five"];
let output = {"three":"k","two":"a","one":"z","four":"w","five":"h"};

describe('Obfuscator-minimizer', function () {
    it('Test', function () {
        let arrObf = obfuscator(input);
        for (let i = 0; i < input.length; i++) {
            expect(arrObf[input[i]]).to.equal(output[input[i]]);
        }
    });
});
