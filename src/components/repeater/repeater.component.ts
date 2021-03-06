import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
  ContentChild
} from '@angular/core';


@Component({
  selector: '[block-repeater]',
  templateUrl: './repeater.component.html',
  styleUrls: ['./repeater.component.css']
})
export class RepeaterComponent implements OnInit {

  private _id: string = null;
  private _propertyKeyName: string = null;
  private _itemsForRepetition: any[] = [];
  private _selectedValue: string = null;

  private _containerClass: string = '';
  private _elementClass: string = '';

  private _selectedData: any = null;
  private _selectedChanged: EventEmitter<any> = new EventEmitter<any>();

  @ContentChild('blockRepeaterCustomTemplate', { read: TemplateRef, static: false })
  public _template: TemplateRef<any>;

  public constructor() {

  }

  public ngOnInit(): void {
    // console.log(this._template);
  }

  public itemClickedHandler(e: any): void {

    let newValue = this.getValueFromClickEvent(e);
    if (this.newValueIsDifferent(newValue)) {
      this._selectedData = e;
      this.setNewValue(newValue);
      this.emitSelectedChanged(this._selectedData);
    }
  }

  private getValueFromClickEvent(e: any): string {

    if (!e || !this._propertyKeyName) {
      return null;
    }
    return (e[this._propertyKeyName]).toString();
  }

  private setNewValue(value: string): void {
    this._selectedValue = value;
  }


  private newValueIsDifferent(newValue: string): boolean {
    return (this._selectedValue !== newValue);
  }

  private emitSelectedChanged(arg: any): void {
    this._selectedChanged.emit(arg);
  }


  public itemIsSelected(item: any): boolean {

    if (!this._selectedData) {
      return false;
    }

    return this._selectedData[this._propertyKeyName] === item[this._propertyKeyName];
  }








  @Input()
  public set id(value: string) {
    this._id = value;
  }
  public get id(): string {
    return this._id;
  }

  @Input("data")
  public set itemsForRepetition(value: any[]) {
    this._selectedValue = null;
    this._selectedData = null;
    this._itemsForRepetition = value;
  }
  public get itemsForRepetition(): any[] {
    return this._itemsForRepetition;
  }

  @Input()
  public set propertyKeyName(value: string) {
    this._propertyKeyName = value;
  }
  public get propertyKeyName(): string {
    return this._propertyKeyName;
  }

  @Input()
  public set selectedValue(value: string) {
    this._selectedValue = value;
  }
  public get selectedValue(): string {
    return this._selectedValue;
  }


  public set selectedChanged(value: EventEmitter<any>) {
    this._selectedChanged = value;
  }
  @Output()
  public get selectedChanged(): EventEmitter<any> {
    return this._selectedChanged;
  }


  @Input()
  public set template(value: TemplateRef<any>) {
    this._template = value;
  }

  public get template(): TemplateRef<any> {
    return this._template;
  }

  @Input()
  public set elementClass(value: string) {
    this._elementClass = value;
  }
  public get elementClass(): string {
    return this._elementClass;
  }


}