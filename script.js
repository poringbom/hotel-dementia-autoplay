
document.autoplay = document.getElementById('auto-play');

if (!document.autoplay ) {

    /* 
        autoNext vairable is minifier of raw code in script.js.bk for inline scripts
        It fixed workaround 'Content Security Policy blocks inline execution of scripts and stylesheets'
        PS. generate from https://www.toptal.com/developers/javascript-minifier
    */
    const autoNext = `document.timer=1,document.isNext=!1,document.isPrev=!1,document.getData=()=>{let e=document.getElementById("times").value,t=document.getElementById("delay").value;return{times:e,delay:t}},document.autoClick=(e,t,l=100,o=()=>{})=>{var $=1;document.timer=setInterval(()=>{let l=document.getElementsByClassName(e)[0];l&&(l.click(),console.log("click : "+e+" : "+$),o.call(),$>=t&&stopAutoClick(),$++)},l)},document.setColor=(e,t)=>{let l=document.getElementById(e);l&&(l.style.backgroundColor=t)},document.autoNext=()=>{if(document.isNext)document.setColor("next","#0c030300");else{document.setColor("next","");let{times:e,delay:t}=getData();autoClick("button-next",e,t),document.isNext=!0}},document.autoPrev=()=>{if(document.isPrev)document.setColor("prev","#0c030300");else{document.setColor("prev","");let{times:e,delay:t}=getData();autoClick("button-previous",e,t),document.isPrev=!0}},document.stopAutoClick=()=>{clearInterval(document.timer),document.isNext=!1,document.isPrev=!1,document.setColor("next","#0c030300"),document.setColor("prev","#0c030300")};`;

    const tools = `<div style='position: fixed;top: 0;right: 10%; opacity: 0.7;'>
                    times <input value='1' min='1' width='10' id='times' type='number' style='width: 100px;height: 20px;text-align: center;'/> &nbsp;&nbsp;
                    delay <input width='10' min='0' id='delay' value='100' type='number' style='width: 100px;height: 20px;text-align: center;'/>&nbsp;&nbsp;
                    <button id='prev' onClick='document.autoPrev()' style='background-color: #0c030300;border: 0px;'>⏮️</button>
                    <button id='stop' onClick='document.stopAutoClick()' style='background-color: #0c030300;border: 0px'>⏹️</button>
                    <button id='next' onClick='document.autoNext()' style='background-color: #0c030300;border: 0px'>⏭️</button>
                    <button id='init' onClick='${autoNext}' style='display: none'></button>
                </div>`;
    const div = document.createElement('div');
    div.id = 'auto-play'
    div.innerHTML = tools;
    document.body.append(div);

    // inject init script with element force click
    document.getElementById('init').click();
} else {
    document.getElementById('stop').click();
    document.autoplay.remove();
}