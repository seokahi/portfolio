// // // // // import React, { useEffect } from 'react';

// // // // // const StarsAndMoonAnimation: React.FC = () => {
// // // // //   let canvas: HTMLCanvasElement | null = null;
// // // // //   let ctx: CanvasRenderingContext2D | null = null;
// // // // //   let w: number = 0;
// // // // //   let h: number = 0;
// // // // //   let stars: Star[] = [];
// // // // //   let meteors: Meteor[] = [];

// // // // //   useEffect(() => {
// // // // //     if (!canvas) return;

// // // // //     ctx = canvas.getContext("2d");
// // // // //     if (!ctx) return;

// // // // //     resizeReset();
// // // // //     for (let a = 0; a < w * h * 0.0001; a++) {
// // // // //       stars.push(new Star());
// // // // //     }
// // // // //     for (let b = 0; b < 2; b++) {
// // // // //       meteors.push(new Meteor());
// // // // //     }
// // // // //     animationLoop();

// // // // //     const resizeHandler = () => {
// // // // //       resizeReset();
// // // // //     };

// // // // //     window.addEventListener("resize", resizeHandler);

// // // // //     return () => {
// // // // //       window.removeEventListener("resize", resizeHandler);
// // // // //     };
// // // // //   }, []);

// // // // //   const resizeReset = () => {
// // // // //     if (!canvas) return;

// // // // //     w = canvas.width = window.innerWidth;
// // // // //     h = canvas.height = window.innerHeight;
// // // // //   };

// // // // //   const animationLoop = () => {
// // // // //     if (!ctx) return;

// // // // //     ctx.clearRect(0, 0, w, h);
// // // // //     drawScene();
// // // // //     requestAnimationFrame(animationLoop);
// // // // //   };

// // // // //   const drawScene = () => {
// // // // //     if (!ctx) return;

// // // // //     stars.forEach((star) => {
// // // // //       if (!ctx) return;
// // // // //       star.update();
// // // // //       star.draw();
// // // // //     });
// // // // //     meteors.forEach((meteor) => {
// // // // //       if (!ctx) return;
// // // // //       meteor.update();
// // // // //       meteor.draw();
// // // // //     });
// // // // //   };

// // // // //   class Star {
// // // // //     x: number;
// // // // //     y: number;
// // // // //     size: number;
// // // // //     blinkChance: number;
// // // // //     alpha: number;
// // // // //     alphaChange: number;

// // // // //     constructor() {
// // // // //       this.x = Math.random() * w;
// // // // //       this.y = Math.random() * h;
// // // // //       this.size = Math.random() + 0.5;
// // // // //       this.blinkChance = 0.005;
// // // // //       this.alpha = 1;
// // // // //       this.alphaChange = 0;
// // // // //     }

// // // // //     draw() {
// // // // //       if (!ctx) return;

// // // // //       ctx.beginPath();
// // // // //       ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
// // // // //       ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
// // // // //       ctx.fill();
// // // // //       ctx.closePath();
// // // // //     }

// // // // //     update() {
// // // // //       if (!ctx) return;

// // // // //       if (this.alphaChange === 0 && Math.random() < this.blinkChance) {
// // // // //         this.alphaChange = -1;
// // // // //       } else if (this.alphaChange !== 0) {
// // // // //         this.alpha += this.alphaChange * 0.05;
// // // // //         if (this.alpha <= 0) {
// // // // //           this.alphaChange = 1;
// // // // //         } else if (this.alpha >= 1) {
// // // // //           this.alphaChange = 0;
// // // // //         }
// // // // //       }
// // // // //     }
// // // // //   }

// // // // //   class Meteor {
// // // // //     x: number;
// // // // //     y: number;
// // // // //     size: number;
// // // // //     speed: number;

// // // // //     constructor() {
// // // // //       this.reset();
// // // // //     }

// // // // //     reset() {
// // // // //       this.x = Math.random() * w;
// // // // //       this.y = -100;
// // // // //       this.size = Math.random() * 2 + 0.5;
// // // // //       this.speed = (Math.random() + 0.5) * 5;
// // // // //     }

// // // // //     draw() {
// // // // //       if (!ctx) return;

// // // // //       ctx.save();
// // // // //       ctx.strokeStyle = "rgba(255, 255, 255, .1)";
// // // // //       ctx.lineCap = "round";
// // // // //       ctx.shadowColor = "rgba(255, 255, 255, 1)";
// // // // //       ctx.shadowBlur = 10;
// // // // //       for (let i = 0; i < 10; i++) {
// // // // //         ctx.beginPath();
// // // // //         ctx.moveTo(this.x, this.y);
// // // // //         ctx.lineWidth = this.size;
// // // // //         ctx.lineTo(this.x + 10 * (i + 1), this.y - 10 * (i + 1));
// // // // //         ctx.stroke();
// // // // //         ctx.closePath();
// // // // //       }
// // // // //       ctx.restore();
// // // // //     }

// // // // //     update() {
// // // // //       this.x -= this.speed;
// // // // //       this.y += this.speed;
// // // // //       if (this.y >= h + 100) {
// // // // //         this.reset();
// // // // //       }
// // // // //     }
// // // // //   }

// // // // //   return (
// // // // //     <>
// // // // //       <canvas id="canvas" style={{ position: 'absolute', top: '0' }} ref={(ref) => (canvas = ref)}></canvas>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default StarsAndMoonAnimation;

// // // // class Main {
// // // //   c: HTMLCanvasElement;
// // // //   ctx: CanvasRenderingContext2D;
// // // //   vx: number | undefined;
// // // //   vy: number | undefined;
// // // //   cubes: Cube[] = [];
// // // //   angY: number;
// // // //   angX: number;

// // // //   constructor(c: HTMLCanvasElement) {
// // // //     this.c = c;
// // // //     this.ctx = this.c.getContext('2d')!;
// // // //     this.angY = Math.PI / 180 * 1;
// // // //     this.angX = Math.PI / 180 * 1;
// // // //   }

// // // //   base(x: number, y: number) {
// // // //     this.vx = x;
// // // //     this.vy = y;
// // // //   }

// // // //   build(x: number, y: number, z: number, r: number) {
// // // //     this.cubes.push(new Cube(this, x, y, z, r));
// // // //   }

