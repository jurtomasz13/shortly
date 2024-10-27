import {
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUrl,
    MaxLength,
} from 'class-validator';

export class CreateShortenedUrlDto {
    @IsNotEmpty()
    @IsUrl()
    originalUrl: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(40)
    customSlug: string;

    @IsOptional()
    @IsString()
    ogTitle?: string;

    @IsOptional()
    @IsString()
    ogDescription?: string;

    @IsOptional()
    @IsUrl()
    ogImage?: string;
}
