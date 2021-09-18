import Container from 'react-bootstrap/Container';
import FigureRow from './FigureRow';
import OptionsRow from './OptionsRow';


export default function PlotExplorerRow({data}){

  return(
    <Container>
      <OptionsRow />
      <FigureRow />
    </Container>
  )
}