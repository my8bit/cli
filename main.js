window.onload = function() {

    var cmd = document.getElementById("cmd");
    cmd.focus();
    document.addEventListener("click", function() {
        cmd.focus();
    });
    var cli = $(".cli");

    function scrollToBotton() {
        cli.scrollTop(cli[0].scrollHeight);
    }

    function keyDownTextField(e) {
        //TODO  optimize
        var inputText = $(this).text();
        //console.log(this);
        if (e.keyCode === 13) {
            $.ajax(inputText + ".json")
                .done(function(res) {
                    outputText.append(res.body);
                    if (goLink.url) {
                        window.open(goLink.url, goLink.windowType);
                    }
                })
                .fail(function(err) {
                    outputText.append('<p>' + outputText + ': command not found</p>');
                });
            switch (inputText) {
                case 'clear':
                    $('#emp').empty();
                    $('#welcome').remove();
                    break;
                case 'email':
                    window.location.href = "malito:ihor@pavlenko.ninja";
                    break;
                case 'ls':
                    $('#emp').append('<p>List is empty</p>');
                    break;
                case 'go lastfm':
                    $('#emp').append('<p>Open last.fm in new tab...</p>');
                    $('#emp').append('<p><a href="http://www.lastfm.ru/user/LINKINraIN">http://www.lastfm.ru/user/LINKINraIN</a></p>');
                    window.open('http://www.lastfm.ru/user/LINKINraIN', '_blank');
                    break;
                case 'code':
                    $('#emp').append('<div style="font-style: italic;">{<br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #82CDB9; text-shadow: 0px 0px 2px #82CDB9;">JavaScript: </span><span style="color: #F7208B; text-shadow: 0px 0px 2px #F7208B;">"3 year"</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #82CDB9; text-shadow: 0px 0px 2px #82CDB9;">HTML5: </span><span style="color: #F7208B; text-shadow: 0px 0px 2px #F7208B;">"2 years"</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #82CDB9; text-shadow: 0px 0px 2px #82CDB9;">javascript: </span><span style="color: #F7208B; text-shadow: 0px 0px 2px #F7208B;">true</span><br>}</p></div>');
                    //$('#emp').append('<p><a href="http://www.lastfm.ru/user/LINKINraIN">http://www.lastfm.ru/user/LINKINraIN</a></p>');
                    var audio = document.getElementById("audio");
                    //audio.play();
                    //                  window.open('http://www.lastfm.ru/user/LINKINraIN', '_blank');
                    break;
                case 'go twitter':
                    $('#emp').append('<p>Open twitter.com in new tab...</p>');
                    $('#emp').append('<p><a href="http://www.twitter.com/my8bitname">http://www.twitter.com/my8bitname</a></p>');
                    window.open('http://www.twitter.com/my8bitname', '_blank');
                    break;
                case 'help':
                    $('#emp').append('<p>This is help</p>');
                    break;
                case 'info':
                    $('#emp').append('<p>This is info</p>');
                    break;
                case '':
                    $('#emp').append('<p>my8bit@my8bit: </p>');
                    scrollToBotton();
                    //cli.scrollTop(cli[0].scrollHeight);
                    break;
                default:
                    //$('#emp').append('<p>' + $(this).text() + ': command not found' + '</p>');
                    //scrollToBotton();
                    //cli.scrollTop(cli[0].scrollHeight);
                    break
            }
            e.preventDefault();
            //$('#emp').append('<p>' + $(this).text() + '</p>');
            $(this).text('');
            //$(this).scrollTo('#cmd');

            //window.scrollTo(0,document.body.scrollHeight);
        }
        //$('.cli').prepend("<p>123</p>")
    }
    document.getElementById('cmd').addEventListener("keydown", keyDownTextField, false);
    /*$('.cli').arctext({
                radius: 148
            });*/
}