export function UndoRedo(data, undo) {

    for (let i = 0; i < data.length; i++) {
        let toErase = document.getElementById(`[${data[i][0][0]}, ${data[i][0][1]}]`)
        if (undo === 'undo') {
            toErase.style.backgroundColor = data[i][1]
        } else {
            toErase.style.backgroundColor = data[i][2]            
        }
    }

}
