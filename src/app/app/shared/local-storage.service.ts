import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  hasItem(key: any): boolean {
    return localStorage.getItem(key) !== null;
  }

  setItem(key: any, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: any) {
    return JSON.parse(localStorage.getItem(key));
  }

  removeItem(key: any) {
    localStorage.removeItem(key);
  }

  clearAll() {
    localStorage.clear();
  }
}
