$(".click-btn-down").click(function (event) {
    event.preventDefault(); // Prevents the default action (e.g., redirecting)
    var link = $(".link").val();
    var fromate = $(".formte").children("option:selected").val();
    var src = "" + link + "=" + fromate + "";
    downloadVideo(link, fromate);
    urlarea.style.display = 'none';
    l.style.display = 'none';
    r.style.display = 'block';
});

function downloadVideo(link, fromate) {
    $('.download-video').html('<iframe id="adw" style="margin-left:20%;font-weight:bold;width:200px;height:50px;border:0;overflow:hidden;border-radius: 1em;" scrolling="no" src="https://loader.to/api/button/?url=' + link + '&f=' + fromate + '"></iframe>');
}
