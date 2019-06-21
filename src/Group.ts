import { Item } from './Item'
import { isTemplateSpan } from 'typescript';

export class Group {
  name: string;
  displayName: string;
  items: Item[];

  constructor(name: string, displayName: string) {
    this.name = name;
    this.displayName = displayName;
    this.items = new Array();
  }

  public add(item: Item):void {
    this.items.push(item);
  }

  public getItems(): Item[] {
    return this.items;
  }
}