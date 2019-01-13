import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'drum-machine';

  soundDictionary = {
    a: new Audio("../../../assets/cheerful.mp3"),
    z: new Audio("../../../assets/unsure.mp3"),
    e: new Audio("../../../assets/very-excited.mp3"),
    q: new Audio("../../../assets/surprised.mp3"),
    s: new Audio("../../../assets/concerned.mp3"),
    d: new Audio("../../../assets/look.mp3"),
    w: new Audio("../../../assets/unbelievable.mp3"),
    x: new Audio("../../../assets/proud.mp3"),
    c: new Audio("../../../assets/sad.mp3")
  }

  ngOnInit(){
  }

  playSound(key){
    this.soundDictionary[key].play();
  }
  }

  /* Add R2D2 icons to express emotions to buttons, add key presses */
