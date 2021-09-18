import React, { useState } from 'react';
import Select from 'react-select';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import makeAnimated from 'react-select/animated';



const plotvars = [
  { value: 'snw', label: 'Surface Snow Amount' },
  { value: 'tasmax', label: 'Daily Maximum Near-Surface Air Temperature' },
  { value: 'rss', label: 'Net surface long wave flux' },
  { value: 'clt', label: 'Total Cloud Fraction' },
  { value: 'prc', label: 'Convective Precipitation' },
  { value: 'tas', label: 'Near-Surface Air Temperature' },
  { value: 'tasmin', label: 'Daily Minimum Near-Surface Air Temperature' },
  { value: 'wsgsmax', label: 'Daily Maximum Near-Surface Wind Speed of Gust' },
  { value: 'psl', label: 'Sea Level Pressure' },
  { value: 'pr', label: 'Precipitation' },
  { value: 'sfcWind', label: 'Near-Surface Wind Speed' },
  { value: 'hurs', label: 'Near-Surface Relative humidity' },
  { value: 'uas', label: 'Eastward Near-Surface Wind' },
  { value: 'vas', label: 'Northward Near-Surface Wind ' },
  { value: 'prsn', label: 'Snowfall Flux' },
  { value: 'rls', label: 'Net surface long wave flux' }
];


const evalagainst = [
  { value: 'HadUK-grid', label: 'HadUK-grid' },
  { value: 'ECMWF-ERAINT', label: 'ECMWF-ERAINT' }
]

const regmodels = [
  { value: 'ALADIN63', label: 'ALADIN63' },
  { value: 'COSMO-crCLIM-v1-1', label: 'COSMO-crCLIM-v1-1' },
  { value: 'WRF381P', label: 'WRF381P' },
  { value: 'REMO2015', label: 'REMO2015' },
  { value: 'RCA4', label: 'RCA4' },
  { value: 'RACMO22E', label: 'RACMO22E' },
  { value: 'HIRHAM5', label: 'HIRHAM5' },
  { value: 'HadREM3-GA7-05', label: 'HadREM3-GA7-05' },
  { value: 'RegCM4-6', label: 'RegCM4-6' },
  { value: 'CCLM4-8-17', label: 'CCLM4-8-17' }
]

const timeperiods = [
  { value: 'Jan', label: 'January' },
  { value: 'Feb', label: 'February' },
  { value: 'Mar', label: 'March' },
  { value: 'Apr', label: 'April' },
  { value: 'May', label: 'May' },
  { value: 'Jun', label: 'June' },
  { value: 'Jul', label: 'July' },
  { value: 'Aug', label: 'August' },
  { value: 'Sep', label: 'September' },
  { value: 'Oct', label: 'October' },
  { value: 'Nov', label: 'November' },
  { value: 'Dec', label: 'December' },
  { value: 'DJF', label: 'DJF' },
  { value: 'MAM', label: 'MAM' },
  { value: 'JJA', label: 'JJA' },
  { value: 'SON', label: 'SON' }
]


export default function PlotExplorerRow({data}){

  //const [plotvars, setPlotVar] = useState({})
  // const [evalagainst, setEvalAgainst] = useState({})
  // const [regmodels, setRegModel] = useState({})
  // const [timeperiods, setTimePeriod] = useState({})


  return(
    <Container>
      <Row>
        <Col>
          <Select
            options={plotvars}
            //onChange={setPlotVar}
            placeHolder="Select variable"
            />
        </Col>
        <Col>
          <Select
            options={evalagainst}
            // onChange={setPlotVar}
            placeHolder="Select variable"
            />
        </Col>
        <Col>
          <Select
            options={regmodels}
            // onChange={setPlotVar}
            placeHolder="Select variable"
            />
        </Col>
        <Col>
          <Select
            options={timeperiods}
            // onChange={setPlotVar}
            placeHolder="Select variable"
            />
        </Col>
      </Row>
      <Row>
        <Image src="rmse-decomposition_wsgsmax_ECMWF-ERAINT_RACMO22E_Aug.png" fluid/>
      </Row>
    </Container>
  )
}