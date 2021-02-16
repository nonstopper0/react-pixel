import { SketchPicker } from 'react-color'

export default function Colors() {
    
    const handleChange = (color, event) => {
        console.log(color, event)
    }
    return (
        <SketchPicker 
        disableAlpha={true}
        onChange={() => handleChange}
        />
    )
}