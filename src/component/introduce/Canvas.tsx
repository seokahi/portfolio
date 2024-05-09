import React, { useEffect } from 'react';

const StarsAndMoonAnimation: React.FC = () => {
  let canvas: HTMLCanvasElement | null = null;
  let ctx: CanvasRenderingContext2D | null = null;
  let w: number = 0;
  let h: number = 0;
  let stars: Star[] = [];
  let meteors: Meteor[] = [];

  useEffect(() => {
    if (!canvas) return;

    ctx = canvas.getContext("2d");
    if (!ctx) return;

    resizeReset();
    for (let a = 0; a < w * h * 0.0001; a++) {
      stars.push(new Star());
    }
    for (let b = 0; b < 2; b++) {
      meteors.push(new Meteor());
    }
    animationLoop();

    const resizeHandler = () => {
      resizeReset();
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const resizeReset = () => {
    if (!canvas) return;

    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };

  const animationLoop = () => {
    if (!ctx) return;

    ctx.clearRect(0, 0, w, h);
    drawScene();
    requestAnimationFrame(animationLoop);
  };

  const drawScene = () => {
    if ( !ctx) return;

    stars.forEach((star) => {
      if (!ctx) return;
      star.update();
      star.draw();
    });
    meteors.forEach((meteor) => {
      if (!ctx) return;
      meteor.update();
      meteor.draw();
    });
  };

 
  class Star {
    x: number;
    y: number;
    size: number;
    blinkChance: number;
    alpha: number;
    alphaChange: number;

    constructor() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.size = Math.random() + 0.5;
      this.blinkChance = 0.005;
      this.alpha = 1;
      this.alphaChange = 0;
    }

    draw() {
      if (!ctx) return;

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
      ctx.fill();
      ctx.closePath();
    }

    update() {
      if (this.alphaChange === 0 && Math.random() < this.blinkChance) {
        this.alphaChange = -1;
      } else if (this.alphaChange !== 0) {
        this.alpha += this.alphaChange * 0.05;
        if (this.alpha <= 0) {
          this.alphaChange = 1;
        } else if (this.alpha >= 1) {
          this.alphaChange = 0;
        }
      }
    }
  }

  class Meteor {
    x: number;
    y: number;
    size: number;
    speed: number;

    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * w + 300;
      this.y = -100;
      this.size = Math.random() * 2 + 0.5;
      this.speed = (Math.random() + 0.5) * 5;
    }

    draw() {
      if (!ctx) return;

      ctx.save();
      ctx.strokeStyle = "rgba(255, 255, 255, .1)";
      ctx.lineCap = "round";
      ctx.shadowColor = "rgba(255, 255, 255, 1)";
      ctx.shadowBlur = 10;
      for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineWidth = this.size;
        ctx.lineTo(this.x + 10 * (i + 1), this.y - 10 * (i + 1));
        ctx.stroke();
        ctx.closePath();
      }
      ctx.restore();
    }

    update() {
      this.x -= this.speed;
      this.y += this.speed;
      if (this.y >= h + 100) {
        this.reset();
      }
    }
  }

  return (
    <>
      <canvas id="canvas" ref={(ref) => (canvas = ref)}></canvas>
    </>
  );
};

export default StarsAndMoonAnimation;
