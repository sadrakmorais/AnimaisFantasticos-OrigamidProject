function initTabNav() {
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
}

initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activclass = "ativo";
  if (accordionList.length) {
    accordionList[0].classList.add(activclass);
    accordionList[0].nextElementSibling.classList.add(activclass);

    function activeAccordion() {
      this.classList.toggle(activclass);
      this.nextElementSibling.classList.toggle(activclass);
    }

    accordionList.forEach((e) => {
      e.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

function initScrollSuave() {
  const linksinternos = document.querySelectorAll('.js-menu a[href^="#"]');

  if (linksinternos.length) {
    function scrollToSection(e) {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    linksinternos.forEach((e) => {
      e.addEventListener("click", scrollToSection);
    });
  }
}

initScrollSuave();

function InitAnimaScroll() {
  const sectionScroll = document.querySelectorAll(".js-scroll");
  const metadetela = window.innerHeight * 0.6;

  if (sectionScroll.length) {
    function animaScroll() {
      sectionScroll.forEach((e) => {
        const sectiontop = e.getBoundingClientRect().top;
        const sectionaparece = sectiontop - metadetela < 0;
        if (sectionaparece) {
          e.classList.add("ativo");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}

InitAnimaScroll();
