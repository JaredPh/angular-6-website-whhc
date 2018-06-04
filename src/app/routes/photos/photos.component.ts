import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IAppState } from '../../app.store';
import { News } from '../../components/news/news.models';
import { NewsService } from '../../components/news/news.service';
import { PageLoaderService } from '../../components/shared/elements/page-loader/page-loader.service';
import { TagsService } from '../../components/tags/tags.service';

@Component({
  selector: 'whhc-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  @select(s => s.tags.items.filter(t => t !== 'photos')) tags: Observable<string[]>;
  @select(s => s.news.pendingRequests + s.tags.pendingRequests > 0) loading: Observable<boolean>;

  public articles: News[];
  public selectedTag: string;

  constructor(
    private newsService: NewsService,
    private tagsService: TagsService,
    private ngRedux: NgRedux<IAppState>,
    private route: ActivatedRoute,
    private pageLoader: PageLoaderService,
  ) {}

  ngOnInit() {
    this.initPageLoader();

    this.tagsService.loadTags();

    this.route.params.subscribe( params => {
      this.selectedTag = params.tag;

      // Todo: implement by Tag
      if (this.selectedTag) {
        this.newsService.loadArticles();
      } else {
        this.newsService.loadArticles(20);
      }

      this.ngRedux
        .select(s => s.news.articles)
        .subscribe((articles) => {
          this.articles = (this.selectedTag)
            ? articles.filter(a => a.tags.indexOf(this.selectedTag) >= 0 && a.photos.length > 0)
            : articles.filter(a => a.photos.length > 0);
        });
    });
  }

  private initPageLoader() {
    const message = 'Loading Photos...';

    this.pageLoader.set(message);

    this.loading.subscribe((isLoading) => {
      if (isLoading) {
        this.pageLoader.set(message);
      } else {
        this.pageLoader.clear();
      }
    });
  }
}