#!/usr/bin/env node

var program = require('commander');
var axios 	= require('axios');
var clc 	= require('cli-color');
var Table   = require('cli-table');

var year;

function getMovie(keyword)
{
	let param = {
		params : {
			t : keyword,
			plot : 'short',
			r : 'json'
		}
	};

	axios
		.get('https://www.omdbapi.com',param)
		.then(function(res){
			var parse = res.data;

			// instantiate
			var table = new Table({
			    // head: ['', '']
			});

				table.push(
				  	[ 'Title' , parse.Title ],
				  	[ 'Year', parse.Year ] ,
				  	[ 'Rated', parse.Rated] ,
				  	[ 'Released', parse.Released] ,
				  	[ "Runtime", parse.Runtime] ,
					[ "Genre" , parse.Genre],
					[ "Director",  parse.Director] ,
					[ "Writer", parse.Writer],
					[ "Actors", parse.Actors] ,
					[ "Plot", parse.Plot],
					[ "Language", parse.Language],
					[ "Country", parse.Country],
					[ "Awards", parse.Awards],
					[ "Metascore", parse.Metascore],
					[ "imdbRating", parse.imdbRating],
					[ "imdbVotes", parse.imdbVotes],
					[ "imdbID", parse.imdbID],
					[ "Type", parse.Type] ,
					[ "DVD", parse.DVD] ,
					[ "BoxOffice", parse.BoxOffice] ,
					[ "Production", parse.Production] ,
					[ "Website", parse.Website]
				);

			console.log(table.toString());

		}).catch(function(err)
		{
			console.log(err)
		})
}

program
 .arguments('<name>')
 .action(getMovie)
 .parse(process.argv);