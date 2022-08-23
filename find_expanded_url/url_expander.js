import fetch from "node-fetch"

async function find_expanded_url({url, error}) {
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
  return {
    url : response.headers.get('location') === null ? response.url : response.headers.get('location'),
    server : response.headers.get('server')
  }
}

export default find_expanded_url
