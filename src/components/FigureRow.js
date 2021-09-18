import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';
import FigureCaption from 'react-bootstrap/FigureCaption';


export default function FigureRow({data}){

  return(
      <Row>
        <Figure>
          <Figure.Image
            alt="Image NOT found"
            src={`${process.env.PUBLIC_URL}/images/rmse-decomposition_wsgsmax_ECMWF-ERAINT_CCLM4-8-17_Aug.png`}
          />
          <Figure.Caption>
            Plot showing: Variable - Against - Regional - Time period
          </Figure.Caption>
        </Figure>
      </Row>
  )
}