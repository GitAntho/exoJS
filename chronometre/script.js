var pElt = document.getElementsByTagName("p");
var startButton = document.getElementById("start");
var time;
var ms = 0,
    sec = 0,
    min = 0,
    hours = 0;

function start()
{
    time = setInterval(update_chrono,10);
    startButton.disabled = true;
}

function update_chrono()
{
    ms += 1;

    if(ms == 100){
        ms = 0;
        sec += 1;
    }

    if(sec == 60){
        sec = 0;
        min += 1;
    }
    if(min == 60){
        min = 0;
        hours += 1;
    }

    pElt[0].innerHTML = hours + " h";
    pElt[1].innerHTML = min + " min";
    pElt[2].innerHTML = sec + " s";

    if (ms < 10)
    {
        pElt[3].innerHTML = "0" + ms + " ms";
    }
    else
    {
        pElt[3].innerHTML = ms + " ms";
    }
}


function stop()
{
    clearInterval(time);
    startButton.disabled = false;

}

function reset()
{
    clearInterval(time);
    startButton.disabled = false;

    ms = 0;
    sec = 0;
    min = 0;
    hours = 0;

    pElt[0].innerHTML = hours + " h";
    pElt[1].innerHTML = min + " min";
    pElt[2].innerHTML = sec + " s";
    pElt[3].innerHTML = ms + " ms";
}
