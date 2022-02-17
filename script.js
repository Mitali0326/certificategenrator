const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const nameInput = document.getElementById('name')
const contestInput = document.getElementById('contest')
const positionInput = document.getElementById('position')
const dateInput = document.getElementById('date')
const downloadBtn = document.getElementById('download-btn')

const image = new Image()
image.src = 'certificate.jpg'
image.onload = function() {
    canvas.height = image.height
    canvas.width = image.width
    drawImage()
}

function drawImage() {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
    ctx.font = '35px monotype corsiva'
    ctx.fillStyle = 'black'

    ctx.fillText(nameInput.value, 370, 425)

    ctx.fillText(contestInput.value, 440, 510)

    ctx.fillText(positionInput.value, 700, 470)

    ctx.fillText(dateInput.value, 369, 648)
}

function increase() {
    var value = document.getElementById("value").value;
    // var name = document.getElementById("name");
    // nameInput.style.marginLeft = value + 'px';
    ctx.clearStyle = "white";
    ctx.clearRect(370, 385, 850, 50);
    ctx.font = "50px monotype corsiva"
    ctx.fillText(nameInput.value, [value], 420);
}

// nameInput.addEventListener('input', function () {
//     drawImage()
// })

// contestInput.addEventListener('input', function () {
//     drawImage()
// })

// positionInput.addEventListener('input', function () {
//     drawImage()
// })

// dateInput.addEventListener('input', function () {
//     drawImage()
// })

downloadBtn.addEventListener('click', function() {
    downloadBtn.href = canvas.toDataURL('image/jpg')
    downloadBtn.download = 'Certificate - ' + nameInput.value
})

window.onload = function() {
    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("canvas");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 0,
                filename: 'cerficate.pdf',
                image: {
                    type: 'jpeg',
                    quality: 1
                },
                html2canvas: {
                    scale: 1
                },
                jsPDF: {
                    unit: 'in',
                    format: 'a4',
                    orientation: 'landscape'
                }
            };
            html2pdf().from(invoice).set(opt).save();
        })
}


//   DRAG AND DROP 1
// function drag_start(event) {
//     var style = window.getComputedStyle(event.target, null);
//     event.dataTransfer.setData("text",
//     (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
// } 
// function drag_over(event) { 
//     event.preventDefault(); 
//     return false; 
// } 
// function drop(event) { 
//     var offset = event.dataTransfer.getData("text").split(','); 
//     var dm = document.getElementById('dragme');
//     dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
//     dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
//     ctx.font = "50px monotype corsiva"
//     event.preventDefault();
//     return false;
// } 
// var dm = document.getElementById('dragme'); 
// dm.addEventListener('dragstart',drag_start,false); 
// document.body.addEventListener('dragover',drag_over,false); 
// document.body.addEventListener('drop',drop,false); 





// DRAG AND DROP 2    
// var dragme = document.getElementsByClassName("dragme");
// for (var i = 0; i < dragme.length; i++) {
//     $(dragme[i]).draggable();
// }




// DRAG AND DROP 3
// end $(function(){});

//  function allowDrop(ev) {
//     ev.preventDefault();
//   }

//   function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
//   }

//   function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
//   }


function drag_start(event) {
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text/plain", (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY) + ',' + event.target.getAttribute('data-item'));
    ctx.fillText(text, 200, 300);
}

function drag_over(event) {
    event.preventDefault();
    return false;
}

function drop(event) {
    var offset = event.dataTransfer.getData("text/plain").split(',');
    var dm = document.getElementsByClassName('dragme');
    dm[parseInt(offset[2])].style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
    dm[parseInt(offset[2])].style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
    event.preventDefault();
    return false;
}

var dm = document.getElementsByClassName('dragme');
for (var i = 0; i < dm.length; i++) {
    dm[i].addEventListener('dragstart', drag_start, false);
    document.body.addEventListener('dragover', drag_over, false);
    document.body.addEventListener('drop', drop, false);
}