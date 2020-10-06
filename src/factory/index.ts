import FactoryMapper from "./FactoryMappes";
import { FieldProps } from "../types/index";

class Factory {
  factoryMapper: FactoryMapper;
  constructor() {
    this.factoryMapper = new FactoryMapper();
  }

  create(item: FieldProps) {
    const { type } = item;
    const factory = this.factoryMapper.getFactory(type);
    return factory ? factory.create(item) : null;
  }
}

export default Factory;
