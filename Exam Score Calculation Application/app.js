let turkishCorrect = 0;
let turkishWrong = 0;

let mathCorrect = 0;
let mathWrong = 0;

let socialCorrect = 0;
let socialWrong = 0;

let scienceCorrect = 0;
let scienceWrong = 0;

let schoolScore = 0;

let total = 0;

let message =
  "TYT Sınav Puanı Hesaplama Uygulamasına Hoş Geldiniz!" +
  "\r\n" +
  "1 - Puan Hesapla" +
  "\r\n" +
  "2 - Çıkış Yap";

let choice = prompt(message);
switch (choice) {
  case "1":
    schoolScore = Number(prompt("Okul puanınızı giriniz: "));
    if (schoolScore >= 0 && schoolScore <= 60) {
      turkishCorrect = Number(
        prompt("Türkçe dersindeki doğru sayınızı giriniz: ")
      );
      turkishWrong = Number(
        prompt("Türkçe dersindeki yanlış sayınızı giriniz: ")
      );
      mathCorrect = Number(
        prompt("Matematik dersindeki doğru sayınızı giriniz: ")
      );
      mathWrong = Number(
        prompt("Matematik dersindeki yanlış sayınızı giriniz: ")
      );
      socialCorrect = Number(
        prompt("Sosyal Bilgiler dersindeki doğru sayınızı giriniz: ")
      );
      socialWrong = Number(
        prompt("Sosyal Bilgiler dersindeki yanlış sayınızı giriniz: ")
      );
      scienceCorrect = Number(
        prompt("Fen Bilgisi dersindeki doğru sayınızı giriniz: ")
      );
      scienceWrong = Number(
        prompt("Fen Bilgisi dersindeki yanlış sayınızı giriniz: ")
      );

      let corrects =
        turkishCorrect + mathCorrect + socialCorrect + scienceCorrect;
      let wrongs = turkishWrong + mathWrong + socialWrong + scienceWrong;

      let remainingCorrect = corrects - (wrongs + wrongs / 4);
      total = remainingCorrect * 4 + 100 + schoolScore; // 100 puan OSYM verdiğini varsaydık.

      alert(`TYT Puanınız: ${total}`);
    } else {
      prompt("Lütfen 0 ile 60 arasında bir okul puanı giriniz!");
    }
    break;
  case "2":
    alert("Uygulamadan çıkış yaptınız!");
    break;
  default:
    prompt("Lütfen 1 veya 2 sayılarından birini giriniz!");
}
