import postData from "../find_expanded_url/url_expander.js"

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
  console.log("The actual URL is: ", data.url)
  console.log("The server is: ", data.server)
}).catch(err => {
  console.log(err.message)
  process.exit(0)
})