import { 
    Component, 
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    Input,
    ViewChild } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'lifecycle',
    template: `
        <p #paragrafo >{{valorInicial}}</p>
        <p>{{ paragrafo.textContent }}</p>
    `
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck,
    AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
    OnDestroy {
        
    @Input() valorInicial = 10;

    @ViewChild('paragrafo') paragrafo : HTMLElement;

    constructor() {
        console.log("constructor")
    }

    ngOnInit() { 
        console.log("ngOnInit")
        console.log(this.paragrafo);
    }

    ngOnChanges(){
        console.log("ngOnChanges")
    }

    ngDoCheck(){
        console.log("ngDoCheck")
    }

    ngAfterContentInit() {
        console.log("ngAfterContentInit")
    }

    ngAfterContentChecked(){
        console.log("ngAfterContentChecked")
    }

    ngAfterViewInit() {
        console.log("ngAfterViewInit")
    }

    ngAfterViewChecked() {
        console.log("ngAfterViewChecked")
    }

    ngOnDestroy() {
        console.log("ngOnDestroy")
    }

}