import { GithubPicker } from 'react-color'

export default function Colors(props) {

    return (
        <GithubPicker 
        disableAlpha={true}
        onChangeComplete={(color)=> props.changeColor(color.hex, true)}
        colors={[
            "FFFFFF", "#E8E8E8", "#E0E0E0", "#C0C0C0", "#888888", "#585858", "#202020", "#000000", 
            '#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', 
            '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB'
        ]}
        />
    )
}