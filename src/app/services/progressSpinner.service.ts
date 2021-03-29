import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressSpinnerService {

  showSpinner : BehaviorSubject<boolean>;

  constructor() { 
    this.showSpinner = new BehaviorSubject(false);
  }

  spinnerVisible()
  {
    this.showSpinner.next(true);
  }

  spinnerHidden()
  {
    this.showSpinner.next(false);
  }

}
