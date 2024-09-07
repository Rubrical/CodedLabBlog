import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ArticleService } from '../../shared/services/article.service';
import { Article } from '../../shared/models/article';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.sass'
})
export class ArticleComponent implements OnInit {
  inactiveIcon = "assets/icon-heart.svg";
  activeIcon = "assets/icon-heart-active.svg";
  currentIcon = this.inactiveIcon;
  isCliked = false;
  articles!: Article[];

  constructor(private service: ArticleService) { }

  ngOnInit(): void {
    this.service.getArticles().subscribe({
      next: response => {
        this.articles = response;
      }
    })
  }

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
