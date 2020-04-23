# Request Middleware
&nbsp;

## Request Middleware is an application that sends a GET request to services.
&nbsp;

### You can specify two runtime environment variables :

* ACAO (process.env.ACAO) : To specify the Access-Control-Allow-Origin (default: *)
* PORT (process.env.PORT) : To specify the listening port (default: 8080)
<br/>

### You can specify two variables in the post request body :

* urlget (req.body.urlget) : To specify the target url for get request (default: none)
* timeout (req.body.timeout) : To specify the timeout for the get request (default: 2000ms)
