import Pixel from './Pixel'
import './Row.scss'

export default function Row(props) {
    const { backgroundColor, dimension, zoom, rid, grid } = props;

    let pixels = []
  
    for (let i = 0; i < dimension; i++) {
      pixels.push(<Pixel key={i} rid={rid} pid={i} grid={grid} zoom={zoom} dimension={dimension} backgroundColor={backgroundColor} />)
    }
  
    return (
        <div className="row">{pixels}</div>
    )
}