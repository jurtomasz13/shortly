import { Controller, Get, Query, Render } from '@nestjs/common';
import { UrlShortenerService } from './url-shortener.service';

@Controller()
export class UrlShortenerController {
    constructor(private readonly urlShortenerService: UrlShortenerService) {}

    @Get('/api/shorten')
    async shortenUrl() {
        return 'Hello API';
    }

    @Get('/api/check-slug-availability')
    async checkSlugAvailability(@Query('slug') slug: string) {
        this.urlShortenerService.checkSlugExists(slug);
        return true;
    }

    @Get('/redirect')
    @Render('redirect')
    async getRedirect() {
        return {
            title: 'my-dickson',
            description: 'description',
            image: 'wow',
        };
    }
}