// // // //   draw() {
// // // //     this.ctx.clearRect(0, 0, this.c.width, this.c.height);
// // // //     this.ctx.fillStyle = 'hsla(360, 5%, 85%, 1)';
// // // //     this.ctx.fillRect(0, 0, this.c.width, this.c.height);

// // // //     this.cubes.forEach(cube => cube.draw());
// // // //   }
// // // // }

// // // // class Hexa {
// // // //   cube: Cube;
// // // //   x: number;
// // // //   y: number;
// // // //   z: number;
// // // //   x2: number | undefined;
// // // //   y2: number | undefined;

// // // //   constructor(cube: Cube, x: number, y: number, z: number) {
// // // //     this.cube = cube;
// // // //     this.x = x;
// // // //     this.y = y;
// // // //     this.z = z;
// // // //   }

// // // //   rotY() {
// // // //     const cosy = Math.cos(this.cube.angY);
// // // //     const siny = Math.sin(this.cube.angY);
// // // //     const x1 = this.z * siny + this.x * cosy;
// // // //     const z1 = this.z * cosy - this.x * siny;
// // // //     this.x = x1;
// // // //     this.z = z1;
// // // //   }

// // // //   rotX() {
// // // //     const cosx = Math.cos(this.cube.angX);
// // // //     const sinx = Math.sin(this.cube.angX);
// // // //     const y1 = this.y * cosx - this.z * sinx;
// // // //     const z1 = this.y * sinx + this.z * cosx;
// // // //     this.y = y1;
// // // //     this.z = z1;
// // // //   }

// // // //   pos(a: any) {
// // // //     const fl = 300;
// // // //     const scale = fl / (fl + this.z);
// // // //     this.x2 = this.cube._main.vx! + this.x * scale;
// // // //     this.y2 = this.cube._main.vy! + this.y * scale;
// // // //   }

// // // //   draw() {
// // // //     this.rotX();
// // // //     this.rotY();
// // // //     this.pos(this);
// // // //   }
// // // // }

// // // // class Cube {
// // // //   _main: Main;
// // // //   x: number;
// // // //   y: number;
// // // //   z: number;
// // // //   r: number;
// // // //   angX: number;
// // // //   angY: number;
// // // //   p: Hexa[] = [];

// // // //   constructor(_main: Main, x: number, y: number, z: number, r: number) {
// // // //     this._main = _main;
// // // //     this.x = x;
// // // //     this.y = y;
// // // //     this.z = z;
// // // //     this.r = r;
// // // //     this.angX = Math.PI / 180 * 1;
// // // //     this.angY = Math.PI / 180 * 1;
// // // //     this.set();
// // // //   }

// // // //   set() {
// // // //     this.p[0] = new Hexa(this, this.x - this.r, this.y - this.r, this.z - this.r);
// // // //     this.p[1] = new Hexa(this, this.x - this.r, this.y + this.r, this.z - this.r);
// // // //     this.p[2] = new Hexa(this, this.x + this.r, this.y + this.r, this.z - this.r);
// // // //     this.p[3] = new Hexa(this, this.x + this.r, this.y - this.r, this.z - this.r);
// // // //     this.p[4] = new Hexa(this, this.x - this.r, this.y - this.r, this.z + this.r);
// // // //     this.p[5] = new Hexa(this, this.x - this.r, this.y + this.r, this.z + this.r);
// // // //     this.p[6] = new Hexa(this, this.x + this.r, this.y + this.r, this.z + this.r);
// // // //     this.p[7] = new Hexa(this, this.x + this.r, this.y - this.r, this.z + this.r);
// // // //   }

// // // //   draw() {
// // // //     this.p.forEach(hexa => hexa.draw());
// // // //     this.mv();
// // // //   }

// // // //   mv() {
// // // //     this.x = this.y = this.z = 0;
// // // //     this.p.forEach(point => {
// // // //       this.x += point.x;
// // // //       this.y += point.y;
// // // //       this.z += point.z;
// // // //     });
// // // //     this.x /= 8;
// // // //     this.y /= 8;
// // // //     this.z /= 8;
// // // //   }
// // // // }

// // // // const c = document.getElementById('canv') as HTMLCanvasElement;
// // // // const main = new Main(c);
// // // // main.base(window.innerWidth / 2, window.innerHeight / 2);

// // // // const z = 30;
// // // // main.build(0, 0, z, 30);
// // // // main.build(1, 1, z, 15);
// // // // main.build(60, 0, z, 20);
// // // // // 여기에 나머지 큐브 추가...

// // // // function run() {
// // // //   window.requestAnimationFrame(run);
// // // //   main.draw();
// // // // }
// // // // run();

// // // // window.addEventListener('resize', function() {
// // // //   c.width = window.innerWidth;
// // // //   c.height = window.innerHeight;
// // // // });

// // // import React, { useEffect, useRef } from 'react';

// // // function CubeAnimation() {
// // //   const canvasRef = useRef(null);

// // //   useEffect(() => {
// // //     const canvas = canvasRef.current;
// // //     const ctx = canvas.getContext('2d');
// // //     let w = canvas.width = window.innerWidth;
// // //     let h = canvas.height = window.innerHeight;
// // //     const _main = new Main(canvas);
// // //     _main.base(w / 2, h / 2);

// // //     // 큐브 구성
// // //     _main.build(0, 0, 30, 30);
// // //     _main.build(1, 1, 30, 15);
// // //     _main.build(60, 0, 30, 20);
// // //     _main.build(-60, 0, 30, 20);
// // //     // ... 큐브 구성을 위한 나머지 코드

// // //     function run() {
// // //       ctx.clearRect(0, 0, canvas.width, canvas.height);
// // //       _main.draw();
// // //       requestAnimationFrame(run);
// // //     }
// // //     run();

// // //     window.addEventListener('resize', function () {
// // //       w = canvas.width = window.innerWidth;
// // //       h = canvas.height = window.innerHeight;
// // //       _main.base(w / 2, h / 2);
// // //     }, false);

// // //     return () => {
// // //       window.removeEventListener('resize');
// // //     };
// // //   }, []);

// // //   return <canvas ref={canvasRef} style={{ position: 'absolute', top: '0' }}></canvas>;
// // // }

// // // export default CubeAnimation;

// // import React, { useEffect, useRef } from 'react';

// // function CubeAnimation() {
// //   const canvasRef = useRef(null);

// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     const ctx = canvas.getContext('2d');
// //     let w = canvas.width = window.innerWidth;
// //     let h = canvas.height = window.innerHeight;
// //     const _main = new Main(canvas);
// //     _main.base(w / 2, h / 2);

// //     // 큐브 구성
// //     _main.build(0, 0, 30, 30);
// //     _main.build(1, 1, 30, 15);
// //     _main.build(60, 0, 30, 20);
// //     _main.build(-60, 0, 30, 20);
// //     _main.build(0, 0, -30, 30);
// //     _main.build(1, 1, -30, 15);
// //     _main.build(60, 0, -30, 20);
// //     _main.build(-60, 0, -30, 20);
// //     _main.build(0, 0, -90, 30);
// //     _main.build(1, 1, -90, 15);
// //     _main.build(60, 0, -90, 20);
// //     _main.build(-60, 0, -90, 20);
// //     _main.build(0, 60, 30, 20);
// //     _main.build(0, 60, -30, 20);
// //     _main.build(0, 60, -90, 20);
// //     _main.build(60, 60, 30, 20);
// //     _main.build(-60, 60, 30, 20);
// //     _main.build(60, -60, 30, 20);
// //     _main.build(0, -60, 30, 20);
// //     _main.build(60, 60, -30, 20);
// //     _main.build(-60, 60, -30, 20);
// //     _main.build(60, -60, -30, 20);
// //     _main.build(0, -60, -30, 20);
// //     _main.build(60, 60, -90, 20);
// //     _main.build(-60, 60, -90, 20);
// //     _main.build(60, -60, -90, 20);
// //     _main.build(0, -60, -90, 20);
// //     _main.build(-60, -60, 30, 20);
// //     _main.build(-60, -60, -30, 20);
// //     _main.build(-60, -60, -90, 20);

// //     function run() {
// //       ctx.clearRect(0, 0, canvas.width, canvas.height);
// //       _main.draw();
// //       requestAnimationFrame(run);
// //     }
// //     run();

// //     const resizeHandler = () => {
// //       w = canvas.width = window.innerWidth;
// //       h = canvas.height = window.innerHeight;
// //       _main.base(w / 2, h / 2);
// //     };
// //     window.addEventListener('resize', resizeHandler);

// //     return () => {
// //       window.removeEventListener('resize', resizeHandler);
// //     };
// //   }, []);

// //   return <canvas ref={canvasRef} style={{ position: 'absolute', top: '0' }}></canvas>;
// // }

// // function Main(c) {
// //   this.c = c;
// //   this.$ = this.c.getContext('2d');

// //   this.vx = undefined;
// //   this.vy = undefined;
// //   this.cubes = [];
// //   this.angY = Math.PI / 180 * 1;
// //   this.angX = Math.PI / 180 * 1;
// // }

// // Main.prototype = {
// //   base: function(x, y) {
// //     this.vx = x;
// //     this.vy = y;
// //   },

// //   build: function(x, y, z, r) {
// //     this.cubes.push(new Cube(this, x, y, z, r));
// //   },
// //   draw: function() {
// //     this.$.clearRect(0, 0, this.c.width, this.c.height);
// //     this.$.fillStyle = 'hsla(360, 5%, 85%, 1)';
// //     this.$.fillRect(0, 0, this.c.width, this.c.height);
// //     var t1 = "hexahedra".split("").join(String.fromCharCode(0x2004));
// //     this.$.font = "3em Poiret One";
// //     this.$.fillStyle = 'hsla(0,0%,5%,1)';
// //     this.$.fillText(t1, (this.c.width - this.$.measureText(t1).width) * 0.5, this.c.height * 0.2);
// //     var t2 = "polyhedron".split("").join(String.fromCharCode(0x2004));
// //     this.$.font = "3em Poiret One";
// //     this.$.fillStyle = 'hsla(0,0%,5%,1)';
// //     this.$.fillText(t2, (this.c.width - this.$.measureText(t2).width) * 0.5, this.c.height * 0.9);
// //     var that = this;
// //     this.cubes.sort(function(a, b) {
// //       if (b.z !== a.z)
// //         return b.z - a.z;
// //       else if (b.idx_x !== a.idx_x) {

// //         if (that.x >= 0)
// //           return b.x - a.x;
// //         else
// //           return a.x - b.x;
// //       } else {
// //         if (that.y >= 0)
// //           return b.y - a.y;
// //         else
// //           return a.y - b.y;
// //       }
// //     });
// //     for (var i in this.cubes)
// //       this.cubes[i].draw();
// //   }
// // };

// // function Hexa(cube, x, y, z) {
// //   this.cube = cube;

// //   this.x = x;
// //   this.y = y;
// //   this.z = z;

// //   this.x2 = undefined;
// //   this.y2 = undefined;
// // }

// // Hexa.prototype = {
// //   rotY: function() {
// //     var cosy = Math.cos(this.cube.angY);
// //     var siny = Math.sin(this.cube.angY);
// //     var x1 = this.z * siny + this.x * cosy;
// //     var z1 = this.z * cosy - this.x * siny;
// //     this.x = x1;
// //     this.z = z1;

// //   },

// //   rotX: function() {
// //     var cosx = Math.cos(this.cube.angX);
// //     var sinx = Math.sin(this.cube.angX);

// //     var y1 = this.y * cosx - this.z * sinx;
// //     var z1 = this.y * sinx + this.z * cosx;
// //     this.y = y1;
// //     this.z = z1;
// //   },

// //   pos: function(a) {
// //     var fl = 300;
// //     var scale = fl / (fl + this.z);
// //     this.x2 = this.cube._main.vx + this.x * scale;
// //     this.y2 = this.cube._main.vy + this.y * scale;
// //   },

// //   draw: function() {
// //     this.rotX();
// //     this.rotY();
// //     this.pos();

// //   }
// // };

// // function Cube(_main, x, y, z, r) {
// //   this._main = _main;

// //   this.x = x;
// //   this.y = y;
// //   this.z = z;
// //   this.r = r;

// //   this.angX = Math.PI / 180 * 1;
// //   this.angY = Math.PI / 180 * 1;
// //   this.p = [];

// //   this.arr = [];

// //   this.set();
// // }

