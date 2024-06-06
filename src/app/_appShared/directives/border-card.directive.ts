import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  constructor( private el:ElementRef) {
    this.setBorder('#f5f5f5');
    this.setHeight(180);
  }

  @HostListener('mouseEnter') onMouseEnter(){
    this.setBorder('#009688')
  }

  @HostListener('mouseLeave') onMouseLeave(){
    this.setBorder('#f5f5f5')
  }
  
  setBorder(color:string){
    let border = 'solid 4px'+color;
    this.el.nativeElement.style.border = border;
  }

  setHeight(height:number){
    this.el.nativeElement.style.height = height + 'px'; 
  }
}
