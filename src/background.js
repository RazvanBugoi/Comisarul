let homepage = ['reclama_homepage_middle', 'adocean_728', 'reclama_homepage_lower'];
  
let home = homepage.map((element) => {
  if (element) return document.getElementById(element);
});
home.map((element) => {
  if(element) {
    element.remove()
  }
});
