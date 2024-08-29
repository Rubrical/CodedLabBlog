import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticlesComponentComponent } from "./components/articles-component/articles-component.component";
import { TopbarComponent } from "./components/topbar/topbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticlesComponentComponent, TopbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'blog';
}
