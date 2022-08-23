# url-expander
A **very** simplistic script that uses the `node-fetch` library to find out the actual URL behind a shortened URL.
If you're skeptical about clicking on the link and checking it out yourself, this is the resource you're looking for.

## How to use?
* All you need to have is [node](https://nodejs.dev/en/) to run this project. 
* Clone this repo and run `npm install && npm start <the_shortened_link>`.
* You can also choose to trigger an error if the url has any inbuilt redirects.
    * This can be done by `npm start <the_shortened_link> true`.
    
## Bugs?
Feel free to open an issue.
