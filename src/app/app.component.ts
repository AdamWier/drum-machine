import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'drum-machine';

  soundDictionary = {
    Q: {
      sound: new Audio("../../../assets/surprised.mp3"),
      message: "suprise"
    },
    W: {
      sound: new Audio("../../../assets/unbelievable.mp3"),
      message: "incredulousness"
    },
    E: {
      sound: new Audio("../../../assets/very-excited.mp3"),
      message: "excitement"
    },
    A: {
      sound: new Audio("../../../assets/cheerful.mp3"),
      message: "cheerfulness"
    },
    S: {
      sound: new Audio("../../../assets/concerned.mp3"),
      message: "concern"
    },
    D: {
      sound: new Audio("../../../assets/look.mp3"),
      message: "an alert"
    },
    Z: {
      sound: new Audio("../../../assets/unsure.mp3"),
      message: "insecurity"
    },
    X: {
      sound: new Audio("../../../assets/proud.mp3"),
      message: "pride"
    },
    C: {
      sound: new Audio("../../../assets/sad.mp3"),
      message: "sadness"
    }
  }

  qwerty = true;

  qwertyLayout = [{
    key: "Q",
    label: "Surprised"
   }, {
    key: "W",
    label: "Incredulous"
      }, {
    key: "E",
    label: "Excited"
      }, {
    key: "A",
    label: "Cheerful"
      }, {
    key: "S",
    label: "Concerned"
      }, {
    key: "D",
    label: "Alert"
      }, {
    key: "Z",
    label: "Unsure"
      }, {
    key: "X",
    label: "Proud"
      }, {
    key: "C",
    label: "Sad"
     }]

  azertyLayout = [{
    keyLabel: "A",
    label: "Cheerful",
    keyPressed: "Q",
   }, {
    keyLabel: "Z",
    label: "Unsure",
    keyPressed: "W",
      }, {
    keyLabel: "E",
    label: "Excited",
    keyPressed: "E",
      }, {
    keyLabel: "Q",
    label: "Surprised",
    keyPressed: "A",
      }, {
    keyLabel: "S",
    label: "Concerned",
    keyPressed: "S",
      }, {
    keyLabel: "D",
    label: "Alert",
    keyPressed: "D",
      }, {
    keyLabel: "W",
    label: "Incredulous",
    keyPressed: "Z",
      }, {
    keyLabel: "X",
    label: "Proud",
    keyPressed: "X",
      }, {
    keyLabel: "C",
    label: "Sad",
    keyPressed: "C",
     }]

  filterKey = /[^Key]\w*/;

  message = "nothing";

  constructor(){
    (navigator as any).keyboard.getLayoutMap().then(keyboardLayoutMap =>{
      if (keyboardLayoutMap.get("KeyQ") == "a"){
        this.qwerty = false;
      }
      else { this.qwerty = true }
      console.log(this.qwerty)
    })
  }

  @HostListener('window:keydown', ['$event'])

  KeyEvent(event: KeyboardEvent){
    let keyPressed = event.code.match(this.filterKey)[0];
    if (this.soundDictionary.hasOwnProperty(keyPressed)) this.playSound(keyPressed);
  }

  playSound(key: string){
    this.soundDictionary[key].sound.play();
    this.message = this.soundDictionary[key].message;
  }
}

  /* Add R2D2 icons to express emotions to buttons */
