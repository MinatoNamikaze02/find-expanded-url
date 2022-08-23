# url-expander
A **very** simplistic script that uses the `node-fetch` library to find out the actual URL behind a shortened URL.
If you're skeptical about clicking on the link and checking it out yourself, this is the resource you're looking for.

## How to use?
* All you need to have is [node](https://nodejs.dev/en/) to run this project. 
* Clone this repo and run `npm install && npm start <the_shortened_link>`.
* You can also choose to trigger an error if the url has any inbuilt redirects.
    * This can be done by `npm start <the_shortened_link> true`.
    
## Usage as a library
### Installation
   Run `$ npm install find-expanded-url`
### Example
```
import find_expanded_url from 'find-expanded-url'

const url = 'https://bit.ly/3dRw20E'    //rickroll link xD

find_expanded_url({url : url, error : false}).then((data) => {
   console.log("The actual URL is: ", data.url)
   console.log("The server is: ", data.server)
})

```
```
$ node test.js
>> The actual URL is:  https://www.youtube.com/watch?v=dQw4w9WgXcQ
>> The server is:  nginx

```
    
## Bugs?
Feel free to open an issue.