// // Cube.prototype = {
// //   set: function() {
// //     this.p[0] = new Hexa(this, this.x - this.r, this.y - this.r, this.z - this.r);
// //     this.p[1] = new Hexa(this, this.x - this.r, this.y + this.r, this.z - this.r);
// //     this.p[2] = new Hexa(this, this.x + this.r, this.y + this.r, this.z - this.r);
// //     this.p[3] = new Hexa(this, this.x + this.r, this.y - this.r, this.z - this.r);
// //     this.p[4] = new Hexa(this, this.x - this.r, this.y - this.r, this.z + this.r);
// //     this.p[5] = new Hexa(this, this.x - this.r, this.y + this.r, this.z + this.r);
// //     this.p[6] = new Hexa(this, this.x + this.r, this.y + this.r, this.z + this.r);
// //     this.p[7] = new Hexa(this, this.x + this.r, this.y - this.r, this.z + this.r);

// //     this.arr[0] = new Side(this, this.p[0], this.p[1], this.p[2], this.p[3]);
// //     this.arr[1] = new Side(this, this.p[3], this.p[2], this.p[6], this.p[7]);
// //     this.arr[2] = new Side(this, this.p[4], this.p[5], this.p[6], this.p[7]);
// //     this.arr[3] = new Side(this, this.p[4], this.p[5], this.p[1], this.p[0]);
// //     this.arr[4] = new Side(this, this.p[0], this.p[3], this.p[7], this.p[4]);
// //     this.arr[5] = new Side(this, this.p[5], this.p[1], this.p[2], this.p[6]);
// //   },

// //   draw: function() {
// //     for (var i = 0; i < 8; i++)
// //       this.p[i].draw();
// //     this.mv();

// //     for (var i = 0; i < 6; i++)
// //       this.arr[i].ang = this.arr[i]._ang();
// //     this.arr.sort(function(a, b) {
// //       return a.ang > b.ang;
// //     });
// //     for (var i = 0; i < 6; i++) {
// //       if (this.arr[i].ang > 0)
// //         this.arr[i].draw();
// //     }
// //   },

// //   mv: function() {
// //     this.x = this.y = this.z = 0;
// //     for (var i = 0; i < 8; i++) {
// //       this.x += this.p[i].x;
// //       this.y += this.p[i].y;
// //       this.z += this.p[i].z;
// //     }
// //     this.x /= 8;
// //     this.y /= 8;
// //     this.z /= 8;
// //   }
// // };

// // function Side(cube, a, b, c, d) {
// //   this.cube = cube;
// //   this.a = a;
// //   this.b = b;
// //   this.c = c;
// //   this.d = d;
// //   this.alpha = rnd(0.7, .9);
// //   this.color = 'hsla(' + Math.random() * 360 + ',50%,75%,' + this.alpha + ')';
// //   this.ang = undefined;
// // }

// // Side.prototype = {
// //   draw: function() {
// //     var $ = this.cube._main.$;
// //     var g = $.createLinearGradient(this.a.x2 + this.b.x2, this.a.y2 + this.b.y2, 8, this.c.x2, this.d.y2, this.r);
// //     g.addColorStop(0, 'hsla(360, 5%, 85%, 1)');
// //     g.addColorStop(0.5, this.color);
// //     g.addColorStop(1, 'hsla(210, 15%, 95%, 0)');
// //     $.beginPath();
// //     $.fillStyle = g;
// //     $.strokeStyle = 'hsla(0,0%,25%,.07)';
// //     $.moveTo(this.a.x2, this.a.y2);
// //     $.lineTo(this.b.x2, this.b.y2);
// //     $.lineTo(this.c.x2, this.c.y2);
// //     $.lineTo(this.d.x2, this.d.y2);
// //     $.closePath();
// //     $.fill();
// //     $.stroke();
// //   },

// //   idx: function() {
// //     this.idx_x = (this.a.x + this.b.x + this.c.x + this.d.x) / 4;
// //     this.idx_y = (this.a.y + this.b.y + this.c.y + this.d.y) / 4;
// //     this.idx_z = (this.a.z + this.b.z + this.c.z + this.d.z) / 4;
// //   },

// //   _ang: function() {
// //     var x = (this.a.x + this.b.x + this.c.x + this.d.x) / 4 - this.cube.x;
// //     var y = (this.a.y + this.b.y + this.c.y + this.d.y) / 4 - this.cube.y;
// //     var z = (this.a.z + this.b.z + this.c.z + this.d.z) / 4 - this.cube.z;
// //     var v = new V(x, y, z);

// //     var x = 0 - (this.a.x + this.b.x + this.c.x + this.d.x) / 4;
// //     var y = 0 - (this.a.y + this.b.y + this.c.y + this.d.y) / 4;
// //     var z = -500 - (this.a.z + this.b.z + this.c.z + this.d.z) / 4;
// //     var v2 = new V(x, y, z);
// //     return v.pt(v2);
// //   }
// // };

// // function V(x, y, z) {
// //   this.x = x;
// //   this.y = y;
// //   this.z = z;
// // }

// // var rnd = function(min, max) {
// //   return Math.random() * (max - min) + min;
// // }

// // V.prototype.pt = function(v) {
// //   return this.x * v.x + this.y * v.y + this.z * v.z;
// // }

// // export default CubeAnimation;
// // // // import React, { useEffect } from 'react';

// // // // const StarsAndMoonAnimation: React.FC = () => {
// // // //   let canvas: HTMLCanvasElement | null = null;
// // // //   let ctx: CanvasRenderingContext2D | null = null;
// // // //   let w: number = 0;
// // // //   let h: number = 0;
// // // //   let stars: Star[] = [];
// // // //   let meteors: Meteor[] = [];

// // // //   useEffect(() => {
// // // //     if (!canvas) return;

// // // //     ctx = canvas.getContext("2d");
// // // //     if (!ctx) return;

// // // //     resizeReset();
// // // //     for (let a = 0; a < w * h * 0.0001; a++) {
// // // //       stars.push(new Star());
// // // //     }
// // // //     for (let b = 0; b < 2; b++) {
// // // //       meteors.push(new Meteor());
// // // //     }
// // // //     animationLoop();

// // // //     const resizeHandler = () => {
// // // //       resizeReset();
// // // //     };

// // // //     window.addEventListener("resize", resizeHandler);

// // // //     return () => {
// // // //       window.removeEventListener("resize", resizeHandler);
// // // //     };
// // // //   }, []);

// // // //   const resizeReset = () => {
// // // //     if (!canvas) return;

