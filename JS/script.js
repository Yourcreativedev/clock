const test = setInterval(timer,1000)
function timer()
{
    const date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    if(hour<10)
    {
        document.getElementById("hour").innerHTML = "0"+date.getHours()
    }
    else
    {
        document.getElementById("hour").innerHTML = date.getHours()
    }
    if(minute<10)
    {
        document.getElementById("minute").innerHTML = "0"+date.getMinutes()
    } 
    else{
        document.getElementById("minute").innerHTML = date.getMinutes()
    }
    if(second<10)
    {
        document.getElementById("second").innerHTML = "0"+date.getSeconds()
    }
    else
    {
        document.getElementById("second").innerHTML = date.getSeconds() 
    }
}