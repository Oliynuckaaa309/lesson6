import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet, RouterModule } from '@angular/router';
import { AngularBlogComponent } from './angular-blog/angular-blog.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,  FormsModule, AngularBlogComponent,  RouterLink, RouterLinkActive, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lesson06';
}
