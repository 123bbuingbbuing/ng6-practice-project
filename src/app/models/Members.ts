export interface Members {
    id: number;
    hangeul: string;
    name: string;
    birthday: string;
    height: string;
    nationality: string;
    bloodtype: string;
    hometown: string;
    languages: string;
    entertainment: string;
    profilePic: string;
    gallery?: any[];
    position?: string;
    albums?: [{
        album?: string,
        thumbnail?: string
    }];
    photos?: string;
    tracklist?: [{
        trackNo?: number;
        title?: string;
        genre?: string;
        lyricsBy?: string;
        composedBy?: string;
    }]
}
