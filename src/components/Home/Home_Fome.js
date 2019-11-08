import React from 'react'

//Bootstrap 標籤
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../../style/HomeContainer_News/Home_Fome.scss'
import '../../style/animate/animate.min.css'

class Home_Fome extends React.Component {

    constructor(props) {
        super(props);
        this.state = { input1: '', input2: '', input3: '', input4: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <>
                <div className="Home_Fome_bg">
                    <Container className="">
                        <Row>
                            <Col lg={4} md={3} sm={12}>
                                <div className="Home_Fome_text">
                                    <p>官方客服</p>
                                    <p>Email：service@iii.com.tw</p>
                                    <p>LINE：請搜尋＠Bistro</p>
                                </div>
                                <div className="Home_Fome_icon">
                                    <img src=""></img>
                                    <img src=""></img>
                                    <img src=""></img>
                                    <img src=""></img>
                                </div>

                            </Col>
                            <Col lg={8} md={9} sm={12}>
                                <from onSubmit={this.handleSubmit} className="Home_Fome_input d-flex">
                                    <label>
                                        <input type="text" value={this.state.input1} onChange={this.handleChange} className="Home_Fome_inputname placeholder=">

                                        </input>
                                    </label>
                                    <label>
                                        <input defaultValue="Email" type="text" value={this.state.input2} onChange={this.handleChange} className="Home_Fome_inputname placeholder=">

                                        </input>
                                    </label>
                                    <label>
                                        <input defaultValue="Phone" type="text" value={this.state.input3} onChange={this.handleChange} className="Home_Fome_inputname placeholder=">

                                        </input>
                                    </label>
                                    <label>
                                        <input defaultValue="Message" type="text" value={this.state.input4} onChange={this.handleChange} className="Home_Fome_inputname placeholder=">

                                        </input>
                                    </label>
                                    <input type="submit" value="Submit" />
                                </from>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}
export default Home_Fome
