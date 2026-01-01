# 🧠 JavaScript Day 17 — Events (Hodisalar)

Bu darsda men JavaScript’da **Events (hodisalar)** bilan ishlashni o‘rgandim.
Amaliy misollar orqali foydalanuvchi harakatlariga (click, input, submit va boshqalar) javob beradigan interaktiv sahifalar yaratishni mustahkamlab oldim.

---

## 📚 O‘rganganlarim / What I learned

### Event nima?

Event — bu foydalanuvchi yoki brauzer tomonidan sodir bo‘ladigan **har qanday hodisa**.
Masalan: tugmani bosish, matn kiritish, sahifa yuklanishi va hokazo.

---

### addEventListener()

`addEventListener()` — elementga hodisa qo‘shish uchun ishlatiladi.

```
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  console.log('Button bosildi');
});
```

---

### click hodisasi

```
const box = document.querySelector('.box');

box.addEventListener('click', () => {
  box.classList.toggle('active');
});
```

---

### input hodisasi

```
const input = document.querySelector('#name');
const output = document.querySelector('#output');

input.addEventListener('input', (e) => {
  output.textContent = e.target.value;
});
```

---

### submit hodisasi

```
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Form yuborildi');
});
```

---

### Event object (e)

Event object orqali hodisa haqida ma’lumot olish mumkin.

```
document.addEventListener('keydown', (e) => {
  console.log(e.key);
});
```

---

## 💻 Kod namunasi / Example code

```
const btn = document.querySelector('#btn');
const text = document.querySelector('#text');

btn.addEventListener('click', () => {
  text.textContent = 'Event ishladi!';
  text.style.color = 'blue';
});
```

---

## 🧩 Qisqacha nazariya / Short Theory

* Event → foydalanuvchi harakati
* `addEventListener()` → hodisa qo‘shadi
* `click`, `input`, `submit` → eng ko‘p ishlatiladigan event’lar
* `e.preventDefault()` → default harakatni to‘xtatadi
* `e.target` → event bo‘lgan element

---

## 🎯 Maqsad / Goal

Ushbu darsning maqsadi — JavaScript’da **foydalanuvchi bilan interaktiv ishlash**ni o‘rganish.

Buning yordamida:

* Tugmalar va formalar bilan ishlash
* Real-time input’larni ushlash
* Dinamik UI yaratish
  mumkin bo‘ladi.

---

## 💬 Muallif / Author

✍️ Shokhjahon Qalandarov
📅 Dars: 17-kun — Events (Hodisalar)
