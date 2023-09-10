import http from 'http' 
import url  from 'url'

http.createServer(( req,res) => {
   const parsedUrl = url.parse(req.url, true)
}).listen(5000)