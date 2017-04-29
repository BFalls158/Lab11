$(function(){

	$.getJSON('http://www.reddit.com/r/earthporn.json?sort=hot').done(function(d){
		var posts = d.data.children;
		console.log(posts);
		posts.forEach(function(post){
			var article = $('<article>');
			var score = $('<p>').addClass('score').text(post.data.score);
			var thumbnail = $('<img>').attr({src:post.data.thumbnail, alt: 'thumbnail'}).addClass('thumbnail');
			var title = $('<p>').addClass('title').text(post.data.title);
			var submission = $('<p>').addClass('submission').text('Submitted by: ' + post.data.author);
			article.append(score, thumbnail, title, submission);
			$('body').append(article);
			thumbnail.wrap(function(){return '<a href="' + post.data.url + '"></a>'});
			submission.wrap('<a href="https://www.reddit.com/user/'+ post.data.author +'"></a>');
			title.wrap('<a href="https://www.reddit.com'+ post.data.permalink +'"></a>');
		});
	});

});



