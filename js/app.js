$(function(){
 	$("#search").submit(function(e){
 		e.preventDefault();
 		var userSearch = $("#query").val();
 		getRequest(userSearch);
 	})
	function getRequest(userSearch){
		var params = {
			part: 'snippet',
			key: 'AIzaSyByjKp7sy4e2gpv_hDg-e5DSmNvTwVfADs',
			q: userSearch,
		};
		url = ("https://www.googleapis.com/youtube/v3/search");
		$.getJSON(url, params, function(data){
			showResults(data.items);
			console.log(data.items);
		});
	}
	function showResults(results){
		console.log(results);
  		$.each(results, function(index,value){
    	$('#search-results').append('<a href = https://www.youtube.com/watch?v=' + value.id.videoId +'>' + '<img src =' + value.snippet.thumbnails.medium.url + '>' + '</img>' + '</a>' + '<p>' + value.snippet.title + '</p>');
  })
  	function resetSearch(){
  		$("#search-results").html("");
  		$("#query").val("");
  	}
  	$("#reset").click(function(){
  		resetSearch();
  	})
}
});