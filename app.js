 
setInterval(function ()
{
    var para = document.querySelector('.time');
    const MinHand = document.querySelector('.minute');
    const SecHand = document.querySelector('.sec');
    const HourHand = document.querySelector('.hour');
    let time = new Date();

    let hor = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    let h = (30*hor-90);
    // console.log(h);
    HourHand.style.transform = `rotate(${h}deg)`;

     hor = checkHour(hor);
     min = checkMS(min);
     sec = checkMS(sec);

    para.innerHTML = hor +":"+min+":"+sec;

    let s = 6*sec -90;
    let m =6*min -90;
    // console.log(m);
    SecHand.style.transform = `rotate(${m}deg)`;
    MinHand.style.transform = `rotate(${s}deg)`;

},500);

function checkMS(ch)
{
    let val;
    if(ch <10)
    {
        val = "0"+ch;
        return val;
    }
    else
    {
        return ch;
    }
}

function checkHour(hor)
{
    let val;
    let count =0;

    if(hor <10)
    {
        val ="0"+hor
        return val;
    }
    else
    {
        for(let i = 13 ; i <= hor ; i++)
        {
             count++;
        }
        if(count<10)
        {
            return "0"+count;
        }
        else
        {
        return count;
        }
    }
}

