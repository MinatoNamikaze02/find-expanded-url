import find_expanded_url from "../find_expanded_url/url_expander.js"

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

find_expanded_url(getArgs()).then((data) => {
  console.log("The actual URL is: ", data.url)
}).catch(err => {
  console.log(err.message)
  process.exit(0)
})
