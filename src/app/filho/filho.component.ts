import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

@Output() Output = new EventEmitter();




  constructor() { }

  ngOnInit() {
  this.Output.emit("Test output");


  }

}
