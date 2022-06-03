import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, QueryList, Renderer2, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-timer-block',
  templateUrl: './timer-block.component.html',
  styleUrls: ['./timer-block.component.css']
})
export class TimerBlockComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() flip: boolean; //true will rotate triangle.
  @Input() count: number; //count passed from the parent.
  @Input() originalNum: number; //used for percentage calculation.

  //top triangle for 180 deg rotation.
  @ViewChild('triangle') triangle?: ElementRef;
  //obtaining all elements with local reference box.
  @ViewChildren('box') boxParent?: QueryList<any>;

  percentageDone: number;
  viewInitialised: boolean = false;
  boxes: ElementRef[] = []

  constructor(
    private renderer: Renderer2, //user to manipulate dom elements, instead of manipulating directly.
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const arr = this.boxParent.toArray();
    arr.forEach((element) => {
      //pushes each dom element into an array.
      this.boxes.push(element.nativeElement);
    })
    //adding css to element for 180 deg rotation.
    if (this.flip){
      this.renderer.addClass(this.triangle.nativeElement, 'flip');
    }
    //to run certain functions only after the view has initialised.
    this.viewInitialised = true;
    //remove boxes from the start (for the bottom triangle) from beginning.
    if (!this.flip){
      //looping over array of html elements and removing classes.
      this.boxes.forEach((element, index) => {
        this.renderer.removeClass(element, `box-${index + 1}`);
      })
    }
  }

  //runs every time information is passed down from parent to child.
  ngOnChanges(changes: SimpleChanges): void {
    //percentage calculation: using time elapsed.
    this.percentageDone = (1 - this.count / this.originalNum) * 100;

    // For the triangle that is flipped
    if (this.viewInitialised && this.flip){
      for (let i = this.boxes.length - 1; i >= 0; i--) {
        for (let j = 0; j <=10; j++){
          if (this.percentageDone >= (j*10) && this.percentageDone < (j*10+10) && i === this.boxes.length - j) {
           this.renderer.removeClass(this.boxes[i],`box-${i + 1}`);
          }
        }
      }
    }
    // For the triangle that is not flipped.
    if (this.viewInitialised && !this.flip){
      for (let i = this.boxes.length - 1; i >= 0; i--) {
        for (let j = 0; j <=10; j++){
          if (this.percentageDone >= (j*10) && this.percentageDone < (j*10+10) && i === this.boxes.length - j) {
          this.renderer.addClass(this.boxes[i],`box-${i + 1}`);
          };
        };
      };
    };
  };
}
