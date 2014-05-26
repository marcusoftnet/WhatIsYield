var koa = require("koa")
var app = koa();

var monk = require("monk");
var wrap = require("co-monk");
var db = monk("localhost/userdb");
var users = wrap(db.get("users"));

app.use(function *(){
	var userList = yield users.find({});
	this.body = userList;
});

app.listen(3000);
console.log("The app is listening. Port 3000");