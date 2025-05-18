let type = prompt("°C to °F พิมพ์เลข 1, °F to °C พิมพ์เลข 2 ")

if(type == 1){
    // alert("ใส่ค่าองศาเซลเซียส")
    Fahrenheit()
}
else if(type == 2){
    // alert("ใส่ค่าองศาฟาเรนไฮต์ ")
    celcius()
}
else{
    alert("พิมพ์แค่เลข 1 หรือ 2 เท่านั้น!!")
}

function celcius () {
    let F = prompt("ใส่ค่าองศาฟาเรนไฮต์")
    let postCelcius = (F - 32)*(5/9)
    document.getElementById("temperate_status").innerHTML = "อุณหภูมิ " + F + " °F " + "มีค่าเท่ากับ " + postCelcius.toFixed(2) + "°C"
}

function Fahrenheit (){
    let C = prompt("ใส่ค่าองศาเซลเซียส")
    let postFahrenheit = C * (9/5) + 32
    document.getElementById("temperate_status").innerHTML = "อุณหภูมิ " + C + " °C " + "มีค่าเท่ากับ " + postFahrenheit.toFixed(2) + "°F"
}