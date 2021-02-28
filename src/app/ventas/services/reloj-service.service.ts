import { Injectable } from '@angular/core';
import { Observable , interval} from 'rxjs';
import {  map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RelojServiceService {

  clock: Observable < Date >;

  constructor() { 
    this.clock = interval(1000).pipe(map(() => new Date()));
  }

  getCurrentTime() {
    return this.clock;
  }
}
