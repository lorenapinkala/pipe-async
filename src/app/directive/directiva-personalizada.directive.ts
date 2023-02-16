import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectivaPersonalizada]'
})
export class DirectivaPersonalizadaDirective {

  
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {renderer.setStyle(elementRef.nativeElement, 'font-size', '20px'); }
}
