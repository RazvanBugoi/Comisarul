  let articles = ['reclama_right', 'reclama_articol_start', 'taboola-alternating-below-article', 'reclama_articol_final'];
  let homepage = ['reclama_homepage_middle', 'adocean_728', 'reclama_homepage_lower'];
  let home = homepage.map((element) => {
    if (element) return document.getElementById(element);
  });
  home.map((element) => element.hidden = true);

  let page = articles.map((element) => {
    if (element) return document.getElementById(element);
  });
  articles.map((element) => element.hidden = true);
