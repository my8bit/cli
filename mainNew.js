window.onload = function() {

    var cmd = document.getElementById("cmd"),
        outputText = $("#emp"),
        cli = document.getElementsByClassName("cli")[0],
        comm = $("#cmd");
    cmd.focus();
    document.addEventListener("click", function() {
        cmd.focus();
    });

    cmd.addEventListener("keydown", keyDownTextField, false);

    function keyDownTextField(e) {
        if (e.keyCode === 13) {
            var me = comm,
                command = me.text(),
                inputText = me.text();
            switch (inputText) {
                case "clear":
                    //NEED TO FIX
                    outputText.empty();
                    $("#welcome").remove();
                    break;
                case "email":
                    window.location.href = "malito:ihor@pavlenko.ninja";
                    break;
                case "Skype":
                case "skype":
                    window.location.href = "skype:linkinrain?chat";
                    break;
                case "go twitter":
                    outputText.append("<p>Open twitter.com in new tab...</p>");
                    outputText.append("<p><a href='http://www.twitter.com/my8bitname'>http://www.twitter.com/my8bitname</a></p>");
                    outputText.append("<p>Want to open? (Y/N)...</p>"); //NEEED TO IMPLEMENT
                    //window.open("http://www.twitter.com/my8bitname", "_blank");
                    break;
                case "":
                    outputText.append("<p>my8bit@my8bit: </p>");
                    break;
                default:
                    $.ajax(inputText + ".json")
                        .done(function(res) {
                            outputText.append(res.body);
                            if (res.url) {
                                window.open(res.url, res.windowType);
                            }
                            cli.scrollTop = cli.scrollHeight;
                        })
                        .fail(function(err) {
                            outputText.append("<p>" + command + ": command not found</p>");
                            console.error(err);
                            me.text("");
                            cli.scrollTop = cli.scrollHeight;
                        });
                    me.text("");
                    //cli.scrollTop = cli.scrollHeight;
                    break;
            }
            e.preventDefault();
            cli.scrollTop = cli.scrollHeight;
        }
    }
};