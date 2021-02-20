export function Undo(data) {

    for (let i = 0; i < data.length; i++) {
        let toErase = document.getElementById(`[${data[i][0][0]}, ${data[i][0][1]}]`)
        toErase.style.backgroundColor = data[i][1]
    }

}
