<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="assets/editor.css">
    <script src="assets/editor.js" ></script>
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="/> -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/cropperjs@1.5.9/dist/cropper.min.css" />
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.6.0/jszip.min.js" integrity="sha512-uVSVjE7zYsGz4ag0HEzfugJ78oHCI1KhdkivjQro8ABL/PRiEO4ROwvrolYAcZnky0Fl/baWKYilQfWvESliRA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <title>Image || Editor</title>
</head>
<body>
    <div class="wrapper">
        <div class="menuBar">
            <div class="menubar-icon">
                <div class="btns icon icon1" onclick="show('1')">
                    <i class="las la-image "></i>
                    <span class="icon-text">Images</span>
                </div>
                <div class="btns icon icon2" onclick="show('2')">
                    <i class="las la-cloud-upload-alt  "></i>
                    <span class="icon-text">Upload</span>
                </div>
            </div>
        </div>
        <div class="sideBar">
            <div class="min-content con con1">
                <div onclick="filter('opacity')" class="box" style="border:1px solid green; width:100px; height:100px; background:greenyellow">
                    opacity(50%)
                </div>
                <!-- <button onclick="saveImage()">Download Img</button> -->
            </div>
            <div class="min-content con con2">
                <label for="uploadFile" class="img-upload-btn">Upload Image</label>
                <!-- image drag code -->
                <form action="" method="post" id="done" enctype="multipart/form-data">
                <div class="uploadOuter">
                    <span class="dragBox">
                        Darg and Drop image here
                        <input type="file" accept="image/*" oninput="Img(this, this)"  onChange="dragNdrop(event)" ondragover="drag()" ondrop="drop()"   name="userImg" id="uploadFile">
                    </span>
                </div>
                </form>
                <div id="preview"></div>
            </div>
            <div class="min-content con con3" style="background-color: greenyellow;">
            </div>
        </div>
        <div class="arrow-btn hide">
            <span class="setArrow" onclick="show('0')">
                >
            </span>
        </div>
        <div class="editor">
            <div class="top-bar">
                <i class="las la-images"></i>
                Editor
            </div>
            <div class="content">
                <div ondrop="drop(event)" ondragover="allowDrop(event)" class="main-canvas" id="mainCanvas"></div>
            </div> 
            <div class="footer">
                actions
            </div>
        </div>
    </div>
    <script>
        function Img(input, id) {
            // console.log('ok');
            // if (input.files && input.files[0]) {
            //     var reader = new FileReader();
            //     reader.onload = function (e) {
            //         $(id).attr('src', e.target.result).width(300)
            //     };

            //     reader.readAsDataURL(input.files[0]);
            // }
            document.querySelector('#file').addEventListener('change', (e) => {
                try {
                    readFile(e.target.files[0]);
                } catch (e) {
                    console.error(e.message);
                }
            });
            // $('#done').on('submit', function(e){
            //     e.preventDefault();
            //     var formData = new FormData(this);
            //     $.ajax({
            //         url: '<?php
            //  echo base_url().'<?php echo base_url() ?>/save-img"?>',
                    // type: 'POST',
                    // processData: false,
                    // contentType: false,
                    // cache: false,
                    // data: {
                    //     form:formData
                    // },
                    // success: function(data){
                    //     console.log(data);
                    // }
                // })
            // })
        // }


        // console.clear();
        
        // import Cropper from "https://cdn.skypack.dev/cropperjs@1.5.9";
        // console.log(Cropper);
        // add your code here!
        // see https://www.skypack.dev/view/cropperjs for README
        // const image = document.getElementById("im");
        // console.log(image);
        // // Cropper.setDefaults(options);
        // const cropper = new Cropper(image, {
        // aspectRatio: 16 / 9,
        // crop(event) {
        //     console.log(event.detail.x);
        //     console.log(event.detail.y);
        //     console.log(event.detail.width);
        //     console.log(event.detail.height);
        //     console.log(event.detail.rotate);
        //     console.log(event.detail.scaleX);
        //     console.log(event.detail.scaleY);
        // }
        // });

    </script>
</body>

</html>