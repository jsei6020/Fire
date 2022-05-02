import { Injectable } from '@angular/core';
import { ch1 } from "../assets/ch1";
import { ch2 } from '../assets/ch2';
import { ch3 } from '../assets/ch3';
import { ch4 } from '../assets/ch4';
import { ch5 } from '../assets/ch5';
import { ch6 } from '../assets/ch6';
import { ch7 } from '../assets/ch7';
import { ch8 } from '../assets/ch8';
import { ch9 } from '../assets/ch9.js';
import { ch10 } from '../assets/ch10';
import { ch11 } from '../assets/ch11';
import { ch12 } from '../assets/ch12';
import { ch13 } from '../assets/ch13';
import { ch14 } from '../assets/ch14';
import { ch15 } from '../assets/ch15';
import { ch16 } from '../assets/ch16';
import { ch17 } from '../assets/ch17';
import { ch18 } from '../assets/ch18';
import { ch19 } from '../assets/ch19';
import { ch20 } from '../assets/ch20';
import { ch21 } from '../assets/ch21';
import { ch22 } from '../assets/ch22';
import { ch23 } from '../assets/ch23';
import { ch24 } from '../assets/ch24';
import { ch25 } from '../assets/ch25';




@Injectable({
  providedIn: 'root'
})
export class TextService {

  c: Array<Array<{name: string, color: string, buttons: Array<{value: string, nextC: number, nextEN: number}>}>>;
  ct: Array<Array<string>>;

  constructor(private ch1: ch1,private ch2: ch2, private ch3: ch3, private ch4: ch4, private ch5: ch5, private ch6: ch6, private ch7: ch7, private ch8: ch8,
    private ch9: ch9,private ch10: ch10,private ch11: ch11,private ch12: ch12, private ch13: ch13, private ch14: ch14, private ch15: ch15, private ch16: ch16,
    private ch17: ch17, private ch18: ch18, private ch19: ch19, private ch20: ch20, private ch21: ch21, private ch22: ch22, private ch23: ch23, private ch24: ch24,
    private ch25: ch25) {
    this.c = [[{name: "", color: "white", buttons: [{value: "Next", nextC: 1, nextEN: 0}]}]];
    this.c.push(ch1.content.meta);
    this.c.push(ch2.content.meta);
    this.c.push(ch3.content.meta);
    this.c.push(ch4.content.meta);
    this.c.push(ch5.content.meta);
    this.c.push(ch6.content.meta);
    this.c.push(ch7.content.meta);
    this.c.push(ch8.content.meta);
    this.c.push(ch9.content.meta);
    this.c.push(ch10.content.meta);
    this.c.push(ch11.content.meta);
    this.c.push(ch12.content.meta);
    this.c.push(ch13.content.meta);
    this.c.push(ch14.content.meta);
    this.c.push(ch15.content.meta);
    this.c.push(ch16.content.meta);
    this.c.push(ch17.content.meta);
    this.c.push(ch18.content.meta);
    this.c.push(ch19.content.meta);
    this.c.push(ch20.content.meta);
    this.c.push(ch21.content.meta);
    this.c.push(ch22.content.meta);
    this.c.push(ch23.content.meta);
    this.c.push(ch24.content.meta);
    this.c.push(ch25.content.meta);


    this.ct = [["Reset"]];
    this.ct.push(ch1.content.text);
    this.ct.push(ch2.content.text);
    this.ct.push(ch3.content.text);
    this.ct.push(ch4.content.text);
    this.ct.push(ch5.content.text);
    this.ct.push(ch6.content.text);
    this.ct.push(ch7.content.text);
    this.ct.push(ch8.content.text);
    this.ct.push(ch9.content.text);
    this.ct.push(ch10.content.text);
    this.ct.push(ch11.content.text);
    this.ct.push(ch12.content.text);
    this.ct.push(ch13.content.text);
    this.ct.push(ch14.content.text);
    this.ct.push(ch15.content.text);
    this.ct.push(ch16.content.text);
    this.ct.push(ch17.content.text);
    this.ct.push(ch18.content.text);
    this.ct.push(ch19.content.text);
    this.ct.push(ch20.content.text);
    this.ct.push(ch21.content.text);
    this.ct.push(ch22.content.text);
    this.ct.push(ch23.content.text);
    this.ct.push(ch24.content.text);
    this.ct.push(ch25.content.text);

   }
}
