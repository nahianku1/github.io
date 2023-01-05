let bar = document.querySelector(".bar");
let mobilemenu = document.querySelector(".mobilemenu");
let heroelements = document.querySelectorAll(".intersect");
let skillmeter = document.querySelectorAll(".outer");

bar.addEventListener("click", (e) => {
  mobilemenu.classList.toggle("show");
  if (mobilemenu.classList.contains("show")) {
    bar.querySelector("i").classList.replace("fa-bars", "fa-xmark");
  } else {
    bar.querySelector("i").classList.replace("fa-xmark", "fa-bars");
  }
  mobilemenu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      mobilemenu.classList.remove("show");
      bar.querySelector("i").classList.replace("fa-xmark", "fa-bars");
    }
  });
});

let heroobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("hero-show", entry.isIntersecting);
  });
});

heroelements.forEach((heroelement) => {
  heroobserver.observe(heroelement);
});

  skillmeter.forEach((entry)=>{
       let text=entry.querySelector('.inner').dataset.num

        entry.style.backgroundImage = `conic-gradient(#65cdec ${text}%, transparent 0%)`
        entry.querySelector('.inner').innerText=`${text}%`

  })

