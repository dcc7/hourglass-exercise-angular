import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-timer-block',
  templateUrl: './timer-block.component.html',
  styleUrls: ['./timer-block.component.css']
})
export class TimerBlockComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() flip: boolean;
  @Input() count: number;
  @Input() originalNum: number;

  @ViewChild('triangle') triangle?: ElementRef;

  @ViewChild('boxOne') boxOne?: ElementRef;
  @ViewChild('boxTwo') boxTwo?: ElementRef;
  @ViewChild('boxThree') boxThree?: ElementRef;
  @ViewChild('boxFour') boxFour?: ElementRef;
  @ViewChild('boxFive') boxFive?: ElementRef;
  @ViewChild('boxSix') boxSix?: ElementRef;
  @ViewChild('boxSeven') boxSeven?: ElementRef;
  @ViewChild('boxEight') boxEight?: ElementRef;
  @ViewChild('boxNine') boxNine?: ElementRef;
  @ViewChild('boxTen') boxTen?: ElementRef;

  percentageDone: number;
  viewInitialised: boolean = false;


  constructor(
    private renderer: Renderer2,
  ) {}


  ngOnInit(): void {}


  ngAfterViewInit(): void {
    if (this.flip){
      this.renderer.addClass(this.triangle.nativeElement, 'flip');
    }

    this.viewInitialised = true;

    //remove boxes from the start (for the bottom triangle).
    if (!this.flip){
      this.renderer.removeClass(this.boxOne.nativeElement,"box-1");
      this.renderer.removeClass(this.boxTwo.nativeElement,"box-2");
      this.renderer.removeClass(this.boxThree.nativeElement,"box-3");
      this.renderer.removeClass(this.boxFour.nativeElement,"box-4");
      this.renderer.removeClass(this.boxFive.nativeElement,"box-5");
      this.renderer.removeClass(this.boxSix.nativeElement,"box-6");
      this.renderer.removeClass(this.boxSeven.nativeElement,"box-7");
      this.renderer.removeClass(this.boxEight.nativeElement,"box-8");
      this.renderer.removeClass(this.boxNine.nativeElement,"box-9");
      this.renderer.removeClass(this.boxTen.nativeElement,"box-10");
    }
  }

  //runs every time something passed down from parent to child.
  ngOnChanges(changes: SimpleChanges): void {
    //percentage calculation
    this.percentageDone = (1 - this.count / this.originalNum) * 100;

    // For the triangle that is flipped
    if (this.viewInitialised && this.flip){

      if (this.percentageDone >= 0 && this.percentageDone < 10) {
        this.renderer.removeClass(this.boxTen.nativeElement,"box-10");
      }
      if (this.percentageDone >= 10 && this.percentageDone < 20) {
        this.renderer.removeClass(this.boxNine.nativeElement,"box-9");
      }
      if (this.percentageDone >= 20 && this.percentageDone < 30) {
        this.renderer.removeClass(this.boxEight.nativeElement,"box-8");
      }
      if (this.percentageDone >= 30 && this.percentageDone < 40) {
        this.renderer.removeClass(this.boxSeven.nativeElement,"box-7");
      }
      if (this.percentageDone >= 40 && this.percentageDone < 50) {
        this.renderer.removeClass(this.boxSix.nativeElement,"box-6");
      }
      if (this.percentageDone >= 50 && this.percentageDone < 60) {
        this.renderer.removeClass(this.boxFive.nativeElement,"box-5");
      }
      if (this.percentageDone >= 60 && this.percentageDone < 70) {
        this.renderer.removeClass(this.boxFour.nativeElement,"box-4");
      }
      if (this.percentageDone >= 70 && this.percentageDone < 80) {
        this.renderer.removeClass(this.boxThree.nativeElement,"box-3");
      }
      if (this.percentageDone >= 80 && this.percentageDone < 90) {
        this.renderer.removeClass(this.boxTwo.nativeElement,"box-2");
      }
      if (this.percentageDone >= 90 && this.percentageDone < 100) {
        this.renderer.removeClass(this.boxOne.nativeElement,"box-1");
      }
    }

    // For the triangle that is not flipped.
    if (this.viewInitialised && !this.flip){

      if (this.percentageDone >= 0 && this.percentageDone < 10) {
        this.renderer.addClass(this.boxTen.nativeElement,"box-10");
      }
      if (this.percentageDone >= 10 && this.percentageDone < 20) {
        this.renderer.addClass(this.boxNine.nativeElement,"box-9");
      }
      if (this.percentageDone >= 20 && this.percentageDone < 30) {
        this.renderer.addClass(this.boxEight.nativeElement,"box-8");
      }
      if (this.percentageDone >= 30 && this.percentageDone < 40) {
        this.renderer.addClass(this.boxSeven.nativeElement,"box-7");
      }
      if (this.percentageDone >= 40 && this.percentageDone < 50) {
        this.renderer.addClass(this.boxSix.nativeElement,"box-6");
      }
      if (this.percentageDone >= 50 && this.percentageDone < 60) {
        this.renderer.addClass(this.boxFive.nativeElement,"box-5");
      }
      if (this.percentageDone >= 60 && this.percentageDone < 70) {
        this.renderer.addClass(this.boxFour.nativeElement,"box-4");
      }
      if (this.percentageDone >= 70 && this.percentageDone < 80) {
        this.renderer.addClass(this.boxThree.nativeElement,"box-3");
      }
      if (this.percentageDone >= 80 && this.percentageDone < 90) {
        this.renderer.addClass(this.boxTwo.nativeElement,"box-2");
      }
      if (this.percentageDone >= 90 && this.percentageDone < 100) {
        this.renderer.addClass(this.boxOne.nativeElement,"box-1");
      }
    }

    }

}
