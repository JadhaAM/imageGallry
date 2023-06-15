

    let fullImgBox = document.getElementById("fullImgBox");
    let fullImg = document.getElementById("fullImg");

    function openFullImg(pic) {

        fullImgBox.style.display = "flex";
        fullImg.src = pic

    }

    function closeFullImg() {
        fullImgBox.style.display = "none";
    }

    function full() {
        document.getElementById('img-gallary').style.width = "25%";
     
    }

    function twoFull() {
        document.getElementById('img-gallary').style.width = "50%";
        
    }

    function fourFull() {
        document.getElementById('img-gallary').style.width = "100%";
        
    }

