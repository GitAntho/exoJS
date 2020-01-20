var result;
var x = 0;
var y = 1;
var button;

function fibonacci()
{
    var nombre1 = x;
    var nombre2 = y;
    var tab = [];

    for (var i = 1; i <= 100; i++)
    {
        result = nombre1 + nombre2;
        nombre1 = nombre2;
        nombre2 = result;
        x = nombre1;
        y = nombre2;
        tab.push(result);
    }

    for (var i = 0; i <= 99; i++)
    {

        var newP = document.createElement("p");
        var newContent = document.createTextNode(tab[i]);

        if (i == 0)
        {
            newP.style.color = 'black';
        }
        else if (i == 99)
        {
            newP.style.color = 'white';
        }
        else
        {
            //
            newP.style.color = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
        }

        newP.appendChild(newContent);
        button = document.getElementById("button");
        document.body.insertBefore(newP, button);
    }
}

fibonacci();



button = document.getElementById("button");
button.addEventListener("click", function () {

    var tag = document.getElementsByTagName("p");

    for (i = tag.length - 1; i >= 0; i--) {
        tag[i].parentNode.removeChild(tag[i]);
    }
    fibonacci();
});

