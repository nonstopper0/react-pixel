import Pixel from './Pixel'
import './Row.scss'

export default function Row(props) {
    const { currentColor, dimension, zoom, rid } = props;

    let pixels = []
  
    for (let i = 0; i < dimension; i++) {
      pixels.push(<Pixel key={i} rid={rid} pid={i} zoom={zoom} dimension={dimension} currentColor={currentColor} />)
    }
  
    return (
        <div className="row">{pixels}</div>
    )
}