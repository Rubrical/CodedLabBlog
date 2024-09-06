import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    MatCardModule,
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.sass'
})
export class ArticleComponent {
  inactiveIcon = "assets/icon-heart.svg";
  activeIcon = "assets/icon-heart-active.svg";
  currentIcon = this.inactiveIcon;
  isCliked = false;

  toggleIcon(isHovering: boolean) {
    if (!this.isCliked) {
      this.currentIcon = isHovering ? this.activeIcon : this.inactiveIcon;
    }
  }

  toggleActive() {
    this.isCliked = !this.isCliked;
    this.currentIcon = this.isCliked ? this.activeIcon : this.inactiveIcon;
  }

}
