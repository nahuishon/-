import {
    Wave
} from 'js/wave.js';
import { Wave } from 'js/wave.js';

class App{
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.Wave = new Wave();

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
     }
     
     resize() {
         this.stageWidth = document.body.clientWidth;
         this.stageHeigt = document.body.clientHeight;
    
         this.canvas.Width = this.stageWidth * 2;
         this.canvas.Height = this.stageHeigt * 2;
         this.ctx.scale(2, 2);

         this.wave.resize(this.stageWidth, this.stageHeigt);
      }

     animate(t) {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeigt);

        let.wave.draw(this.ctx);
        
        requestAnimationFrame(this.animate.bind(this));
        }
      }
  
window.onload= () =>{
    new App();
};