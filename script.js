

$(document).ready(function() {
	$('#searchButton').click(function() {
		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		url += '?' + $.param({
		  'api-key': "e796748230d94430a9baa2c08092da6d"
		});
		url +='&q=' + $('#searchTerm').val();
		console.log(url);
		$.ajax({
		  url: url,
		  method: 'GET',
		}).done(function(result) {
		  console.log(result);
		  for (var i=0; i<result.response.docs.length; i++) {
		  	var article = result.response.docs[i];
		  	console.log(article);
			  var content = '<div class="article">' + 
					`<h1>${article.headline.main}</h1>` +
					`${article.byline}<br />` +
					`Section: <br />` +
					`Published on ${article.pub_date}<br />` +
					`<div class="summary">${article.snippet}</div></div>`;
				$('#articles').append(content);
				console.log('headline: ' + article.headline.main);
				console.log(`headline: ${article.headline.main}`);
			}
		}).fail(function(err) {
		  throw err;
		});
	});

	$('#clearButton').click(function() {

	});


});