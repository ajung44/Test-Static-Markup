import React from "react";
import { render } from 'react-dom';
import BodyContainer from "./containers/BodyContainer";
import styles from './styles.less'

function App() {
  return(
    <BodyContainer />
  );
}

render(<App />, document.querySelector('#root'));