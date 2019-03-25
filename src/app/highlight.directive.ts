import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';
import { ElementDef } from '@angular/core/src/view';
import { directiveInject } from '@angular/core/src/render3';
import { DirectiveAst } from '@angular/compiler';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') icolor;
  @HostBinding('style.background-color') diretiva1;
  @HostListener('mouseout') diretiva(){
  this.diretiva1 = this.icolor;

  }


}
