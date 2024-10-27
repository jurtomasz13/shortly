import { Module } from "@nestjs/common";

import { UrlShortenerController } from "./url-shortener.controller";
import { UrlShortenerService } from "./url-shortener.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ShortenedUrl } from "../entities/shortened-url.entity";

@Module({
    imports: [
        // Temporary
        TypeOrmModule.forRoot({
            type: "postgres",
            host: "127.0.0.1",
            port: 5432,
            username: "user",
            password: "password",
            database: "database",
            autoLoadEntities: true,
            synchronize: true,
        }),
        TypeOrmModule.forFeature([ShortenedUrl]),
    ],
    controllers: [UrlShortenerController],
    providers: [UrlShortenerService],
})
export class UrlShortenerModule {}
