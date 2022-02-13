const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const nameInput = document.getElementById('name')
const contestInput = document.getElementById('contest')
const positionInput = document.getElementById('position')
const dateInput = document.getElementById('date')
const downloadBtn = document.getElementById('download-btn')

const image = new Image()
image.src = 'certificate.jpg'
image.onload = function (){
    canvas.height = image.height
    canvas.width = image.width
	drawImage()
}

function drawImage() {
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '35px monotype corsiva'
	ctx.fillStyle = 'black'

	ctx.fillText(nameInput.value, 370, 435)

    ctx.fillText(contestInput.value, 440, 510)

	ctx.fillText(positionInput.value, 700, 470)

    ctx.fillText(dateInput.value, 369, 648)

}

nameInput.addEventListener('input', function () {
	drawImage()
})

contestInput.addEventListener('input', function () {
	drawImage()
})

positionInput.addEventListener('input', function () {
	drawImage()
})

dateInput.addEventListener('input', function () {
	drawImage()
})

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/jpg')
	downloadBtn.download = 'Certificate - ' + nameInput.value
})

window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("canvas");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 0,
                filename: 'cerficate.pdf',
                image: { type: 'jpeg', quality: 1 },
                html2canvas: { scale: 1 },
                jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' }
            };
            html2pdf().from(invoice).set(opt).save();
        })
}
