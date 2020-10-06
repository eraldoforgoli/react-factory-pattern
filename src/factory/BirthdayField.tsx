import React from "react";
import Field from "./Field";
import { FieldProps } from "../types/index";

class BirthdayField extends Field {
  props: FieldProps = this.props;

  render() {
    return <div> This is the password field</div>;
  }
}

export default BirthdayField;
