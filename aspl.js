var http = require('http')
	color = require('colors')
	fs = require('fs')
	arg = process.argv

if (arg[2] == undefined) throw 'select a file'
var arr = fs.readFileSync(arg[2], 'utf8').split("\n")
var context = arr.join('').toString()
var match = context.match(/http.*.js/g)

console.log("total match:(".green + match.length.toString().red + ")\n".green,  match.join("\n ").toString().yellow)
match.forEach(function(url) {
	http.get(url, function(res,err) {
		var body = ''
		var fileName = url.substr(url.lastIndexOf("/") + 1)
		res.on('data', function(chunk) { body += chunk })
		res.on('end', function(){
			fs.writeFile(fileName, body, function (err) {
			  	if (err) throw err
			  	console.log(fileName + ' saved!'.green)
			});
		})
	}).on('error', function(error) { console.log( url + ' fetch faild!'.red) })	
})