/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { UrlShortenerModule } from './shortener/url-shortener.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(
        UrlShortenerModule
    );

    app.useStaticAssets(
        join(__dirname, '../../..', 'apps', 'backend', 'src', 'assets')
    );
    app.setBaseViewsDir(
        join(__dirname, '../../..', 'apps', 'backend', 'src', 'views')
    );
    app.setViewEngine('hbs');

    const port = process.env.PORT || 3000;
    await app.listen(port);
    Logger.log(`🚀 Application is running on: http://localhost:${port}/`);
}

bootstrap();
