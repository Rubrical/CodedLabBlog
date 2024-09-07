import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ArticleWithState } from '../../shared/models/article-with-state';
import { ArticleService } from '../../shared/services/article.service';

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
  articles!: ArticleWithState[];

  constructor(private service: ArticleService) { }

  ngOnInit(): void {
    this.service.getArticles().subscribe({
      next: response => {
        this.articles = response.map(article => ({
          ...article,
          isCliked: false,
          currentIcon: this.inactiveIcon
        }))

      }
    })
  }

  toggleIcon(article: ArticleWithState, isHovering: boolean) {
    if (!article.isCliked) {
      article.currentIcon = isHovering ? this.activeIcon : this.inactiveIcon;
    }
  }

  toggleActive(article: ArticleWithState) {
    article.isCliked = !article.isCliked;
    article.currentIcon = article.isCliked ? this.activeIcon : this.inactiveIcon;
  }

}
