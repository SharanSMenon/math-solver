import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  createSnackbar(message: string, action: string, panelClass: string[]) {
    this._snackBar.open(message, action, {
      panelClass,
      horizontalPosition: 'left'
    })
  }

  createDismissibleSnackbar(message: string, action: string, panelClass: string[], duration: number = 2000) {
    this._snackBar.open(message, action, {
      panelClass,
      duration,
      horizontalPosition: 'left'
    })
  }

  ready() {
    this.createDismissibleSnackbar("Ready", "Dismiss", ["snackbar-success"])
  }

  error() {
    this.createDismissibleSnackbar("Error", "Dismiss", ["snackbar-error"])
  }
  
  loading() {
    this._snackBar.open("Loading...", "Dismiss", {
      horizontalPosition: 'left'
    });
  }

  customMessage(message: string) {
    this._snackBar.open(message, "Dismiss", {
      horizontalPosition: 'left'
    });
  }
}
