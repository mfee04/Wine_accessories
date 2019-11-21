import React from 'react'
//樣式
import '../../style/latest_events/FilterOption.scss'
import { Card, Col, Row, Form, Dropdown, DropdownButton,Container  } from 'react-bootstrap'

class FilterOption extends React.Component{
constructor(){
    super()
}

render(){
    return(
       <>
        
        <Col sm={2} className=" FilterOption ">
    <div className="events_FilterOption pt-4">
            <Card bg="light" style={{ minWidth: '10rem' }}>
                <Card.Header>選擇城市</Card.Header>
                <Card.Body>
                <Card.Text>
                <fieldset>
                    <Form.Group as={Row}>
                    <Container>
                    <Row>
                    <Col sm={10}>
                        <Form.Check
                        type="radio"
                        label="大台北"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        />
                        <Form.Check
                        type="radio"
                        label="桃園"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        />
                        <Form.Check
                        type="radio"
                        label="台中"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        />
                        <Form.Check
                        type="radio"
                        label="新竹"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        />
                        <Form.Check
                        type="radio"
                        label="台南"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                        />
                        <Form.Check
                        type="radio"
                        label="高雄"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                        />
                        <Form.Check
                        type="radio"
                        label="宜蘭"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                        />
                        <Form.Check
                        type="radio"
                        label="其他"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                        />
                    </Col>
                    </Row>
                    </Container>
                    </Form.Group>
                </fieldset>
                </Card.Text>
                </Card.Body>
            </Card>
            <br/>
            <Card bg="light" style={{ minWidth: '10rem' }}>
                <Card.Header>排序</Card.Header>
                <Card.Body>
                <Card.Text>
                <fieldset>
                    <Form.Group as={Row}>
                    
                    <Col sm={12}>
                        <Form.Check
                        type="radio"
                        label="人氣熱門"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        />
                        <Form.Check
                        type="radio"
                        label="價格(低到高)"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        />
                        <Form.Check
                        type="radio"
                        label="價格(高到低)"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        />
                        
                    </Col>
                    </Form.Group>
                </fieldset>
                </Card.Text>
                </Card.Body>
            </Card>
    </div>
        </Col>
     </>
    )
  }
}



export default FilterOption