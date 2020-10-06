import React from "react";
import { FieldType, UsernameProps } from "../types/index";
import UsernameField from "./UsernameField";

class UsernameFactory {
  get type() {
    return FieldType.Username;
  }

  create(item: UsernameProps) {
    return <UsernameField {...item} />;
  }
}

export default UsernameFactory;
