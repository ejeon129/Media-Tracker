$.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: "https://api.instagram.com/v1/users/banksy/media/recent/?access_token={token}",
    success: function(response) {
        console.log('jfsdahuifhasudh')
        console.log(response);
        
            
            var html = '<a href="' + response.data[i].link + '" >'+
            '<img src="' + response.data[i].images.low_resolution.url + '" alt="thumbnail" /></a>';
            $(".instafeed").html(html);

    }, 

    error: function(data) {
        console.log('We have a problem!');
    }
});

var name = "user";
$.get("https://images"+~~(Math.random()*3333)+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=https://www.instagram.com/" + name + "/", function(html) {
if (html) {
    var regex = /_sharedData = ({.*);<\/script>/m,
        json = JSON.parse(regex.exec(html)[1]),
        edges = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges;

      $.each(edges, function(n, edge) {
          var node = edge.node;
          $('body').append(
              $('<a/>', {
              href: 'https://instagr.am/p/'+node.shortcode,
              target: '_blank'
          }).css({
              backgroundImage: 'url(' + node.thumbnail_src + ')'
          }));
      });
    }
});

var unirest = require("unirest");

var req = unirest("GET", "https://instagram28.p.rapidapi.com/medias");

req.query({
	"next_cursor": "QVFDQjY1YkdMY0x0YTFEdWo4R21CNFVuMUV0WmpIdUdlWVNTaXY4VXlVdkYyZEhJT2tBay1aRDN4OWpUMFZHbG1KNmpiMnQ2Z09FVjFhWHUxTDBfNDh5Yg%3D%3D",
	"user_id": "25025320"
});

req.headers({
	"x-rapidapi-host": "instagram28.p.rapidapi.com",
	"x-rapidapi-key": "6e49dbb403msh196cf715d20e6e5p1a08fdjsn3f50cd1f1eec",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});