import kyc from 'kyc';
import isEmpty from './isEmpty.js';

class ApiToGo {
    ref = null;

    async setRef (email, pass) {
        let result;

        await kyc('https://api-to-go.herokuapp.com/api/auth/get-ref', {
            method:'POST', 
            headers:{'Content-Type': 'application/json'},
            options:{body:JSON.stringify({email, pass})}
            
        }).then(res => {
            if (res.status == 'success') {
                this.ref = res.token;
                localStorage.setItem('api-to-go.ref', res.ref);
                result = res.status;
            } else {
                throw 'setRef failed: ' + res.message;
            }
        });

        return result;
    }

    async register (email, pass) {
        let result;

        await kyc('https://api-to-go.herokuapp.com/api/auth/register', {
            method:'POST', 
            headers:{'Content-Type': 'application/json'},
            options:{body:JSON.stringify({email, pass})}
        }).then(res => {
            if (res.status == 'success') {
                result = res.status;
            } else {
                throw 'register failed: ' + res.message;
            }
        });

        return result;
    }

    async login (email, pass) {
        let result;

        await kyc('https://api-to-go.herokuapp.com/api/auth/login', {
            method:'POST', 
            headers:{'Content-Type': 'application/json'},
            options:{body:JSON.stringify({email, pass})}
        }).then(res => {
            if (res.status == 'success') {
                localStorage.setItem('api-to-go', res.token);
                result = res.token;
            } else {
                throw 'register failed: ' + res.message;
            }
        });

        return result;
    }

    async post (data, overWrite) {
        let token = localStorage.getItem('api-to-go');
        let db;
        let dataSet = [data];
        this.ref = localStorage.getItem('api-to-go.ref')
        console.log(dataSet);

        if (isEmpty(token)) {
            console.warn('ApiToGo.login() should executed in advance to use ApiToGo.post()');
            return 'ApiToGo.login() should executed in advance to use ApiToGo.post()';
        }

        if (overWrite == false) {
            db = await kyc('https://api-to-go.herokuapp.com/api/my-data', {
                method:'GET', 
                headers:{
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                },
                key:'data.userData.data'
            });

            console.log(111,db)

                if (db.length > 0) {
                    dataSet.push(db[0]);
                }
            console.log(dataSet);
        }
        
        

        return await kyc('https://api-to-go.herokuapp.com/api/my-data', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                ref:this.ref,
                'x-auth-token': token
            },
            
            options:{body:JSON.stringify({data:dataSet})}
        });
    }

    async get () {
        let token = localStorage.getItem('api-to-go');
        let db = {};

        if (isEmpty(token)) {
            console.warn('ApiToGo.login() should executed in advance to use ApiToGo.get()');
            return 'ApiToGo.login() should executed in advance to use ApiToGo.get()';
        }

        return await kyc('https://api-to-go.herokuapp.com/api/my-data', {
            method:'GET', 
            headers:{
                'Content-Type': 'application/json',
                'x-auth-token': token
            },
            key:'data.userData.data'
        });

    }

    clearRef () {
        this.ref = null;
    }
}

export default new ApiToGo();