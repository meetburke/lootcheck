import * as constants from '../actions/constants';

const balance = (state = 0, action) => {
    switch(action.type) {
        case constants.DEPOSIT:
          return state + action.deposit;

        case constants.SET_BALANCE:
          return action.balance;

        case constants.WITHDRAW:
          return state - action.withdrawal;

        default:
          return state;
    }
} 


export default balance;