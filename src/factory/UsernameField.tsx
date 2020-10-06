import React from "react";
import Field from "./Field";
import { FieldProps } from "../types/index";

class UsernameField extends Field {
  props: FieldProps = this.props;

  render() {
    return <div>This is the username field</div>;
  }
}

export default UsernameField;
