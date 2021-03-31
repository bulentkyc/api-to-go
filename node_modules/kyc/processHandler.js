export default async (data, key, target, component) => {
    
    let finalResult;
    let componentSet = [];

    if (key) {
        let tempRes = data;
        let keys = key.split('.');
        await keys.forEach(k=>{
            tempRes = tempRes[k];
            finalResult = tempRes;
        });
    } else {
        finalResult = data;
        //throw ('"key" should be supplied to render components automatically by kyc.');
    }

    if (component) {
        

        if (target == 'return') {
            await finalResult.forEach( item => {
                componentSet.push(component(item));
            });
            return componentSet;
        } else {
            finalResult.forEach( item => {
                document.querySelector(target).insertAdjacentHTML('beforeend', component(item));
            });
            return finalResult;
        }
    }else {
        return finalResult;
    }
}