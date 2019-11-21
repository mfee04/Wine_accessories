import React from 'react'
//樣式
import '../../style/latest_events/Pagination.scss'
import { Dropdown, DropdownButton, Row  } from 'react-bootstrap'

class Pagination extends React.Component{
constructor(){
    super()
}

render(){
    return(
     <>
     <br/>
        <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center events_Pagination">
                    
                    {/* <a className="page-link" href="#" >Previous</a> */}
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                    {/* <li className="page-i">
                    <a className="page-link" href="#">Next</a>
                    </li> */}
                </ul>
        </nav>
     </>
    )
  }
}



export default Pagination