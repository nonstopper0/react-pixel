import { CompactPicker } from 'react-color'

export default function Colors(props) {
    
    const handleChangeComplete = (color) => {
        props.changeColor(color.hex)
    }
    return (
        <CompactPicker 
        disableAlpha={true}
        onChangeComplete={handleChangeComplete}
        />
    )
}