function fetchh (url, succses, error){
        var xhr = new XMLHttpRequest();
            xhr.open("GET",url,true);
            xhr.onload = function()
            {
                if(xhr.status == 200)
                    console.log("Wszystko się powiodło");
                else
                    console.log ("Wystąpił błąd. Status: " +xhr.status);
            };
            xhr.onerror = function(){
                console.log("Error status: " + xhr.status);
            };
            xhr.send();
}
var btn = document.querySelector("button");

btn.addEventListener("click",function(data) {
            fetchh("https://jsonplaceholder.typicode.com/users",
                function(response){console.log("Powidoło się");},
                function(error){console.log("Nie powiodło się");}
)},true);

















