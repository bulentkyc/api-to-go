import initializeHandler from './initializeHandler.js';
import totalLimitHandler from './totalLimitHandler.js';
import timeDiffHandler from './timeDiffHandler.js'
import dataHandler from './dataHandler.js';
import processHandler from './processHandler.js';
import logHandler from './logHandler.js';
import errHandler from './errHandler.js';

/**
 * This function handles api connections, data receiving, DOM building about your HTML code template like component.
 * 
 * If next request happens during timeDiff uses data from local storage.
 * Hence, saves network and request quotas.
 * 
 * Automatically saves these on the local storage:
 * 
 * HTTP request
 * 
 * End-point
 * 
 * Parsed response.
 * 
 * @param {string} url - The end point URL for the HTTP request.
 * @param {Object} [settings] - Any settings from the list.
 * @param {string} [settings.method] - HTTP request method type (i.e. GET, POST, ...).
 * @param {Object} [settings.headers] - HTTP request headers.
 * @param {Object} [settings.options] - HTTP request options.
 * @param {string} [settings.parser] - Promise-based methods to access the body in various formats(json, text, formData, blob or arrayBuffer ).
 * @param {boolean} [settings.log] - Log parsed response on console.
 * @param {string} [settings.key] - Key or key chain (i.e. response.data.informations).
 * @param {function} [settings.component] - Callback function. Receives array members one by one as parameter.
 * @param {string} [settings.target] - CSS selector of target element on body for inserting rendered component (i.e. body, #id, .class-name)
 * @param {string} [settings.timeDiff] - Time difference to expire data on local storage (i.e. 123, 123s, 123m, 123h, 123d, 123w, 123y).
 * @param {boolean} [settings.sameDay] - Same day control to expire data on local storage.
 * @param {number} [settings.totalLimit] - Limit total request limit count by kyc from now on. Don't set it to remove the limit.
 * @param {function} [settings.errorHandler] - Error handler function.
 * @returns {Array} Returns array of components or success.
 */

export default async (url, settings) => {

    let finalData = [];

    let defaultSettings = {
        method: 'GET',
        headers: {},
        options: null,
        parser: 'json',
        log: false,
        key: null,
        component: null,
        target: 'return',
        timeDiff:'24h',
        sameDay: false,
        totalLimit: null,
        errorHandler: errHandler,
    };

    let {
        method,
        headers,
        options,
        parser,
        log,
        key,
        component,
        target,
        timeDiff,
        sameDay,
        totalLimit,
        errorHandler
    } = initializeHandler(defaultSettings, settings);

    totalLimitHandler(totalLimit);

    finalData = await dataHandler(url, {method, headers, ...options}, parser, timeDiffHandler(timeDiff), sameDay, errorHandler);
    
    logHandler(log, finalData);

    return await processHandler(finalData, key, target, component);

}