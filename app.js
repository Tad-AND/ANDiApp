const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;  
res.write('<html>');
res.write('<form method="#">');
res.write('<input type="text" name="andTitle" placeholder="Enter AND Title" autocomplete="off"> <br>'); 
res.write('<input type="text" name="fullName" placeholder="Enter Full Name" autocomplete="off"> <br>'); 

res.write('<a href="#"><button type="button">Submit</button></a>');
res.write('</form>');
res.write('</html>');
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});