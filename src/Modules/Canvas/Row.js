import Pixel from './Pixel'
import './Row.scss'

export default function Row(props) {
    const { currentColor, dimension } = props;

    let pixels = []
  
    for (let i = 0; i < dimension; i++) {
      pixels.push(<Pixel key={i} dimension={dimension} currentColor={currentColor} />)
    }
  
    return (
        <div className="row">{pixels}</div>
    )
}