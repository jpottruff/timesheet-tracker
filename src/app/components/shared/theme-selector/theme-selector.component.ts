import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.css']
})
export class ThemeSelectorComponent implements OnInit {

  themes = [ 'theme 1', 'theme 2', ' theme 3'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