// // // //     w = canvas.width = window.innerWidth;
// // // //     h = canvas.height = window.innerHeight;
// // // //   };

// // // //   const animationLoop = () => {
// // // //     if (!ctx) return;

// // // //     ctx.clearRect(0, 0, w, h);
// // // //     drawScene();
// // // //     requestAnimationFrame(animationLoop);
// // // //   };

// // // //   const drawScene = () => {
// // // //     if (!ctx) return;

// // // //     stars.forEach((star) => {
// // // //       if (!ctx) return;
// // // //       star.update();
// // // //       star.draw();
// // // //     });
// // // //     meteors.forEach((meteor) => {
// // // //       if (!ctx) return;
// // // //       meteor.update();
// // // //       meteor.draw();
// // // //     });
// // // //   };

// // // //   class Star {
// // // //     x: number;
// // // //     y: number;
// // // //     size: number;
// // // //     blinkChance: number;
// // // //     alpha: number;
// // // //     alphaChange: number;

// // // //     constructor() {
// // // //       this.x = Math.random() * w;
// // // //       this.y = Math.random() * h;
// // // //       this.size = Math.random() + 0.5;
// // // //       this.blinkChance = 0.005;
// // // //       this.alpha = 1;
// // // //       this.alphaChange = 0;
// // // //     }

// // // //     draw() {
// // // //       if (!ctx) return;

// // // //       ctx.beginPath();
// // // //       ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
// // // //       ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
// // // //       ctx.fill();
// // // //       ctx.closePath();
// // // //     }

// // // //     update() {
// // // //       if (!ctx) return;

// // // //       if (this.alphaChange === 0 && Math.random() < this.blinkChance) {
// // // //         this.alphaChange = -1;
// // // //       } else if (this.alphaChange !== 0) {
// // // //         this.alpha += this.alphaChange * 0.05;
// // // //         if (this.alpha <= 0) {
// // // //           this.alphaChange = 1;
// // // //         } else if (this.alpha >= 1) {
// // // //           this.alphaChange = 0;
// // // //         }
// // // //       }
// // // //     }
// // // //   }

// // // //   class Meteor {
// // // //     x: number;
// // // //     y: number;
// // // //     size: number;
// // // //     speed: number;

// // // //     constructor() {
// // // //       this.reset();
// // // //     }

// // // //     reset() {
// // // //       this.x = Math.random() * w;
// // // //       this.y = -100;
// // // //       this.size = Math.random() * 2 + 0.5;
// // // //       this.speed = (Math.random() + 0.5) * 5;
// // // //     }

// // // //     draw() {
// // // //       if (!ctx) return;

// // // //       ctx.save();
// // // //       ctx.strokeStyle = "rgba(255, 255, 255, .1)";
// // // //       ctx.lineCap = "round";
// // // //       ctx.shadowColor = "rgba(255, 255, 255, 1)";
// // // //       ctx.shadowBlur = 10;
// // // //       for (let i = 0; i < 10; i++) {
// // // //         ctx.beginPath();
// // // //         ctx.moveTo(this.x, this.y);
// // // //         ctx.lineWidth = this.size;
// // // //         ctx.lineTo(this.x + 10 * (i + 1), this.y - 10 * (i + 1));
// // // //         ctx.stroke();
// // // //         ctx.closePath();
// // // //       }
// // // //       ctx.restore();
// // // //     }

// // // //     update() {
// // // //       this.x -= this.speed;
// // // //       this.y += this.speed;
// // // //       if (this.y >= h + 100) {
// // // //         this.reset();
// // // //       }
// // // //     }
// // // //   }

// // // //   return (
// // // //     <>
// // // //       <canvas id="canvas" style={{ position: 'absolute', top: '0' }} ref={(ref) => (canvas = ref)}></canvas>
// // // //     </>
// // // //   );
// // // // };

// // // // export default StarsAndMoonAnimation;

// // // class Main {
// // //   c: HTMLCanvasElement;
// // //   ctx: CanvasRenderingContext2D;
// // //   vx: number | undefined;
// // //   vy: number | undefined;
// // //   cubes: Cube[] = [];
// // //   angY: number;
// // //   angX: number;

// // //   constructor(c: HTMLCanvasElement) {
// // //     this.c = c;
// // //     this.ctx = this.c.getContext('2d')!;
// // //     this.angY = Math.PI / 180 * 1;
// // //     this.angX = Math.PI / 180 * 1;
// // //   }

// // //   base(x: number, y: number) {
// // //     this.vx = x;
// // //     this.vy = y;
// // //   }

// // //   build(x: number, y: number, z: number, r: number) {
// // //     this.cubes.push(new Cube(this, x, y, z, r));
// // //   }

// // //   draw() {
// // //     this.ctx.clearRect(0, 0, this.c.width, this.c.height);
// // //     this.ctx.fillStyle = 'hsla(360, 5%, 85%, 1)';
// // //     this.ctx.fillRect(0, 0, this.c.width, this.c.height);

// // //     this.cubes.forEach(cube => cube.draw());
// // //   }
// // // }

// // // class Hexa {
// // //   cube: Cube;
// // //   x: number;
// // //   y: number;
// // //   z: number;
// // //   x2: number | undefined;
// // //   y2: number | undefined;

// // //   constructor(cube: Cube, x: number, y: number, z: number) {
// // //     this.cube = cube;
// // //     this.x = x;
// // //     this.y = y;
// // //     this.z = z;
// // //   }

// // //   rotY() {
// // //     const cosy = Math.cos(this.cube.angY);
// // //     const siny = Math.sin(this.cube.angY);
// // //     const x1 = this.z * siny + this.x * cosy;
// // //     const z1 = this.z * cosy - this.x * siny;
// // //     this.x = x1;
// // //     this.z = z1;
// // //   }

// // //   rotX() {
// // //     const cosx = Math.cos(this.cube.angX);
// // //     const sinx = Math.sin(this.cube.angX);
// // //     const y1 = this.y * cosx - this.z * sinx;
// // //     const z1 = this.y * sinx + this.z * cosx;
// // //     this.y = y1;
// // //     this.z = z1;
// // //   }

// // //   pos(a: any) {
// // //     const fl = 300;
// // //     const scale = fl / (fl + this.z);
// // //     this.x2 = this.cube._main.vx! + this.x * scale;
// // //     this.y2 = this.cube._main.vy! + this.y * scale;
// // //   }

