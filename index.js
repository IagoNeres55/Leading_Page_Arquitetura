
var images = ["./imagens/fundo_sala.svg", "./imagens/engenheiros.jpg", "./imagens/obj_arquiteto.jpg"]
var index = 0

function start() {
    setInterval(() => {
        var img01 = window.document.getElementById("img01")
        console.log(images[index])

        img01.setAttribute("src", images[index])

        if (index === 2) {
            index = 0
        } else {
            index++
        }

    }, 2000)

}

start()