const numbers = [1, 2, 3];
console.log(numbers);
// numbers = [2];  // Diziyi başka bir diziyle yer değiştiremeyiz;
numbers[3] = 5; //Ancak elemanını değiştirebiliriz.
console.log(numbers);

// const isim = 'Ayşe';
// isim = 'Begüm';
// console.log(isim);

let isim = 'Ayşe';
isim = 'Begüm';
console.log(isim);

// FONKSİYON VE PARAMETRE

function addNumbers(a, b) {
  return a + b;
}
let result = addNumbers(5, 3);
console.log(result);

function hello(name = 'Nihat') {
  return 'Merhaba, ' + name + '!';
}
let welcome = hello();
let hosgeldin = hello('Begüm');
console.log(welcome);
console.log(hosgeldin);

// FORMOBJECT

// FormData: HTML formundaki verileri key-value çiftleri olarak toplar.
// Object.fromEntries: Bir iterable'dan bir nesne oluşturur.

const myForm = document.querySelector('#form-inputs');

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const formObject = Object.fromEntries(formData); //formDatayı alıp bir nesneye çevirir.

  for (const [key, value] of formData) {
    console.log(`${key}: ${value}`);
  }
  console.log(formObject);
});

//REFERANS VERİ TİPLERİ - DEĞER VERİ TİPLERİ

// Değer Tipleri: Doğrudan değeri saklar. Bir değişkenin değerini değiştirmek, diğer değişkenleri etkilemez.
// Referans Tipleri: Bellekteki adresi saklar. Bir değişkenin içeriğini değiştirmek, aynı referansı paylaşan diğer değişkenleri etkiler.
//Değişken, doğrudan değeri değil, değerin bulunduğu bellek adresini içerir. JavaScript'te nesneler (objects), diziler (arrays) ve fonksiyonlar (functions) referans tipleridir.

//Değer Tip Örneği
let a = 5;
let b = a; // b, a'nın değerinin bir kopyasını alır

b = 10; // b'nin değerini değiştiririz

console.log(a); // 5 (a etkilenmez)
console.log(b); // 10

//Referans Tip Örneği

let dizi1 = [1, 2, 3];
let dizi2 = dizi1;

dizi2[0] = 17;
dizi2.push(4);

console.log('dizi1 :' + ' ' + dizi1);
console.log('dizi2 :' + ' ' + dizi2);

let Obj1 = { name: 'Begüm' };
let Obj2 = Obj1;
Obj2.name = 'Ahmet';
console.log(Obj1);


