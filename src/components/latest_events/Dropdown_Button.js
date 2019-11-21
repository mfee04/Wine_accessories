import React from 'react'
//樣式
import '../../style/latest_events/Dropdown_Button.scss'
import { Dropdown, DropdownButton, Row  } from 'react-bootstrap'

class Dropdown_Button extends React.Component{
constructor(){
    super()
}

render(){
    return(
       <>
        <Row className="events_dropdown_row">
        <DropdownButton id="dropdown-basic-button" title="選擇城市" variant="warning">
                <Dropdown.Item href="#/action-1">大台北</Dropdown.Item>
                <Dropdown.Item href="#/action-2">桃園</Dropdown.Item>
                <Dropdown.Item href="#/action-3">台中</Dropdown.Item>
                <Dropdown.Item href="#/action-4">新竹</Dropdown.Item>
                <Dropdown.Item href="#/action-5">台南</Dropdown.Item>
                <Dropdown.Item href="#/action-6">高雄</Dropdown.Item>
                <Dropdown.Item href="#/action-7">宜蘭</Dropdown.Item>
                <Dropdown.Item href="#/action-8">其他</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="排序" variant="warning">
                <Dropdown.Item href="#/action-1">人氣熱門</Dropdown.Item>
                <Dropdown.Item href="#/action-2">價格(低到高)</Dropdown.Item>
                <Dropdown.Item href="#/action-3">價格(高到低)</Dropdown.Item>
              
        </DropdownButton>
        </Row>
     </>
    )
  }
}



export default Dropdown_Button