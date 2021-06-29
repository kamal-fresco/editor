var globalSidebarId = -1

function show(id) {
    if(id == 0){
        var d = document.getElementsByClassName('con')
        for (let i = 0; i < d.length; i++) {
            d[i].classList.remove('active')
            document.getElementsByClassName('setArrow')[0].innerText = '>'
        }
        globalSidebarId = -1
        document.getElementsByClassName('sideBar')[0].classList.add('hideSlowly')
        setTimeout(function () {
            document.getElementsByClassName('sideBar')[0].classList.remove('hideSlowly')
            document.getElementsByClassName('sideBar')[0].classList.remove('active')
        }, 0)
        document.getElementsByClassName('arrow-btn')[0].classList.add('hide')
        return
    }
    document.getElementsByClassName('arrow-btn')[0].classList.remove('hide')

    document.getElementsByClassName('sideBar')[0].classList.add('active')
    document.getElementsByClassName('setArrow')[0].innerText = '<'
    // alert(id)
    var d = document.getElementsByClassName('con')

    var icons = document.getElementsByClassName('icon')
    for (let i = 0; i < icons.length; i++) {
        icons[i].classList.remove('active')
    }
    document.getElementsByClassName('icon' + id)[0].classList.add('active')

    for (let i = 0; i < d.length; i++) {
        d[i].classList.remove('active')
    }
    document.getElementsByClassName('con' + id)[0].classList.add('active')
    if (id == globalSidebarId) {
        document.getElementsByClassName('arrow-btn')[0].classList.add('hide')
        var d = document.getElementsByClassName('con')
        for (let i = 0; i < d.length; i++) {
            d[i].classList.remove('active')
            document.getElementsByClassName('setArrow')[0].innerText = '>'
        }
        globalSidebarId = -1
        document.getElementsByClassName('sideBar')[0].classList.add('hideSlowly')
        setTimeout(function () {
            document.getElementsByClassName('sideBar')[0].classList.remove('hideSlowly')
            document.getElementsByClassName('sideBar')[0].classList.remove('active')
        }, 0)
    } else {
        globalSidebarId = id
    }
}
//side bar image drag image code
var id = 1;
function dragNdrop(event) {
    id += 1;
    var fileName = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("preview");
    var previewImg = document.createElement("img");
    previewImg.setAttribute("src", fileName);
    previewImg.setAttribute("id", "drag" + id);
    previewImg.setAttribute("draggable", true);
    previewImg.setAttribute("ondrop", "drop(event)");
    previewImg.setAttribute("ondragover", "allowDrop(evemt)");
    previewImg.setAttribute("ondragstart", "drag(event)");
    preview.innerHTML = "";
    preview.appendChild(previewImg);
}
function drag() {
    document.getElementById('uploadFile').parentNode.className = 'draging dragBox';
}
function drop() {
    document.getElementById('uploadFile').parentNode.className = 'dragBox';
}
// image to canvas drag event
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var image  = document.getElementById(data);
    var canvas = document.createElement("canvas");
    canvas.setAttribute("id", "userImgcanvas");
    var mainCanvas = document.createElement("mainCanvas");
    // mainCanvas.appendChild(canvas);
    ev.target.appendChild(canvas);
    var w = canvas.width;
    var h = canvas.height
    canvas.width  = 400;
    canvas.height = 500;
    var ctx = canvas.getContext("2d");
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0,  canvas.width, canvas.height);
}
function filter(data){
    var fcanvas = document.getElementById('userImgcanvas');
    var userImg = document.getElementById('drag2');
    var w = fcanvas.width;
    var h = fcanvas.height
    if(data == 'blur'){
        let Ctx = fcanvas.getContext("2d");
        Ctx.filter = 'blur(5px)';
        Ctx.fillRect(0, 0, fcanvas.width, fcanvas.height);
        Ctx.drawImage(userImg, 0, 0, fcanvas.width, fcanvas.height);
    }
    if(data == 'scale'){
        let Ctx = fcanvas.getContext("2d");
        Ctx.filter = 'grayscale(100%)';
        Ctx.fillRect(0, 0, fcanvas.width, fcanvas.height);
        Ctx.drawImage(userImg, 0, 0, fcanvas.width, fcanvas.height);
    }
    if(data == 'contrast'){
        let Ctx = fcanvas.getContext("2d");
        Ctx.filter = 'contrast(200%)';
        Ctx.fillRect(0, 0, fcanvas.width, fcanvas.height);
        Ctx.drawImage(userImg, 0, 0, fcanvas.width, fcanvas.height);
    }
    if(data == 'saturate'){
        let Ctx = fcanvas.getContext("2d");
        Ctx.filter = 'saturate(4)';
        Ctx.fillRect(0, 0, fcanvas.width, fcanvas.height);
        Ctx.drawImage(userImg, 0, 0, fcanvas.width, fcanvas.height);
    }
}


