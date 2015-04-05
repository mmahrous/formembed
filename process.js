// Process page 
var cheerio = require('cheerio');
var regexp = require('node-regexp')
var $ = require('jquery');
module.exports = {
	parse: function(body){
		var parse = cheerio.load(body);
		var formHtml = parse('.ss-form').html();
		return formHtml;
	}, 
	validate: function(url){
		var vail = regexp()
				  .start('http')
				  .maybe('s')
				  .must('://')
				  .maybe('WWW.')
				  .must('docs.google')
				  .must('.com')
				  .must('/forms/')
				  .ignoreCase()
				  .toRegExp()
		return vail.test(url);
	},
	revalidate: function(url){
		var vail = regexp()
				  .start('http')
				  .maybe('s')
				  .must('://')
				  .maybe('WWW.')
				  .somethingBut(regexp.space)
				  .must('.com')
				  .ignoreCase()
				  .toRegExp()
		return vail.test(url);
	},
	redirectUrl: function(url){
		alert('dsaddsfds');
	}

};
