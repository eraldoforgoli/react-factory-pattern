import React, { Component } from "react";
import fuckangular from "./fuckangular.svg";
import ilovereact from "./ilovereact.png";
import "./App.css";
import Factory from "./factory";
import { FieldProps, FieldType } from "./types";

const mockData: FieldProps[] = [
  {
    id: "cimi",
    type: FieldType.Username,
    placeholder: "cimi",
    required: true,
    minLength: 1,
    maxLength: 2
  },
  {
    id: "dsfas",
    type: FieldType.Birthday,
    placeholder: "cimi",
    required: true,
    minDate: new Date(),
    maxDate: new Date()
  }
];

class App extends Component {
  factory: Factory;
  props: any;
  constructor(props: any) {
    super(props);
    this.factory = new Factory();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={fuckangular} className="App-logo" alt="logo" />
          <br />
          <br />
          <br />
          <div>{mockData.map(el => this.factory.create(el))}</div>
        </header>
      </div>
    );
  }
}

export default App;
