import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class ShortenedUrl {
    // For now, later change to Snowflake ID
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 2083 }) // URL length limit
    originalUrl: string;

    @Column({ type: "varchar", unique: true })
    shortenedUrl: string;

    @Column({ type: "varchar", nullable: true })
    ogTitle: string;

    @Column({ type: "varchar", nullable: true })
    ogDescription: string;

    @Column({ type: "varchar", nullable: true })
    ogImage: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;
}
