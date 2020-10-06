import { Component } from "react";
import { FieldProps, FieldType } from "../types/index";

class Field extends Component<FieldProps> {
  type: FieldType;
  constructor(props: FieldProps) {
    super(props);
    this.type = props.type;
  }
}

export default Field;
