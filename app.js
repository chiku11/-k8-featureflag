const http = require("http");
const fs = require("fs")

const host = '0.0.0.0';
const port = 8000;

const requestListener = function (req, res) {
    let mydata =  fs.readFileSync('/etc/featureflag/labels', 'utf8');
    res.writeHead(200);
    res.end("Feature flag for server is turned "+ mydata);
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});