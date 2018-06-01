import * as constants from '../actions/constants';
import balanceReducer from './balance';

describe('balanceReducer', ()=> {
    
    it('deposits into the balance', () => {
       const deposit = 10;
       const initialBalance = 5;
       expect(balanceReducer(initialBalance, {type: constants.DEPOSIT, deposit})).toEqual(initialBalance + deposit);
    });
    
    it('sets a balance,', () => {
        const balance = 10;
        expect(balanceReducer(undefined, {type: constants.SET_BALANCE, balance})).toEqual(balance);
    });

    it('withdraws from the balance', () => {
        const withdrawal = 10;
        const initialBalance = 20;
        expect(balanceReducer(initialBalance, {type: constants.WITHDRAW, withdrawal})).toEqual(initialBalance - withdrawal);
    })
});