import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class VerifySlugDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(40)
    customSlug: string;
}
