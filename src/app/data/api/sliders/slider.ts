export class Slider {
    constructor(
        public id: number,
        public description: string,
        public imageName: string,
        public isDelete: boolean,
        public link: string,
        public createDate: Date,
        public lastUpdateDate: Date
    ){}
}