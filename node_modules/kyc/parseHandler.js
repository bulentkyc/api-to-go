export default async function (data, parser) {
    
    let result;

    if (parser) {
        switch (parser) {
            //read the response and return as text
            case 'text':
                result = await data.text();
                break;

            //parse the response as JSON
            case 'json':
                result = await data.json();
                break;
        
            //return the response as FormData object 
            case 'formData':
                result = await data.formData();
                break;
            
            //return the response as Blob (binary data with type)
            case 'blob':
                result = await data.blob();
                break;
            
            //return the response as ArrayBuffer (low-level representation of binary data)
            case 'arrayBuffer':
                result = await data.arrayBuffer();
                break;
            
            //If result is non of above data will be returned without parsing
            default:
                result = data;
                break;
        }
    }

    return result;

}