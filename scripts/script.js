document.addEventListener("DOMContentLoaded", function () {
  var noticeList = notice().filter(
    (x) => x.firstPage == true && x.firstPageLeft == true
  );
  var noticeListRight = notice().filter(
    (x) => x.firstPage == true && x.firstPageRight == true
  );
  var smallNotice = notice().filter(
    (x) => x.secondPageLeft == true && x.smallBoxesRight == false
  );
  var smallRight = notice().filter(
    (x) => x.smallBoxesRight == true && x.secondPageLeft == false
  );
  var element = document.querySelector(".firstImages");
  var elementSecond = document.querySelector(".box");
  var item = "";
  var itemRight = "";
  var itemTopLeft = "";
  var itemTopRight = "";

  var result = noticeList.map((n) => {
    item += ` <div class="ola">
                    <div class="overlay">`;
    if (n.image != "") {
      item += `<img src="${n.image}" class="img-responsive">
                    </div>`;
    }
    item += ` <h4>${n.label}</h4><h2>${n.title}</h2><p>${n.subtitle}</p></div>`;
    return item;
  });

  element.querySelector(".left").innerHTML = result;

  var resultright = noticeListRight.map((n) => {
    itemRight = `
                <div class="ola2">
                    <div class="overlay">
                        <div class="fundo"></div>`;
    if (n.image != "") {
      itemRight += `<img src="${n.image}" class="img-responsive">`;
    }
    itemRight += `</div><h4>${n.label}</h4><h2>${n.title}</h2><p>${n.subtitle}</p></div>`;

    return itemRight;
  });
  element.querySelector(".right").innerHTML = resultright;

  var resultTop = smallNotice.map((n) => {
    itemTopLeft = `
                <div class="caixas">
                    <div class="overlay">
                        <div class="fundoo">
                        </div>
                        `;
    if (n.image != "") {
      itemTopLeft += `<img src="${n.image}" class="img-responsive small">`;
    }
    itemTopLeft += `
                    </div><h4>${n.label}</h4><h2>${n.title}</h2><h3>${n.underTille}</h3><h5>${n.subtitle}</h5><span>${n.time}</span><hr></hr></div>`;
    return itemTopLeft;
  });
  elementSecond.querySelector(".box .left").innerHTML = resultTop;

  var resultTopRight = smallRight.map((n) => {
    itemTopRight = `
                <div class="caixas2">
                    <div class="overlay">
                        <div class="fundoo">
                        </div> 
                        `;
    if (n.image != "") {
      itemTopRight += `<img src="${n.image}" class="img-responsive">`;
    }
    itemTopRight += `
                </div><h5>${n.title}</h5><span>${n.underTille}</span><hr></hr></div>`;
    return itemTopRight;
  });
  elementSecond.querySelector(".box .right").innerHTML = resultTopRight;
});

function expandInput() {
  document.getElementById("divBusca").classList.add("alteraCaixa");
}

function resetInput() {
  document.getElementById("divBusca").classList.remove("alteraCaixa");
}

//funcção para abrir menu
function abrirMenu() {
  document.getElementById("openMenu").classList.toggle("show");
}

//quando for sair do menu
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

document.getElementById("botao").onclick = function () {
  location.href =
    "https://login.globo.com/login/6870/connect-confirm?url=https%3A%2F%2Fid.globo.com%2Fauth%2Frealms%2Fglobo.com%2Flogin-actions%2Fauthenticate%3Fsession_code%3D4M6g97Sjc9cmqy2CfTQB69uXvdXHI0Z-WKjOo3m9qes%26execution%3Db5dd88dc-447e-468f-945e-e7c7de4883b7%26client_id%3Dbarra%2540apps.globoid%26tab_id%3DOtOYlsoJSeQ%26request-context%3DqSUOZ7&error=&request-context=qSUOZ7";
};

document.getElementById("txtBusca").addEventListener("keyup", abreMenu);

function abreMenu() {
  var input, filter;
  input = document.getElementById('txtBusca');
  filter = input.value.trim().toUpperCase(); //trim: remove  " "

  //apos 3 casas, ele inicia a busca
  if (filter.length >= 3) {
    var filtraNoticia = filtraNotice(filter);
    mostraNoticia(filtraNoticia);
  } else {document.querySelector(".menuNoticia").innerHTML = ""; //se não tiver texto, as noticias somem
  }
}

//função que executa o filtro
function filtraNotice(filter) {
  var mostraNoticia = notice().filter((x) => x.noticia == true);
  return mostraNoticia.filter((notice) => {
    var title = notice.title.toUpperCase();
    return title.includes(filter);
  });
}

function mostraNoticia(noticia) {
  var noticias = "";
  noticia.forEach((notice) => {
    noticias += `<div><h2 class="firstN">${notice.title}</h2></div>`;
  });

  //atualiza a classe assim que o filtro é executado
  document.querySelector(".menuNoticia").innerHTML = noticias;
}