// // //   draw() {
// // //     this.rotX();
// // //     this.rotY();
// // //     this.pos(this);
// // //   }
// // // }

// // // class Cube {
// // //   _main: Main;
// // //   x: number;
// // //   y: number;
// // //   z: number;
// // //   r: number;
// // //   angX: number;
// // //   angY: number;
// // //   p: Hexa[] = [];

// // //   constructor(_main: Main, x: number, y: number, z: number, r: number) {
// // //     this._main = _main;
// // //     this.x = x;
// // //     this.y = y;
// // //     this.z = z;
// // //     this.r = r;
// // //     this.angX = Math.PI / 180 * 1;
// // //     this.angY = Math.PI / 180 * 1;
// // //     this.set();
// // //   }

// // //   set() {
// // //     this.p[0] = new Hexa(this, this.x - this.r, this.y - this.r, this.z - this.r);
// // //     this.p[1] = new Hexa(this, this.x - this.r, this.y + this.r, this.z - this.r);
// // //     this.p[2] = new Hexa(this, this.x + this.r, this.y + this.r, this.z - this.r);
// // //     this.p[3] = new Hexa(this, this.x + this.r, this.y - this.r, this.z - this.r);
// // //     this.p[4] = new Hexa(this, this.x - this.r, this.y - this.r, this.z + this.r);
// // //     this.p[5] = new Hexa(this, this.x - this.r, this.y + this.r, this.z + this.r);
// // //     this.p[6] = new Hexa(this, this.x + this.r, this.y + this.r, this.z + this.r);
// // //     this.p[7] = new Hexa(this, this.x + this.r, this.y - this.r, this.z + this.r);
// // //   }

// // //   draw() {
// // //     this.p.forEach(hexa => hexa.draw());
// // //     this.mv();
// // //   }

// // //   mv() {
// // //     this.x = this.y = this.z = 0;
// // //     this.p.forEach(point => {
// // //       this.x += point.x;
// // //       this.y += point.y;
// // //       this.z += point.z;
// // //     });
// // //     this.x /= 8;
// // //     this.y /= 8;
// // //     this.z /= 8;
// // //   }
// // // }

// // // const c = document.getElementById('canv') as HTMLCanvasElement;
// // // const main = new Main(c);
// // // main.base(window.innerWidth / 2, window.innerHeight / 2);

// // // const z = 30;
// // // main.build(0, 0, z, 30);
// // // main.build(1, 1, z, 15);
// // // main.build(60, 0, z, 20);
// // // // 여기에 나머지 큐브 추가...

// // // function run() {
// // //   window.requestAnimationFrame(run);
// // //   main.draw();
// // // }
// // // run();

// // // window.addEventListener('resize', function() {
// // //   c.width = window.innerWidth;
// // //   c.height = window.innerHeight;
// // // });

// // import React, { useEffect, useRef } from 'react';

// // function CubeAnimation() {
// //   const canvasRef = useRef(null);

// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     const ctx = canvas.getContext('2d');
// //     let w = canvas.width = window.innerWidth;
// //     let h = canvas.height = window.innerHeight;
// //     const _main = new Main(canvas);
// //     _main.base(w / 2, h / 2);

// //     // 큐브 구성
// //     _main.build(0, 0, 30, 30);
// //     _main.build(1, 1, 30, 15);
// //     _main.build(60, 0, 30, 20);
// //     _main.build(-60, 0, 30, 20);
// //     // ... 큐브 구성을 위한 나머지 코드

// //     function run() {
// //       ctx.clearRect(0, 0, canvas.width, canvas.height);
// //       _main.draw();
// //       requestAnimationFrame(run);
// //     }
// //     run();

// //     window.addEventListener('resize', function () {
// //       w = canvas.width = window.innerWidth;
// //       h = canvas.height = window.innerHeight;
// //       _main.base(w / 2, h / 2);
// //     }, false);

// //     return () => {
// //       window.removeEventListener('resize');
// //     };
// //   }, []);

// //   return <canvas ref={canvasRef} style={{ position: 'absolute', top: '0' }}></canvas>;
// // }

// // export default CubeAnimation;

// import React, { useEffect, useRef } from 'react';

// function CubeAnimation() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     let w = canvas.width = window.innerWidth;
//     let h = canvas.height = window.innerHeight;
//     const _main = new Main(canvas);
//     const spacingFactor = 1.05; // 큐브들 사이의 초기 간격을 설정하는 계수
// const rotationSpeed = 0.005; // 회전 속도를 설정

//     _main.base(w / 2, h / 2);

//     // 큐브 구성
//     _main.build(0, 0, 30, 30,spacingFactor,rotationSpeed);
//     _main.build(1, 1, 30, 15,spacingFactor,rotationSpeed);
//     _main.build(60, 0, 30, 20,spacingFactor,rotationSpeed);
//     _main.build(-60, 0, 30, 20,spacingFactor,rotationSpeed);
//     _main.build(0, 0, -30, 30,spacingFactor,rotationSpeed);
//     _main.build(1, 1, -30, 15,spacingFactor,rotationSpeed);
//     _main.build(60, 0, -30, 20,spacingFactor,rotationSpeed);
//     _main.build(-60, 0, -30, 20,spacingFactor,rotationSpeed);
//     _main.build(0, 0, -90, 30);
//     _main.build(1, 1, -90, 15);
//     _main.build(60, 0, -90, 20);
//     _main.build(-60, 0, -90, 20);
//     _main.build(0, 60, 30, 20);
//     _main.build(0, 60, -30, 20);
//     _main.build(0, 60, -90, 20);
//     _main.build(60, 60, 30, 20);
//     _main.build(-60, 60, 30, 20);
//     _main.build(60, -60, 30, 20);
//     _main.build(0, -60, 30, 20);
//     _main.build(60, 60, -30, 20);
//     _main.build(-60, 60, -30, 20);
//     _main.build(60, -60, -30, 20);
//     _main.build(0, -60, -30, 20);
//     _main.build(60, 60, -90, 20);
//     _main.build(-60, 60, -90, 20);
//     _main.build(60, -60, -90, 20);
//     _main.build(0, -60, -90, 20);
//     _main.build(-60, -60, 30, 20);
//     _main.build(-60, -60, -30, 20);
//     _main.build(-60, -60, -90, 20);

