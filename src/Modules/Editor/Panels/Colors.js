import { CompactPicker } from 'react-color'

export default function Colors(props) {

    return (
        <CompactPicker 
        disableAlpha={true}
        onChangeComplete={(color)=> props.changeColor(color.hex)}
        />
    )
}