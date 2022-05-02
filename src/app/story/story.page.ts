import { Component, OnInit } from '@angular/core';
import { TextService } from '../text.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.page.html',
  styleUrls: ['./story.page.scss'],
})
export class StoryPage implements OnInit {

  display: Array<{name: string, color: string, buttons: Array<{value: string, nextC: number, nextEN: number}>, text: string}>;
  options: Array<{value: string, nextC: number, nextEN: number}>;
  chapterNb: number;
  ceNb: number;
  eventNb: number;
  eChoice: Array<{c: number, e: number, choice: string}>;
  scrolll: number;
  output: HTMLElement;

  constructor(private ts: TextService) {
    this.options= [{value: "Start", nextC: 1, nextEN: 0}];
    this.chapterNb = 1;
    this.ceNb = 0;
    this.eventNb = 0;
    this.display = [];
    this.eChoice = [];
   }

  ngOnInit() {
  }

  press(i: number, j: number, v: string) {
    this.output = document.getElementById("scrollMe");
    this.scrolll = this.output.scrollHeight;
    if (v != "Next") {
      this.eChoice.push({c: i, e: j, choice: v});
      console.log(i + " " + j + " " + v);
    }

    if ((i == 11 && j == 22 && this.ceNb == 19) || (i == 17 && j == 25 && this.ceNb == 22)) {
      this.eChoice.forEach((e) => {if (e.choice == "Pay 6 Bitcoin") {j = 23;}});
    }

    this. chapterNb = i;
    this.ceNb = j;
    this.display.push({name: this.ts.c[i][this.ceNb].name, color: this.ts.c[i][this.ceNb].color, buttons: this.ts.c[i][this.ceNb].buttons, text: this.ts.ct[i][this.ceNb]});
    this.options = this.ts.c[i][this.ceNb].buttons;
    this.eventNb++;
    this.output = document.getElementById("scrollMe");
    this.scrolll = this.output.scrollHeight;
  }

}
