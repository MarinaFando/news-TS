import News, { NewsObject } from './news/news';
import Sources, { Source } from './sources/sources';

export interface NewsData {
    articles: NewsObject[];
    status: string;
    totalResults: number;
}

export interface SourcesData {
    sources: Source[];
    status: string;
}

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data?: NewsData) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data?: SourcesData) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
