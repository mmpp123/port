import { Component, OnInit } from '@angular/core';
import {NgsRevealConfig} from 'ng-scrollreveal';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {

 
  
  constructor() {
   
   }

  ngOnInit() {
    // this.titleService.setTitle('Home | ng-scrollreveal');
  }
}