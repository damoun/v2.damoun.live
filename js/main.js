$(document).ready(function() {
    $.ajax({
      type:"GET",
      url:"https://api.twitch.tv/kraken/channels/dam0un",
      headers:{
        'Client-ID': 'dhtxhmg8vey6qz5y964c3u15vmcssa'
      },
      success: function (data) {
        $("#game").text(data.game);
        $("#title").text(data.status);
      }
    });
    $.ajax({
      type:"GET",
      url:"https://api.twitch.tv/kraken/streams/dam0un",
      headers:{
        'Client-ID': 'dhtxhmg8vey6qz5y964c3u15vmcssa'
      },
      success: function (data) {
          if (data.stream !== null)
	      $("#live").text("ONLINE");
      }
    });
});
