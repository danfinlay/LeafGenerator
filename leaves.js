
var p = Raphael(0, 0, 800, 600);
// Creates circle at x = 50, y = 40, with radius 10
//console.log("Raphael created.")
var tree = [];
var branch = p.path("M 200 400 c -50 0 0 -100 -100 -100");
var l = branch.getTotalLength()
var b = branch.getPointAtLength(l*0.6);
var subPath = branch.getSubpath(l*0.2, l*0.8);
console.log(subPath)
var branch2 = p.path("M "+b.x+" "+b.y+"c 0 -70 -120 0 -100 -100")


  var options = {
    branchFrequency:0.5,
    branchFrequencyVariation: 0.1,
    minLength:5, //Minimum number of pixels for a vein to be long.
    branchLength:0.9,
    levelsDeep:4,
    branchAngle:45,
    initialAngle:90,
    initialVelocity:0.1,
    finalAngle:-45,
    finalVelocity: 0.1,
    tipVariation: 0.5,
    branchAngleVariation: 0.5
  }

var generator = new LeafGen(p.width, p.height, options, p);
generator.activate(function(newBranch){
  tree.push(newBranch)
})
// var veins = generator.veins;
// for(var i=0, vLen = veins.length; i<vLen; i++){
//   tree.push(p.path(veins[i]))
// }



// function sketchProc(p){
//   p.setup = function(){
//     var widthDecayRate = 0.999999;

//     var origin = new p.PVector(200,400);
//     var initialD = new p.PVector(0,1);
//     //console.log("Made vectors: "+origin.x+origin.y+initialD.x+initialD.y);
//     p.background(200,200,200);


//     p.fill(105, 76, 21);
//     p.stroke(105, 76, 21);

//     var drawPoint = function(v, size){




//       console.log("Drawing point: "+v.x+v.y);


//       p.ellipse(v.x, v.y, size, size);
//     };


//   var stepFrom = function(position, direction, steps){
//       position.add(direction.mult(steps));
//       return position;
//   };

//   var drawStep = function(v, d, s, i){
//     //v = start vector
//     //d = direction vector
//     //s = size of base node
//     //i = steps in direction
//     var loc = v.add(d.mult(i));
//     drawPoint(loc, s);
//   };

//   var drawBranch = function(start, direction, curve, size, len){
//       var current = start;
//       //var currentDirection = direction;
//       var i=0;
//       for(i=0; i<len; i++){
//           var thisSize = size * p.pow(widthDecayRate, i);
//           drawStep(start, direction, thisSize, i);
//           //current = stepFrom(start, direction, i);
//       }
//   };
//   //drawStep(200,400,20);

//   drawBranch(origin, initialD, 0, 15, 0.2);

//   }
  

  
//   // draw a line//   line(100, 100, 200, 200);
// }

