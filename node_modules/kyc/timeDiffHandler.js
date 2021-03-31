export default (timeDiff) => {
    
    let timeDiffUnit;

    if (isNaN(timeDiff)) {
        timeDiffUnit = timeDiff.slice(-1).toLowerCase();
        timeDiff = timeDiff.length > 1 ? timeDiff.slice(0, -1) : timeDiff;
    }    

    switch (timeDiffUnit) {
        case 's':
            timeDiff = timeDiff*1000
            break;
    
        case 'm':
            timeDiff = timeDiff*1000*60
            break;
    
        case 'h':
            timeDiff = timeDiff*1000*60*60
            break;
    
        case 'd':
            timeDiff = timeDiff*1000*60*60*24
            break;
    
        case 'w':
            timeDiff = timeDiff*1000*60*60*24*7
            break;
    
        case 'm':
            timeDiff = timeDiff*1000*60*60*24*30
            break;
    
        case 'y':
            timeDiff = timeDiff*1000*60*60*24*365
            break;

        default:
            console.warn(`Current value (${timeDiff+timeDiffUnit}) for timeDiff is not proper.\nHereby timeDiff disabled.\nCurrent value can be just a number for milliseconds, or a combination with a number and initial of a time unit from below:\nsecond, minute, hour, day, week, month, year.\ni.e. 123, 123s, 123m, 123h, 123d, 123w, 123y`);
            break;
    }

    if (isNaN(timeDiff)) {
        throw('Value error for timeDiff.\nValue can be just a number for milliseconds, or a combination with a number and initial of a time unit from below:\nsecond, minute, hour, day, week, month, year.\ni.e. 123, 123s, 123m, 123h, 123d, 123w, 123y')
    }
    

    return timeDiff;
}