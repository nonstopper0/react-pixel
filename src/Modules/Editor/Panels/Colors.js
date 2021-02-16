import { CompactPicker } from 'react-color'

export default function Colors(props) {
    
    const handleChangeComplete = (color) => {
        console.log(color.hex)
        props.changeColor(color.hex)
    }
    return (
        <CompactPicker 
        disableAlpha={true}
        onChangeComplete={handleChangeComplete}
        />
    )
}