// polling system Demo

const optionz = document.querySelectorAll("label");
for (let i = 0; i < optionz.length; i++) {
  optionz[i].addEventListener("click", () => {
    optionz[i].addEventListener("click", () => {
      for (let k = 0; k < optionz.length; k++) {
        if (optionz[k].classList.contains("selected")) {
          optionz[k].classList.remove("selected");
        }
      }
      optionz[i].classList.add("selected");
      for (let j = 0; j < optionz.length; j++) {
        optionz[j].classList.add("selectedAll");
      }
    });
  });
}
