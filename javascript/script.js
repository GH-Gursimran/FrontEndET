
document.getElementById("submit-button").addEventListener("click", function(event)
{
    event.preventDefault();

    var country = document.getElementById("country").value;
    var from_date = document.getElementById("from_date").value;
    var to_date = document.getElementById("to_date").value;

    if(country!="" && from_date!="" && to_date!=""){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4){
                var myarr = JSON.parse(this.responseText);
                console.log(myarr);
                console.log(this.status);
                printFunction(myarr)
            }
        } 
        var api_url = "https://api.covid19api.com/country/" + country + "?from=" + from_date + "T00:00:00Z&to="+to_date+"T00:00:00Z"
        xhttp.open("GET",api_url);
        xhttp.send();
        
    } 
});

function printFunction(myarr){
    myarr.forEach(func)
    function func(item){
        var data = "<div class='data-container' >" + 
                        "<div class='idv-data' >" + 
                        "Confirmed cases : " + item.Confirmed + 
                        "</div>" +
                        "<div class='idv-data' >" + 
                        "Active cases : " + item.Active + 
                        "</div>" +
                        "<div class='idv-data' >" + 
                        "Death cases : " + item.Deaths + 
                        "</div>" +
                    "</div>";
        document.getElementById("data-loc").innerHTML += data;
    }
}