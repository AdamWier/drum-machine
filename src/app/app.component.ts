import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'drum-machine';
  
  soundDictionary = {
    A: new Audio("../sounds/cheerful.mp3"),
    Z: "unsure",
    E: "very-excited",
    Q: "surprised",
    S: "concerned",
    D: "look",
    W: "unbelievable",
    X: "proud",
    C: "sad"
  }

  playSound(key){
    this.soundDictionary[key].audio();

  }
  }
