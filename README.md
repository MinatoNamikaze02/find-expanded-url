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
   Run `npm install find-expanded-url`
### Example
```
import postData from 'find-expanded-url'

const url = 'https://bit.ly/3nM39Vs'

postData({url : url, error : false}).then((data) => {
   console.log("The actual URL is: ", data.url)
   console.log("The server is: ", data.server)
})

```
```
arjuns@Arjuns-MacBook-Air test % node test.js
The actual URL is:  https://medium.com/@MinatoNamikaze02/web-scraping-images-efficiently-using-scrapy-7902ceeab171
The server is:  nginx

```
    
## Bugs?
Feel free to open an issue.
