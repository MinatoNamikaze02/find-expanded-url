import fetch from "node-fetch"

async function postData({url, error}) {
  console.log("URL: " + url)
  const response = await fetch(url, {
    method: "GET", 
    mode: "cors",
    cache: "no-cache",
    redirect: error === "true" ? "error" : "manual",
    referrerPolicy: "no-referrer",
  }).catch(err => {
    console.log(err.message)
    process.exit(0)
  });
  return response
}

const getArgs = () => {
  const args = process.argv.slice(2)
  if(args.length == 0 || args.length > 2) {
    console.log("No arguments provided or too many arguments provided")
    process.exit(0)
  }
  var url = args[0]
  var error = args[1]
  return {
    url: url,
    error: error ? error : "false"
  }
}

postData(getArgs()).then((data) => {
  var url = data.headers.get('location') === null ? data.url : data.headers.get('location')
  var server = data.headers.get('server')
  console.log("The actual URL is: ", url)
  console.log("The server is: ", server)
}).catch(err => {
  console.log(err.message)
  process.exit(0)
})
