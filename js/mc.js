<script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

$(document).ready(function() {
  var api_url = "http://motd.smgoro.top/api?host=" + card_server_status.host;
  $.getJSON(api_url, function(data) {
    var status = data.status;
    var host = data.host;
    var motd = data.motd;
    var agreement = data.agreement;
    var version = data.version;
    var online = data.online;
    var max = data.max;
    var level_name = data.level_name;
    var gamemode = data.gamemode;
    var delay = data.delay;
    var content = "Status: " + status + "<br>" +
                  "Host: " + host + "<br>" +
                  "MOTD: " + motd + "<br>" +
                  "Agreement: " + agreement + "<br>" +
                  "Version: " + version + "<br>" +
                  "Online Players: " + online + "/" + max + "<br>" +
                  "Level Name: " + level_name + "<br>" +
                  "Gamemode: " + gamemode + "<br>" +
                  "Delay: " + delay + "ms";
    $("#server_status").html(content);
  });
});
</script>

