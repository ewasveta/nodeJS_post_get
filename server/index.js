const http = require('http');
const fs = require('fs');
const url = require('url');

const cars = require("./cars")


http.createServer(function (req, res) {
  const q = url.parse(req.url,true)
  const query = q.query
  console.log(req.method)
  // console.log(cars)

  switch (q.path) {
    case '/':
      fs.readFile('./client/index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
      break;
  
    case '/style.css':
      fs.readFile('./client/style.css', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
        return res.end();
      });
      break;
  
    case '/script.js':
      fs.readFile('./client/script.js', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        return res.end();
      });
      break;
  
    case '/cars':
      console.log(q)

      // NEW 
      // GET /cars/1
      // PUT /cars/1
      // DELETE /cars/1


      if(req.method === "GET"){
        // GET /cars
        console.log(cars)
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(cars));
        res.end();

      }else if(req.method === "POST"){
        // POST /cars
        const fs = require('fs');
        
        let theCar = 
        {
          brand: "Test"
        }
        cars.push(theCar)

        fs.writeFileSync('cars.json', JSON.stringify(cars))

      }
      
      
      
      

      break;

    case `/cars?brand=${query.brand}`:      
      
        // GET car by brand
        // const car = cars.find( car => car.brand.toLocaleLowerCase() === query.brand.toLocaleLowerCase() )
        const car = cars.filter( car => car.brand.toLocaleLowerCase() === query.brand.toLocaleLowerCase() )[0]
        
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(car));
        res.end();
        break;
  
    default:
      fs.readFile('./client/404.html', function(err, data) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
      break;
  }

    // if(q.path === '/'){
    //   fs.readFile('./client/bamba.html', function(err, data) {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write(data);
    //     return res.end();
    //   });
    // }else if(q.path === '/style.css'){
    //     fs.readFile('./client/style.css', function(err, data) {
    //       res.writeHead(200, {'Content-Type': 'text/css'});
    //       res.write(data);
    //       return res.end();
    //     });
    // }
    // else if(q.path === '/script.js'){
    //   data = fs.readFileSync('./client/script.js');
    //   res.writeHead(200, {'Content-Type': 'text/javascript'});
    //   res.write(data);
    //   return res.end();
    // }
    // else if(q.path === '/'){

    // }
    // else{
    //   fs.readFile('./client/404.html', function(err, data) {
    //     res.writeHead(404, {'Content-Type': 'text/html'});
    //     res.write(data);
    //     return res.end();
    //   });
    // }

}).listen(8080);
console.log("server is running on port 8080")