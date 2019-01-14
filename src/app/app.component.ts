import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'drum-machine';

  soundDictionary = {
    A: new Audio("../../../assets/cheerful.mp3"),
    Z: new Audio("../../../assets/unsure.mp3"),
    E: new Audio("../../../assets/very-excited.mp3"),
    Q: new Audio("../../../assets/surprised.mp3"),
    S: new Audio("../../../assets/concerned.mp3"),
    D: new Audio("../../../assets/look.mp3"),
    W: new Audio("../../../assets/unbelievable.mp3"),
    X: new Audio("../../../assets/proud.mp3"),
    C: new Audio("../../../assets/sad.mp3")
  }

  @HostListener('window:keydown', ['$event'])

  KeyEvent(event: KeyboardEvent){
    let filterKey = /[^Key]/;
    let keyPressed = event.code.match(filterKey)[0];
    if (this.soundDictionary.hasOwnProperty(keyPressed)) this.playSound(keyPressed);
  }

  playSound(key: String){
    this.soundDictionary[key].play();
  }
}

  /* Add R2D2 icons to express emotions to buttons */
