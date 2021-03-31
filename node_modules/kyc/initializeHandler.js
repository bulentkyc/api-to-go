import isEmpty from './isEmpty.js';

export default (defSettings, userSettings) => {
    let finalSettings = {};
    Object.keys(defSettings).forEach(key => {
        if (!isEmpty(userSettings[key])) {
            finalSettings[key] = userSettings[key];
        } else {
            finalSettings[key] = defSettings[key]
        }
    });

    return finalSettings;
}