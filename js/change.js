$(window).scroll(function () {
   //начинай идти после 1920пикселей
   if ($(window).scrollTop() > 1980) {
      let a = 0;
      let b = 0;
      let c = 0;
      let d = 0;
      setInterval(function () {
         //Макс чисел
         if (a <= 1023 && b <= 31525 && c <= 194 && d <= 582) {
            document.querySelector('._anim_counter1').innerHTML = a;
            document.querySelector('._anim_counter2').innerHTML = b;
            document.querySelector('._anim_counter3').innerHTML = c;
            document.querySelector('._anim_counter4').innerHTML = d;
            a += 11;
            b += 325;
            c += 2;
            d += 6;
         }
      }, 30);//скорость
   } else {
      document.querySelector('._anim_counter1').innerHTML = 0;
   }
});

/*2021-2022*/

//изменение контента
function year2021() {
   document.querySelector('.change')
   document.getElementById('title2020_2021').innerHTML = 2021;
   document.getElementById('word2020_2021').innerHTML = "In 2021, the number of our employees exceeded 160 for the first time and we sold 1,200 cars. 2021 is considered the most profitable for us (17% more than in 2020), but we are confident that 2022 will be more profitable.";
}
//изменение контента
function year2020() {
   document.querySelector('.change')
   document.getElementById('title2020_2021').innerHTML = 2020;
   document.getElementById('word2020_2021').innerHTML = "   2020 is the year of the company's foundation. This is the most important moment for our company, because that year the whole world learned about our company. Although there were few buyers in 2020, they were all satisfied.";
}
