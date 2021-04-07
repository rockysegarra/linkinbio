import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/useDarkMode";
import { GlobalStyles } from "./components/GlobalStyle";
import { lightTheme, darkTheme } from "./components/Themes";
import Toggle from "./components/Toggler";

function App() {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="d-flex flex-row-reverse">
          <div className="p-3">
            <Toggle theme={theme} toggleTheme={themeToggler} />
          </div>
        </div>
        <Container className="mt-1 mt-lg-5">
          <Row>
            <Col lg={{ span: 4, offset: 4 }} md={{ span: 6, offset: 3 }}>
              <div className="d-flex flex-column text-center mb-5">
                <div className="mb-3 mt-3 avatar"></div>
                <h1 className="h5 mb-3">@rockysegarra</h1>
                <div className="mb-3 text-center">
                  This is a quick website built in React.<br></br>All my
                  official links are here!
                </div>
                <a href="https://github.com/rockysegarra">
                  <div className="box mb-3">
                    <div className="links box-links">
                      <div className="d-flex">
                        <div className="icon-img link-media-1"></div>
                        <div className="p-2 ml-2 mt-1">Github Profile</div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="https://twitter.com/rockysegarra">
                  <div className="box mb-3">
                    <div className="links box-links">
                      <div className="d-flex">
                        <div className="icon-img link-media-2"></div>
                        <div className="p-2 ml-2 mt-1">I'm on Twitter</div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="https://dribbble.com/rockysegarra">
                  <div className="box mb-3">
                    <div className="links box-links">
                      <div className="d-flex">
                        <div className="icon-img link-media-3"></div>
                        <div className="p-2 ml-2 mt-1">Work on Dribbble</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
