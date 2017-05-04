import {
  Component,
  Directive,
  NgModule,
  Input,
  ViewContainerRef,
  Compiler,
  ComponentFactory,
  ModuleWithComponentFactories,
  ComponentRef,
  ReflectiveInjector
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { PictureThumbnailModule } from './thumbnail';


export function createComponentFactory(compiler: Compiler, metadata: Component): Promise<ComponentFactory<any>> {
  const cmpClass = class DynamicComponent {};
  const decoratedCmp = Component(metadata)(cmpClass);

  @NgModule({ imports: [CommonModule, IonicModule, PictureThumbnailModule], declarations: [decoratedCmp] })
  class DynamicHtmlModule { }

  return compiler.compileModuleAndAllComponentsAsync(DynamicHtmlModule)
  .then((moduleWithComponentFactory: ModuleWithComponentFactories<any>) => {
    return moduleWithComponentFactory.componentFactories.find(x => x.componentType === decoratedCmp);
  }).catch(error => console.log(error));
}

@Directive({ selector: 'html-outlet' })
export class HtmlOutlet {
  @Input() html: string;
  @Input() values: any;
  cmpRef: ComponentRef<any>;

  constructor(private vcRef: ViewContainerRef, private compiler: Compiler) { }

  ngOnChanges() {
    const html = this.html || '';
    if (!html) return;

    if(this.cmpRef) {
      this.cmpRef.destroy();
    }

    const compMetadata = new Component({
      selector: 'dynamic-html',
      template: this.html,
      inputs: ['values']
    });
    let val = this.values || {};

    createComponentFactory(this.compiler, compMetadata)
    .then(factory => {
      const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
      this.cmpRef = this.vcRef.createComponent(factory, 0, injector, []);
      this.cmpRef.instance.values = val;
      this.cmpRef.changeDetectorRef.detectChanges();
    }).catch(error => console.log(error));
  }

  ngOnDestroy() {
    if(this.cmpRef) {
      this.cmpRef.destroy();
    }
  }
}
