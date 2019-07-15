import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import { Forward } from "@material-ui/icons";

import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";
import Button from "../components/CustomButtons/Button.jsx";
import HeaderLinks from "../components/Header/HeaderLinks.jsx";
import Parallax from "../components/Parallax/Parallax";
import landingPageStyle from "../../src/assets/jss/material-kit-react/views/landingPage.jsx";
import { setCurrentVehicleType } from "../actions/actionCreator";

const dashboardRoutes = [];

const StyledBrand = styled.span`
  font-family: "Times New Roman";
  strong {
    font-size: 2.5rem;
    span {
      position: relative;
      font-size: 2rem;
      top: -0.5rem;
    }
  }
`;

const StyledTitle = styled.h1`
  margin-bottom: 0 !important;
`;

const StyledSubTitle = styled.h3`
  margin-top: 0 !important;
`;

const SpaceDown = styled.div`
  margin-bottom: 10vh;
`;

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand={
            <StyledBrand>
              <strong>
                E. SASSONE<span>®</span>
              </strong>
            </StyledBrand>
          }
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <SpaceDown>
          <Parallax
            image={require("../../src/assets/img/maserati_retouched_3.jpg")}
          >
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                  <StyledTitle className={classes.title}>
                    FABBRICA DI FRIZIONI
                  </StyledTitle>
                  <StyledSubTitle>Made in Italy since 1953.</StyledSubTitle>
                  <br />
                  <br />
                  <h4>
                    <StyledBrand>E. SASSONE®</StyledBrand> produce frizioni dal
                    1953. In questo sito è possibile trovare la frizione
                    necessaria. Puoi cercare nel database di auto, camion e
                    trattori o scaricare tutti i cataloghi di aggiornamento,
                    incluse le applicazioni da competizione. Disco frizione, kit
                    frizione, piastra motorizzata, piastra di pressione.
                  </h4>
                  <br />
                  <Link to="/catalogo">
                    <Button type="button" color="primary" size="lg">
                      <Forward />
                      Esplora catalogo
                    </Button>
                  </Link>
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>
        </SpaceDown>
        <Footer />
      </>
    );
  }
}

export default compose(
  withStyles(landingPageStyle),
  connect(
    null,
    { setCurrentVehicleType }
  )
)(LandingPage);
