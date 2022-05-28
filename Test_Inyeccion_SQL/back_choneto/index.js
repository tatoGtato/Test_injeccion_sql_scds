const express = require("express");
const mysql = require("mysql");
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
	user:"root",
	host: "localhost",
	password: "tupassword",
	database: "LoginSystem",
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


app.post("/register", (req, res) => {

	console.log("SECONECTO");

	const username = req.body.username;
	const password = req.body.password;

	db.query("INSERT INTO users (username, password) VALUES (?,?)", 
		[username, password],
		(err, result) => {
			console.log(err);
		}
	);
});

app.post('/login', (req, res) => {

	const username = req.body.username;
	const password = req.body.password;

	db.query("SELECT * FROM users WHERE username = ? AND password = ?",
		[username, password],
		(err, result) => {

			if (err){
				res.send({err : err});	
			}
			if (result.length > 0) {
				res.send(result);
			} else {
				res.send({message: "El usuario o la contrasena son incorrectos"});
			}
			
		}
	)
})

app.listen(3001, () => {
	console.log("running server")
})