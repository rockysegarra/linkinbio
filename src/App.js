import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { SiteData } from "./SiteData";

function App() {
  return (
    <Container className="mt-3 mt-lg-5">
      <Row>
        <Col lg={{ span: 4, offset: 4 }} md={{ span: 6, offset: 3 }}>
          <div className="d-flex flex-column text-center mb-5">
            <div className="mb-3 mt-3 avatar"></div>
            <h1 className="h5 mb-3">@rockysegarra</h1>
            <div className="mb-3 text-center">
              This is a quick website built in React.<br></br>All my official
              links are here!
            </div>
            {SiteData.map((item, index) => {
              return (
                <a key={index} href={item.path}>
                  <div className="box mb-3">
                    <div className="links box-links">
                      <div className="d-flex">
                        <div>
                          <img src={item.icon} alt="Link Icons" />
                        </div>
                        <div className="p-2 ml-2 mt-1">{item.title}</div>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
