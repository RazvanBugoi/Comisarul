let articles = ['adocean_728', 'reclama_right', 'reclama_articol_start', "vi-stories-top-div",
'pa_1x1_psbk_1590090626319', 'taboola-alternating-below-article', 'reclama_articol_final'];

let page = articles.map((element) => {
    if (element) return document.getElementById(element);
  });
  page.map((element) => {
    if(element) {
      element.remove()
    }
  })

let middleAdds = document.getElementById('corpArticol').getElementsByTagName('div');
  // for(let i=0; i<middleAdds.length; i++) {
  //   middlesAdds[i].innerHTML = '';
  // }
middleAdds.item(0).remove();



