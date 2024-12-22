npm init
package name
description
entry point- server.js
enter 
enter
keywords: express production server
yes

package.json created

create server.js file

basic server set up and conncet with mongo db
middleware sare alag file me likhenge
/src/app.js

sare express ke logic written in app.js
controller bola jata he express me callback ko jo req, res wala function he ussey

routes aur controllers ka logic ek file me nhi hota he

/app.js -> module.exports = app

/server.js -> me app ko require karke server setup karna

Ab ham controllers banayge
❌ app.get('/' (req, res)) -> {
    res.render('/server.js)
}

// aese nhi karenge ab ham,

The new form

/routes/index.routes.js

waha Router require karo aur chala do

module.exports = router

aur ab unn routes ko waha par paste kardo

now
router.get('/', function(req, res) {
    res.render('/server.js')
});

SOA Architecture

/src/controllers/index.controller.js

databse setup
/db/db.js