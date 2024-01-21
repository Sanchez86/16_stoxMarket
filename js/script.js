/*кнопка на верх*/

var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
var delay = 1000; // Задержка прокрутки
$(document).ready(function () {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
        /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
        /* Плавная прокрутка наверх */
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });
	
	 var top_show2 = 1370;
	 $(window).scroll(function (){
		 if ($(this).scrollTop() > top_show2) $('.lightning').css('height','603px');
	 });
	 
	 
	 
	  $(".wrap").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top - 147;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').stop().animate({ scrollTop: top }, 1000);
    });

	var top_show3 = 2600;
	 $(window).scroll(function (){
		 if ($(this).scrollTop() > top_show3) $('.arrowDown').css('height','176px');
	 });
	 
	 var top_show4 = 3430;
	 $(window).scroll(function (){
		 if ($(this).scrollTop() > top_show4) $('.arrowGain').css('width','1594px');
	 });
  
	 
});

/* конец кнопка на верх*/


/*выподающее меню*/
$(document).ready(function() {
 $(".js-example-diacritics").select2();
});
/*конец выподающее меню*/













