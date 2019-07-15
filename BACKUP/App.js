import React, { Component } from "react";
import styled from "styled-components";
import { Provider, connect } from 'react-redux';
import { Typography } from "antd";

import "antd/dist/antd.css";
import {store} from './store';
import SimpleTable from "./components/SimpleTable";
import Customers from "./components/customers";

const { Title, } = Typography;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Container>
        <PageTitle>HAPPY SUMMER</PageTitle>
        <SimpleTable />
        <Customers />
      </Container>
      <CountContainer />
      <ColorSwitcher />
    </Provider>
    );
  }
}

const Container = styled.div`
  max-width: 70%;
  margin: 0 auto;
  margin-top: 2rem;
`;

const PageTitle = styled(Title)`
  letter-spacing: 1.2;
  text-align: center;
`;

const Count = ({count,increment,incrementAsync,}) => (
  <div>
    The count is {count}
    <button type="button" onClick={increment}>increment</button>
    <button type="button" onClick={incrementAsync}>incrementAsync</button>
  </div>
);

const Colors = ({color, addColor,}) => (
  <div>
    <button type="button" onClick={addColor}>add color</button>
    <br/>
    The color is {color}
  </div>
);

const mapState = state => ({
  count: state.count,
  color: state.color,
});


const mapDispatch = ({ count: { increment, incrementAsync, },colors: {addColor,},}) => ({
  increment: () => increment(1),
  incrementAsync: () => incrementAsync(1),
  addColor: () => addColor(`green`),
});

const CountContainer = connect(mapState, mapDispatch)(Count);
const ColorSwitcher = connect(mapState, mapDispatch)(Colors);

export default App;
