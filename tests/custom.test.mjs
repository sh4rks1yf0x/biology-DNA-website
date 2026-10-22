import test from 'node:test';
import assert from 'node:assert/strict';
import {parseCustomDNA,REFERENCE,analyze} from '../dist/core.mjs';
test('custom input accepts pasted whitespace and lowercase',()=>{
 assert.deepEqual(parseCustomDNA(' atg gaa\n ttt cga\t tgg taa '),{sequence:REFERENCE,error:null});
});
test('custom input rejects unsupported symbols and incorrect lengths',()=>{
 for(const value of ['ATGGAATTTCGATGGTAN','ATG-GAA-TTT-CGA-TGG-TAA','ATGGAATTTCGATGGT1A','<script>'])assert.equal(parseCustomDNA(value).error,'letters');
 for(const value of ['ATG','ATGGAATTTCGATGGTAAA'])assert.equal(parseCustomDNA(value).error,'length');
 assert.equal(parseCustomDNA(' \n ').error,'empty');
});
test('custom sequences retain start and stop interpretation',()=>{
 assert.equal(analyze(parseCustomDNA('ctg gaa ttt cga tgg taa').sequence).type,'start');
 assert.equal(analyze(parseCustomDNA('atg gaa ttt cga tgg caa').sequence).type,'stoploss');
});
