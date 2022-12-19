let menuBtn = document.querySelector('.page-header__menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
})



// функция возвращает cookie с именем name, если есть, если нет, то undefined    
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
  "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
let cookiecook = getCookie("cookiecook"),
cookiewin = document.getElementsByClassName('cookie__notice')[0];    
// проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
if (cookiecook != "no") {
  // показываем    
  cookiewin.style.display="block"; 
  // закрываем по клику
  document.getElementById("cookie__close").addEventListener("click", function(){
      cookiewin.style.display="none";    
      // записываем cookie на 1 день, с которой мы не показываем окно
      let date = new Date;
      date.setDate(date.getDate() + 1);    
      document.cookie = "cookiecook=no; path=/; expires=" + date.toUTCString();               
  });
}