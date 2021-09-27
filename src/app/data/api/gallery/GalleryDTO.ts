export class GalleryDTO {
    constructor(
        public id: number,
        public imageName: string,
        public imageComments: any[],
        public description: string,
        public isDelete: boolean,
        public createDate: Date,
        public lastUpdateDate: Date

    ) { }
}
