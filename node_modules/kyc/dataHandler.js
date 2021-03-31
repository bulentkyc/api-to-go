import localDataHandler from './localDataHandler.js';
import parseHandler from './parseHandler.js';
import isEmpty from './isEmpty.js';

export default async (url, options, parser, timeDiff, sameDay, errorHandler) => {

    let finalData = await localDataHandler(url, timeDiff, sameDay);

    if(isEmpty(finalData)) {
        await fetch(url, options)
        .then(async res => finalData = await parseHandler(res, parser))
        .catch(errorHandler);
    }
    localStorage.setItem(url, JSON.stringify({result:finalData, date: Date.now()}));
    
    return finalData;

}