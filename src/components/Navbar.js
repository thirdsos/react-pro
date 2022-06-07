import { Container, Navbar as Navbarbs, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';



function Navbar(isLogin) {
    // if (isLogin) {
        return (
            <Navbarbs bg="light" expand="lg">
                {/* <Container style={{margin: 5}}> */}
                <Container style={{ "padding-block": "2%" }}>
                    <img style={{width : '4%'}} src="https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr" alt="profile" className="profilepic" />
                    <Link style={{"padding-left": "2%" ,"height": "auto!important"}} to="/" className="navbar-brand">Home</Link>
                    <Navbarbs.Toggle aria-controls="basic-Navbarbs-nav" />
                    <Navbarbs.Collapse id="basic-Navbarbs-nav">
                        <Nav className="me-auto">
                            <Link to="/chart1" className="nav-link">Chart1</Link>
                            <Link to="/chart2" className="nav-link">Chart2</Link>
                            <Link to="/chart3" className="nav-link">Chart3</Link>
                        </Nav>
                        <Nav>
                            <Button variant="danger" onClick={() => window.location.reload(false)}>Logout</Button>
                        </Nav>
                    </Navbarbs.Collapse>
                </Container>
            </Navbarbs>
        )
    // }
    // else {
    //     return (
    //         <Navbarbs bg="light" expand="lg">
    //             {/* <Container style={{margin: 5}}> */}
    //             <Container style={{ "padding-block": "2%" }}>
    //                 <img style={{width : '100%'}} src="https://scontent.fbkk12-4.fna.fbcdn.net/v/t1.6435-9/129650728_3529245743826571_7591543466056406239_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_eui2=AeH16C1S185IgverqXOMdRpWiwN3EiHeFx-LA3cSId4XH7fDDHow1VJOrxqwNER2vLMpDtBSrguNycEA7Sbdlvyp&_nc_ohc=p8IELrtASjYAX-P4bti&_nc_ht=scontent.fbkk12-4.fna&oh=00_AT-x4lMRqi49CkxqwSbdIeC2JY-JZdA7qVc9lCdrxD-WEQ&oe=62C47FB9" alt="profile" className="profilepic" />
    //                 <Link to="/" className="navbar-brand">Home</Link>
    //                 <Navbarbs.Toggle aria-controls="basic-Navbarbs-nav" />
    //                 <Navbarbs.Collapse id="basic-Navbarbs-nav">
    //                     <Nav className="me-auto">
    //                         <Link to="/chart1" className="nav-link">Chart1</Link>
    //                         <Link to="/chart2" className="nav-link">Chart2</Link>
    //                         <Link to="/chart3" className="nav-link">Chart3</Link>
    //                     </Nav>
    //                     <Nav>
    //                         <Button variant="danger" onClick={() => window.location.reload(false)}>Logout</Button>
    //                     </Nav>
    //                 </Navbarbs.Collapse>
    //             </Container>
    //         </Navbarbs>
    //     )
    // }

}


export default Navbar;