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
    console.log(data);
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
    ctx.filter = 'blur(5px)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0,  canvas.width, canvas.height);
    // context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
}
function filter(data){
    let fcanvas = document.getElementById('userImgcanvas');
    let userImg = document.getElementById('drag2').src;
    console.log(userImg);
    // console.log(data);
    // var image  = document.getElementById(data);
    var mainCanvas = document.createElement("userImgcanvas");
    var w = fcanvas.width;
    var h = fcanvas.height
    fcanvas.width  = 400;
    fcanvas.height = 500;
    var ctx = fcanvas.getContext("2d");
    ctx.filter = 'blur(5px)';
    ctx.fillRect(0, 0, fcanvas.width, fcanvas.height);
    ctx.drawImage(userImg, 0, 0,  fcanvas.width, fcanvas.height);
    // })
}
function saveImage() {
    var image = document.getElementById("userImgcanvas");
    image.toBlob(function (blob) {
    var zip = new JSZip();
    zip.file("Hello.txt", "Hello World\n");
    var img = zip.folder("images");
    img.file('ex', blob, {base64: true});
    zip.generateAsync({type:"blob"})
    .then(function(content) {
        // see FileSaver.js
        saveAs(content, "example.zip");
    });
    })
}

