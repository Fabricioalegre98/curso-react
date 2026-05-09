import{ expect,test, describe } from 'vitest'
import {add} from './math.helper'


describe ('add', ()=>{

    test('should add two positives numbers', () => {

        // ! 1. Arrange

        const a = 1;
        const b = 2;

        // ! 2. Act
        const result = add(a, b);
    
        // ! 3. Assets
        expect (result).toBe(a + b);

    });
});

describe ('substract', ()=>{

    test('should add two positives numbers', () => {

        // ! 1. Arrange

        const a = -1;
        const b = -2;

        // ! 2. Act
        const result = add(a, b);
    
        // ! 3. Assets
        expect (result).toBe(-3);

    });
});