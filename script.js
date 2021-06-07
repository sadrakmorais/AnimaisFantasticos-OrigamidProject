const tabmenu = document.querySelectorAll(".js-tabmenu li");
const tabcontent = document.querySelectorAll(".js-tabcontent section");
tabcontent[0].classList.add("ativo");

if (tabcontent.length && tabmenu.length) {
  function tabativa(index) {
    tabcontent.forEach((e) => {
      e.classList.remove("ativo");
    });
    tabcontent[index].classList.add("ativo");
  }

  tabmenu.forEach((e, index) => {
    e.addEventListener("click", () => {
      tabativa(index);
    });
  });
}
