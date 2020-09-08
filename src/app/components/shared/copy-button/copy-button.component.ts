import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-copy-button',
  templateUrl: './copy-button.component.html',
  styleUrls: ['./copy-button.component.css']
})
export class CopyButtonComponent implements OnInit {

  @Input() value: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
