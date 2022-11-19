let searchBtn=document.getElementById("sbtn")

let Country =document.getElementById("searchCity")

let cityname=document.querySelector(".city")
let temp=document.querySelector(".temp")
let mintemp=document.querySelector(".mintemp")
let maxtemp=document.querySelector(".maxtemp")
let humidity=document.querySelector(".humid")

searchBtn.addEventListener("click",()=>{
    var input=Country.value;
   
    let apikey=`fda3e585a190e729b4e4db2c03e31c7f`

let url=`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apikey}`

fetch(url)
.then((resp)=>{return resp.json()})
.then((data)=>{console.log(data);
cityname.innerHTML+=data.name
temp.innerHTML+=parseInt(data.main.temp-273)
mintemp.innerHTML+=parseInt(data.main.temp_min-273  )
maxtemp.innerHTML+=parseInt(data.main.temp_max-273)
humidity.innerHTML+=data.main.humidity
})

})
