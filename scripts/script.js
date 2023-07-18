document.addEventListener("DOMContentLoaded", function () {
    var noticeList = notice().filter(x => x.firstPage == true && x.firstPageLeft == true);
    var noticeListRight = notice().filter(x => x.firstPage == true && x.firstPageRight == true);
    var smallNotice = notice().filter(x => x.secondPageLeft == true && x.smallBoxesRight == false);
    var smallRight = notice().filter(x => x.smallBoxesRight == true && x.secondPageLeft == false);
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
        item += ` <h4>${n.label}</h4><h2>${n.title}</h2><p>${n.subtitle}</p></div>`
        return item;
    })

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
    })
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
                            </div><h4>${n.label}</h4><h2>${n.title}</h2><h3>${n.underTille}</h3><h5>${n.subtitle}</h5><span>${n.time}</span><hr></hr></div>`
        return itemTopLeft;
    })
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
        }itemTopRight += `
                </div><h5>${n.subtitle}</h5><span>${n.underTille}</span><hr></hr></div>`
        return itemTopRight;
    })
    elementSecond.querySelector(".box .right").innerHTML = resultTopRight;

});