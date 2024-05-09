import React, { useRef, useEffect } from 'react';

const FlowerAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let w: number, h: number, loopId: number, id: number, ctx: CanvasRenderingContext2D, particles: Particle[];

  const options = {
    particleColor: "rgba(255,255,255,0.1)",
  lineColor: "rgba(255,255,255,0)", // 선을 투명하게 설정
    particleAmount: 50,
    defaultRadius: 1,
    variantRadius: 1,
    defaultSpeed: 0.1,
    variantSpeed: 0.5,
    linkRadius: 300
  };

  const rgb = options.lineColor.match(/\d+/g)!;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    ctx = canvas.getContext("2d")!;
    resizeReset();
    initialiseElements();
    startAnimation();

    return () => {
      cancelAnimationFrame(loopId);
      cancelAnimationFrame(id);
    };
  }, []);

  const resizeReset = () => {
    w = window.innerWidth;
    h = window.innerHeight;
    canvasRef.current!.width = w;
    canvasRef.current!.height = h;
  };

  const initialiseElements = () => {
    particles = [];
    for (let i = 0; i < options.particleAmount; i++) {
      particles.push(new Particle());
    }
  };

  const startAnimation = () => {
    loopId = requestAnimationFrame(animationLoop);
  };

  const animationLoop = () => {
    ctx.clearRect(0, 0, w, h);
    drawScene();
    id = requestAnimationFrame(animationLoop);
  };

  const drawScene = () => {
    drawLine();
    drawParticle();
  };

  const drawParticle = () => {
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
  };

  const drawLine = () => {
    for (let i = 0; i < particles.length; i++) {
      linkPoints(particles[i], particles);
    }
  };

  const linkPoints = (point: Particle, hubs: Particle[]) => {
    for (let i = 0; i < hubs.length; i++) {
      const distance = checkDistance(point.x, point.y, hubs[i].x, hubs[i].y);
      const opacity = 1 - distance / options.linkRadius;
      if (opacity > 0) {
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${opacity})`;
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(hubs[i].x, hubs[i].y);
        ctx.closePath();
        ctx.stroke();
      }
    }
  };

  const checkDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  class Particle {
    x: number;
    y: number;
    color: string;
    radius: number;
    speed: number;
    directionAngle: number;
    vector: { x: number; y: number; };

    constructor() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.color = options.particleColor;
      this.radius = options.defaultRadius + Math.random() * options.variantRadius;
      this.speed = options.defaultSpeed + Math.random() * options.variantSpeed;
      this.directionAngle = Math.floor(Math.random() * 360);
      this.vector = {
        x: Math.cos(this.directionAngle) * this.speed,
        y: Math.sin(this.directionAngle) * this.speed
      };
    }

    update() {
      this.border();
      this.x += this.vector.x;
      this.y += this.vector.y;
    }

    border() {
      if (this.x >= w || this.x <= 0) {
        this.vector.x *= -1;
      }
      if (this.y >= h || this.y <= 0) {
        this.vector.y *= -1;
      }
      if (this.x > w) this.x = w;
      if (this.y > h) this.y = h;
      if (this.x < 0) this.x = 0;
      if (this.y < 0) this.y = 0;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  return (
    <canvas id="canvas" ref={canvasRef}></canvas>
  );
};

export default FlowerAnimation;