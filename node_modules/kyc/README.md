# ![KYC Logo](http://bulentkyc.github.io/kyc-react-sample/kyc.png)
# KYC

>🥁 Fetch’ ing data from web services is an important and essential part of the web development. Also there’re some routines after then fetching the data!
>- looping data
>- caching
>- creating content
>
> KYC manages this routine in a smart way for you. Just customise KYC and enjoy the convenience.

KYC serves you:

- [x]  Easy setup for API connection
- [x]  Easy content rendering over server response
- [x]  Caching response
- [x]  Setting expire time for cache
- [x]  API quota saving
- [x]  Bandwidth saving
- [x]  Performance improving

**Did you know?**
KYC works with all JS base technologies...
Like React, React Native, Type Script, Angular, Ionic, Vue, etc.

## What to get?
- Fetched and parsed output of your request

    OR

- Array of your components which are prepared with output of your request
## What to set?
 * **url** *(string)* - The end point URL for the HTTP request. This is an only must parameter.
 * **settings** *(Object)* - Any settings from the list below. All these are optional.
 *  **settings.method** *(string)* - HTTP request method type (i.e. GET, POST, ...).
 *  **settings.headers** *(Object)* - HTTP request headers.
 *  **settings.options** *(Object)* - HTTP request options.
 *  **settings.parser** *(string)* - Promise-based methods to access the body in various formats(json, text, formData, blob or arrayBuffer ).
 *  **settings.log** *(boolean)* - Log parsed response on console.
 *  **settings.key** *(string)* - Key or key chain (i.e. response.data.informations).
 *  **settings.component** *(function)* - Callback function. Receives array members one by one as parameter.
 *  **settings.target** *(string)* - CSS selector of target element on body for inserting rendered component (i.e. body, #id, .class-name)
 *  **settings.timeDiff** *(string)* - Time difference to expire data on local storage (i.e. 123, 123s, 123m, 123h, 123d, 123w, 123y).
 *  **settings.sameDay** *(boolean)* - Same day control to expire data on local storage.
 *  **settings.totalLimit** *(number)* - Limit total request limit count by kyc from now on. Don't set it to remove the limit.
 *  **settings.errorHandler** *(function)* - Error handler function.

## How to install & import

```bash
$: npm install kyc
```

```jsx
import kyc from 'kyc';
```

## How to use in React

```jsx
import kyc from 'kyc';
import CustomComponent from './components/CustomComponent';

let url = '';
let headers = {};
let key = '';
let timeDiff = '1d';
let component = (item) => {
    return (
        <CustomComponent 
            imgSrc = {item.background} 
            title = {item.title}
        />
    );
}

kyc(url,{ headers, key, component, timeDiff}).then(output => {
    /*output will be array of your components*/
});
```

### React sample with hooks

> App.js
>
>```jsx
>import './App.css';
>import kyc from 'kyc';
>import Card from './components/Card';
>import {useState, useEffect} from 'react';
>
>function App() {
>
>  const [countries, setCountries] = useState();
>
>  useEffect(() => {
>    let url = 'https://restcountries.eu/rest/v2/all';
>    let timeDiff = '1d';
>    let log = 'true';
>    let component = (item) => {
>      return (
>        <Card 
>          imgSrc = {item.flag} 
>          title = {item.name}
>        />
>      );
>    }
>
>    kyc(url, {log, timeDiff, component})
>    .then(output => setCountries(output));
>  }, []);
>
>  return (
>    <div className="App">
>      <h1>KYC Sample with countries</h1>
>      {countries}
>    </div>
>  );
>}
>
>export default App;
>```
>

> Card.js
>
>```jsx
>import './Card.css';
>
>export default function (props) {
>  return (
>    <div className = "card">
>      <img src = {props.imgSrc}/>
>      <h3>{props.title}</h3> 
>    </div>
>  );
>}
>```
>

> [GitHub Repo](https://github.com/bulentkyc/kyc-react-sample/tree/function-base)

> [GitHub Pages](https://bulentkyc.github.io/kyc-react-sample/)

### React sample with classes

>🥁  **Samples are coming soon...**
>
>*For sure, you can try yourself and even contribute with us!*

## How to use in Angular

>🥁  **Instructions are coming soon...**
>
>*For sure, you can try yourself and even contribute with us!*

### Angular Sample

>🥁  **Samples are coming soon...**
>
>*For sure, you can try yourself and even contribute with us!*

## How to use in Vue

>🥁  **Instructions are coming soon...**
>
>*For sure, you can try yourself and even contribute with us!*

### Vue Sample

>🥁  **Samples are coming soon...**
>
>*For sure, you can try yourself and even contribute with us!*
