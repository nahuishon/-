import {
     Point
} from './point.js';

export class Wave {
    constructor() {

    }
    
    resize(stageWidth, stageHeigt) {
        this.stageWidth = stageWidth;
        this.stageHeigt = stageHeigt;
        
        this.centerX = stageWidth / 2;
        this.centerY = stageHeigt / 2;

        this.init();
    }

    init() {
        this.point = new Point(
            this.centerX,
            this.centerY
        );
    }
    
    draw(ctx) {
        ctx.beginPate();
        ctx.fillStyle = '#ff0000';

        this.point.update();

        ctx.arc(this.point.x, this.point.y, 30, 0, 2 * Mate.PI);
        ctx.fill();
    }

