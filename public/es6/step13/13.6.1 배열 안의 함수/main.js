const sin = Math.sin;
const cos = Math.cos;
const theta = Math.PI/4;
const zoom = 2;
const offset = [1, -3];

const pipeline = [
  function rotate(p) {
    return {
      x: p.x * cos(theta) - p.y * sin(theta),
      y: p.x * sin(theta) + p.y * cos(theta)
    };
  },
  function scale(p) {
    return {
      x: p.x * zoom,
      y: p.y * zoom
    };
  },
  function translate(p){
    return {
      x: p.x + offset[0],
      y: p.y + offset[1]
    };
  }
];

const p = {
  x: 15,
  y: 15
};

let p2 = p;
for(let i = 0; i < pipeline.length; i++){
  console.log(p2 = pipeline[i](p2));
  document.querySelector('.rainbow').style.top = p2.y * 100;
  document.querySelector('.rainbow').style.left = p2.x * 100;
}

