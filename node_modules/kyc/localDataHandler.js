import isEmpty from './isEmpty.js';

export default (url, timeDiff, sameDay) => {
    
    let localData;

    if(!isEmpty(localStorage.getItem(url))) {
        localData = JSON.parse(localStorage.getItem(url));
        if ((timeDiff > (Date.now() - localData.date)) && (sameDay == false) || isEmpty(timeDiff)) {
            return localData.result;
        } 
    }
    
    return null;

}