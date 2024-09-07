import { Article } from "./article";

export class ArticleWithState extends Article {
  isCliked?: boolean;
  currentIcon?: string;
}