//     function run() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       _main.draw();
//       requestAnimationFrame(run);
//     }
//     run();

//     const resizeHandler = () => {
//       w = canvas.width = window.innerWidth;
//       h = canvas.height = window.innerHeight;
//       _main.base(w / 2, h / 2);
//     };
//     window.addEventListener('resize', resizeHandler);

//     return () => {
//       window.removeEventListener('resize', resizeHandler);
//     };
//   }, []);

//   return <canvas ref={canvasRef} style={{ position: 'absolute', top: '0' }}></canvas>;
// }

// function Main(c) {
//   this.c = c;
//   this.$ = this.c.getContext('2d');

//   this.vx = undefined;
//   this.vy = undefined;
//   this.cubes = [];
//   this.angY = Math.PI / 180 * 1;
//   this.angX = Math.PI / 180 * 1;
// }

// Main.prototype = {
//   base: function(x, y) {
//     this.vx = x;
//     this.vy = y;
//   },

//   build(x, y, z, r, spacingFactor, rotationSpeed) {
//     this.cubes.push(new Cube(this, x * spacingFactor, y * spacingFactor, z * spacingFactor, r, rotationSpeed));
//   },
//   draw: function() {
//     this.$.clearRect(0, 0, this.c.width, this.c.height);
//     this.$.fillStyle = 'hsla(360, 5%, 85%, 1)';
//     this.$.fillRect(0, 0, this.c.width, this.c.height);
//     var t1 = "hexahedra".split("").join(String.fromCharCode(0x2004));
//     this.$.font = "3em Poiret One";
//     this.$.fillStyle = 'hsla(0,0%,5%,1)';
//     this.$.fillText(t1, (this.c.width - this.$.measureText(t1).width) * 0.5, this.c.height * 0.2);
//     var t2 = "polyhedron".split("").join(String.fromCharCode(0x2004));
//     this.$.font = "3em Poiret One";
//     this.$.fillStyle = 'hsla(0,0%,5%,1)';
//     this.$.fillText(t2, (this.c.width - this.$.measureText(t2).width) * 0.5, this.c.height * 0.9);
//     var that = this;
//     this.cubes.sort(function(a, b) {
//       if (b.z !== a.z)
//         return b.z - a.z;
//       else if (b.idx_x !== a.idx_x) {

//         if (that.x >= 0)
//           return b.x - a.x;
//         else
//           return a.x - b.x;
//       } else {
//         if (that.y >= 0)
//           return b.y - a.y;
//         else
//           return a.y - b.y;
//       }
//     });
//     for (var i in this.cubes)
//       this.cubes[i].draw();
//   }
// };

// function Hexa(cube, x, y, z) {
//   this.cube = cube;

//   this.x = x;
//   this.y = y;
//   this.z = z;

//   this.x2 = undefined;
//   this.y2 = undefined;
// }

// Hexa.prototype = {
//   rotY: function() {
//     var cosy = Math.cos(this.cube.angY);
//     var siny = Math.sin(this.cube.angY);
//     var x1 = this.z * siny + this.x * cosy;
//     var z1 = this.z * cosy - this.x * siny;
//     this.x = x1;
//     this.z = z1;

//   },

//   rotX: function() {
//     var cosx = Math.cos(this.cube.angX);
//     var sinx = Math.sin(this.cube.angX);

//     var y1 = this.y * cosx - this.z * sinx;
//     var z1 = this.y * sinx + this.z * cosx;
//     this.y = y1;
//     this.z = z1;
//   },

//   pos: function(a) {
//     var fl = 300;
//     var scale = fl / (fl + this.z);
//     this.x2 = this.cube._main.vx + this.x * scale;
//     this.y2 = this.cube._main.vy + this.y * scale;
//   },

//   draw: function() {
//     this.rotX();
//     this.rotY();
//     this.pos();

//   }
// };

// function Cube(_main, x, y, z, r) {
//   this._main = _main;

//   this.x = x;
//   this.y = y;
//   this.z = z;
//   this.r = r;

//   this.angX = Math.PI / 180 * 1;
//   this.angY = Math.PI / 180 * 1;
//   this.p = [];

//   this.arr = [];

//   this.set();
// }

// Cube.prototype = {
//   set: function() {
//     this.p[0] = new Hexa(this, this.x - this.r, this.y - this.r, this.z - this.r);
//     this.p[1] = new Hexa(this, this.x - this.r, this.y + this.r, this.z - this.r);
//     this.p[2] = new Hexa(this, this.x + this.r, this.y + this.r, this.z - this.r);
//     this.p[3] = new Hexa(this, this.x + this.r, this.y - this.r, this.z - this.r);
//     this.p[4] = new Hexa(this, this.x - this.r, this.y - this.r, this.z + this.r);
//     this.p[5] = new Hexa(this, this.x - this.r, this.y + this.r, this.z + this.r);
//     this.p[6] = new Hexa(this, this.x + this.r, this.y + this.r, this.z + this.r);
//     this.p[7] = new Hexa(this, this.x + this.r, this.y - this.r, this.z + this.r);

//     this.arr[0] = new Side(this, this.p[0], this.p[1], this.p[2], this.p[3]);
//     this.arr[1] = new Side(this, this.p[3], this.p[2], this.p[6], this.p[7]);
//     this.arr[2] = new Side(this, this.p[4], this.p[5], this.p[6], this.p[7]);
//     this.arr[3] = new Side(this, this.p[4], this.p[5], this.p[1], this.p[0]);
//     this.arr[4] = new Side(this, this.p[0], this.p[3], this.p[7], this.p[4]);
//     this.arr[5] = new Side(this, this.p[5], this.p[1], this.p[2], this.p[6]);
//   },

//   draw: function() {
//     for (var i = 0; i < 8; i++)
//       this.p[i].draw();
//     this.mv();

//     for (var i = 0; i < 6; i++)
//       this.arr[i].ang = this.arr[i]._ang();
//     this.arr.sort(function(a, b) {
//       return a.ang > b.ang;
//     });
//     for (var i = 0; i < 6; i++) {
//       if (this.arr[i].ang > 0)
//         this.arr[i].draw();
//     }
//   },

