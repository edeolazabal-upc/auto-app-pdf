import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isButtonDisabled: boolean = false;
  isButtonVisible: boolean = true;

  ngOnInit() {
    const sessionData = sessionStorage.getItem('rol');
    if (sessionData) {
      this.isButtonDisabled = sessionData === 'gerente';
      this.isButtonVisible = sessionData !== 'gerente';
    }
  }
}
