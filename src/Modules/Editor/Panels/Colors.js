import { CompactPicker } from 'react-color'

export default function Colors(props) {
    
    const handleChangeComplete = (color) => {
        props.changeColor(color.hex)
    }
    return (
        <CompactPicker 
        width={1000}
        disableAlpha={true}
        onChangeComplete={handleChangeComplete}
        />
    )
}