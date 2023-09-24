// const greetings = "hello world, this is my first node code"
// const dir = __dirname
// const owner = "Glory"
// console.log(dir);

// setInterval(() =>{
//     console.log(greetings);
// }, 2000)

// const greet = (user) => {
//     console.log(`${owner} is greeting you, ${user}`)
// }

// greet('Peace')

// const math = require ('./mathOperations.js')
// const string = require ('./stringOperations.js')

// math.add(2,7)
// math.subtract(45,7)
// string.concat('Peace ', 'Glory')

// const os = require('os');

// console.log(os.userInfo());

// const fs = require('fs');
// console.log(fs);

const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.end('This is the homepage');
    }
    else if (req.url === '/about') {
        res.end('This is the about page');
    }
    else {
        res.end(
            '<h1> Page not found</h1>'
        )
    }
})

server.listen(3000);