
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ch16 {
  content = {
    meta: [
      { name: "", color: "white", buttons: [{ value: "Start Over", nextC: 0, nextEN: 0 }] }
    ],
    text: [
      "Start Over"
    ]
  };
}