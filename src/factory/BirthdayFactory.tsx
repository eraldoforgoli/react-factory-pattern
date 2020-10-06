import React from "react";
import { FieldType, FieldProps } from "../types/index";
import BirthdayField from "./BirthdayField";

class BirthdayFactory {
  get type() {
    return FieldType.Birthday;
  }

  create(item: FieldProps) {
    return <BirthdayField {...item} />;
  }
}

export default BirthdayFactory;
