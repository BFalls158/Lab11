$(function(){

	$.getJSON('http://www.reddit.com/r/earthporn/about.json').done(function(d){
		$('#miniImg').attr('src', d.data.header_img);
		$('#miniImg2').attr('src', d.data.header_img);

	});


	$.getJSON('http://www.reddit.com/r/earthporn.json?sort=hot').done(function(d){
		var posts = d.data.children;
		posts.forEach(function(post){
			if(!post.data.over_18){
				var article = $('<article>');
				var score = $('<p>').addClass('score').text(post.data.score);
				var thumbnail = $('<img>').attr({src:post.data.thumbnail, alt: 'thumbnail'}).addClass('thumbnail');
				var title = $('<p>').addClass('title').text(post.data.title);
				var submission = $('<p>').addClass('submission').text('Submitted by: ' + post.data.author);
				var comments = $('<p>').addClass('comments').text()
				article.append(score, thumbnail, title, submission);
				$('body').append(article);
				thumbnail.wrap(function(){return '<a href="' + post.data.url + '"></a>'});
				submission.wrap('<a href="https://www.reddit.com/user/'+ post.data.author +'"></a>');
				title.wrap('<a href="https://www.reddit.com'+ post.data.permalink +'"></a>');
			}
		});
	});

});