//   mv: function() {
//     this.x = this.y = this.z = 0;
//     for (var i = 0; i < 8; i++) {
//       this.x += this.p[i].x;
//       this.y += this.p[i].y;
//       this.z += this.p[i].z;
//     }
//     this.x /= 8;
//     this.y /= 8;
//     this.z /= 8;
//   }
// };

// function Side(cube, a, b, c, d) {
//   this.cube = cube;
//   this.a = a;
//   this.b = b;
//   this.c = c;
//   this.d = d;
//   this.alpha = rnd(0.7, .9);
//   this.color = 'hsla(' + Math.random() * 360 + ',50%,75%,' + this.alpha + ')';
//   this.ang = undefined;
// }

// Side.prototype = {
//   draw: function() {
//     var $ = this.cube._main.$;
//     var g = $.createLinearGradient(this.a.x2 + this.b.x2, this.a.y2 + this.b.y2, 8, this.c.x2, this.d.y2, this.r);
//     g.addColorStop(0, 'hsla(360, 5%, 85%, 1)');
//     g.addColorStop(0.5, this.color);
//     g.addColorStop(1, 'hsla(210, 15%, 95%, 0)');
//     $.beginPath();
//     $.fillStyle = g;
//     $.strokeStyle = 'hsla(0,0%,25%,.07)';
//     $.moveTo(this.a.x2, this.a.y2);
//     $.lineTo(this.b.x2, this.b.y2);
//     $.lineTo(this.c.x2, this.c.y2);
//     $.lineTo(this.d.x2, this.d.y2);
//     $.closePath();
//     $.fill();
//     $.stroke();
//   },

//   idx: function() {
//     this.idx_x = (this.a.x + this.b.x + this.c.x + this.d.x) / 4;
//     this.idx_y = (this.a.y + this.b.y + this.c.y + this.d.y) / 4;
//     this.idx_z = (this.a.z + this.b.z + this.c.z + this.d.z) / 4;
//   },

//   _ang: function() {
//     var x = (this.a.x + this.b.x + this.c.x + this.d.x) / 4 - this.cube.x;
//     var y = (this.a.y + this.b.y + this.c.y + this.d.y) / 4 - this.cube.y;
//     var z = (this.a.z + this.b.z + this.c.z + this.d.z) / 4 - this.cube.z;
//     var v = new V(x, y, z);

//     var x = 0 - (this.a.x + this.b.x + this.c.x + this.d.x) / 4;
//     var y = 0 - (this.a.y + this.b.y + this.c.y + this.d.y) / 4;
//     var z = -500 - (this.a.z + this.b.z + this.c.z + this.d.z) / 4;
//     var v2 = new V(x, y, z);
//     return v.pt(v2);
//   }
// };

// function V(x, y, z) {
//   this.x = x;
//   this.y = y;
//   this.z = z;
// }

// var rnd = function(min, max) {
//   return Math.random() * (max - min) + min;
// }

// V.prototype.pt = function(v) {
//   return this.x * v.x + this.y * v.y + this.z * v.z;
// }

// export default CubeAnimation;

import React, { useRef, useEffect } from 'react';
import { gsap } from "https://esm.sh/gsap";

const CanvasComponent: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const text = textRef.current;
    const track = trackRef.current;
    const shape = shapeRef.current;

    const tl = gsap.timeline({ paused: true });

    tl
      .to(shape, {
        duration: 1,
        scale: 30,
        rotate: 240,
        ease: "Expo.easeIn"
      })
      .to(text, {
        duration: 1,
        translateX: 0,
        ease: "Power2.easeIn"
      }, 0);

    const scrollHandler = () => {
      const progress = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
      tl.progress(progress);
      document.body.style.setProperty("--scroll", progress.toString());
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div>
      <div ref={trackRef} className="track">
        <div className='overlay'>
          <div className='text' ref={textRef}>
            <div className='text-inner'>
              WHERE DIFFERENT IS THE STANDARD. CHOOSE US.
            </div>
          </div>
          <div className='shape' ref={shapeRef}>
            <div className='scale'>
              <div className='rotate'>
                <div className='img'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162 162" style={{ enableBackground: "new 0 0 162 162" }} xmlSpace="preserve">
                    <path className="hsc-img-path" d="M108 88.7c-10.8 0-19.7 8.8-19.7 19.7v47.4c0 1.9-1.5 3.4-3.4 3.4h-8.6c-1.9 0-3.4-1.5-3.4-3.4v-47.4c0-10.8-8.8-19.7-19.7-19.7H6.4c-1.9 0-3.4-1.5-3.4-3.4v-8c0-1.9 1.5-3.4 3.4-3.4h46.9c10.8 0 19.7-8.8 19.6-19.7V6.4c0-1.9 1.5-3.4 3.4-3.4H85c1.9 0 3.4 1.5 3.4 3.4v47.8c0 10.8 8.8 19.7 19.7 19.7h46.6c1.9 0 3.4 1.5 3.4 3.4v8c0 1.9-1.5 3.4-3.4 3.4H108z" style={{ fillRule: "evenodd", clipRule: "evenodd" }} fill="#000"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className='gradient'></div>
        </div>
      </div>
      <style>
        {`
        body {
          margin:0;
        }
        
        .overlay {
          position: fixed;
          height: 100vh;
          top: 0;
        }
        
        .text {
          display: flex;
          height: 100%;
          width: 100%;
          justify-content:center;
          align-items: center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        
        .text-inner {
          transform: translatex(50vw);
          font-size: 2.5rem;
        }
        
        .track{ 
         height: 300vh;
        }
        
        .gradient {
          width: 100%;
          height: 100%;
          background: linear-gradient(
            255deg,
            #facb0e,
            #f06ba8 30%,
            #78bae6 65%,
            #fff
          );
            z-index: -1;
            width: 100%;
            height: 100vh;
            position: absolute;
            top: 0%;
            bottom: 0%;
            left: 0%;
            right: 0%;
        }
        
        .shape {
          display: flex;
          justify-content:center;
          align-items: center;
          height: 100%;
          mix-blend-mode: multiply;
          background: black;
        }
        
        .shape .img {
          width: 20rem;
          height: 20rem;
          transform: rotate(45deg);
        }
        
        .img svg{
          width: 100%;
          height: 100%;
        }
        
        .img svg .hsc-img-path {
          fill: white;
        }
        
        .overlay {
          overflow: hidden;
        }
        `}
      </style>
    </div>
  );
};

export default CanvasComponent;
