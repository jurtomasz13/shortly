import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShortenedUrl } from '../entities/shortened-url.entity';
import { Repository } from 'typeorm';
import * as validator from 'validator';

@Injectable()
export class UrlShortenerService {
    constructor(
        @InjectRepository(ShortenedUrl)
        private readonly shortenedUrlRepository: Repository<ShortenedUrl>
    ) {}

    createShortUrl(customSlug: string) {
        const sanitizedSlug = this.sanitizeSlug(customSlug);
        this.validateSlug(sanitizedSlug);
        this.checkSlugExists(sanitizedSlug);
        return sanitizedSlug;
    }

    sanitizeSlug(slug: string) {
        const escapedSlug = validator.escape(slug);
        return escapedSlug.replace(/%20/g, '-').toLowerCase();
    }

    validateSlug(slug: string) {
        if (!/^[a-z0-9-_]+$/i.test(slug)) {
            throw new BadRequestException(
                'Custom slug contains invalid characters.'
            );
        }
    }

    checkSlugExists(slug: string) {
        const existingSlug = this.shortenedUrlRepository.findOne({
            where: {
                shortenedUrl: slug,
            },
        });

        if (existingSlug) {
            throw new BadRequestException('Custom slug already exists.');
        }
    }
}
