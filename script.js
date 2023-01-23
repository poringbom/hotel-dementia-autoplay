const tools = "<div style='position: fixed;top: 0;right: 10%; opacity: 0.7;'>"
                 + "times <input value='1' width='10' id='times' type='number' style='width: 100px;height: 20px;text-align: center;'/> &nbsp;&nbsp;"
                 + "delay <input width='10' id='delay' value='100' type='number' style='width: 100px;height: 20px;text-align: center;'/>&nbsp;&nbsp;"
                 +    "<button onClick='autoPrev()' style='scale: 0.9'>⏮️</button>"
                 +    "<button onClick='stopAutoClick()' style='scale: 0.9'>⏹️</button>"
                 +    "<button onClick='autoNext()' style='scale: 0.9'>⏭️</button>"
              + "</div>";
const div = document.createElement('div');
div.innerHTML = tools;
document.body.append(div);

var timer = undefined;
function autoNext() {
   const  {times, delay} = getData();
   autoClick(nextButton, times, delay);
}

function autoPrev() {
   const  {times, delay} = getData();
   autoClick(prevButton, times, delay);
}

function getData() {
    const times = document.getElementById("times").value;
    const delay = document.getElementById("delay").value;
    return {times, delay};
}

function autoClick(clazz, times, delay=100, callback) {
    var count = 1;
    timer = setInterval(() => {
        const el = document.getElementsByClassName(clazz)[0];
        if (el) {
            el.click();
            console.log("click : " + clazz +" : "+ count);
            callback.call();
            if (count >= times) {
                clearInterval(timer);
            }
            count++;
        }
    }, delay);
}

function stopAutoClick() {
     clearInterval(timer);
}