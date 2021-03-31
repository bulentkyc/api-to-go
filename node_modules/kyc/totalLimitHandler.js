import isEmpty from './isEmpty.js';

export default (totalLimit) => {

    let counter = 0;

    if (!isEmpty(totalLimit)) {
        if (localStorage.getItem(counter)) {
            counter += 1;
            localStorage.setItem('counter', counter);
        }

        if (counter >= totalLimit) {
            throw('Request limit is reached! Please check your code or remove totalLimit from settings of kyc.');
        }
    } else {
        localStorage.setItem('counter', 0);
    }
}