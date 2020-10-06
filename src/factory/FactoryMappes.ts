import UsernameFactory from "./UsernameFactory";
import BirthdayFactory from "./BirthdayFactory";
import { FieldType } from "../types/index";

type FactoryType = UsernameFactory | BirthdayFactory;
class FactoryMapper {
  factories: Map<FieldType, any> = new Map();
  constructor() {
    const usernameFactory = new UsernameFactory();
    const birthdayFactory = new BirthdayFactory();

    this.factories = new Map([
      [usernameFactory.type, usernameFactory],
      [birthdayFactory.type, birthdayFactory]
    ]);
  }
  getFactory = (type: FieldType) => type && this.factories.get(type);
}

export default FactoryMapper;
