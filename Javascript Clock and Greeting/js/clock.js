function request(){
    let fullName = prompt("Lütfen isim ve soyisim bilgilerinizi giriniz!");
    let myName = document.querySelector("#myName");
    myName.innerHTML = fullName;
}    

request();


function showTime(){
    const clockDiv = document.querySelector("#myClock");
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const daysOfWeek = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const dayOfWeek = daysOfWeek[now.getDay()];

    const time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    clockDiv.innerText = time + " " + dayOfWeek;

    setTimeout(showTime, 1000);
}

window.onload = showTime;
