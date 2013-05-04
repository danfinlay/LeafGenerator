var LeafGen = function(leafWidth, leafHeight, options, raph){

	this.branches = [];
	this.raph = raph
	//Dimensions of the raphel.js drawing area.
	this.width = leafWidth;
	this.height = leafHeight;

	this.options = options;

	//minLength describes how much of a branch is discarded from recursive branch growing.
	this.minLengthInPixels = function(currentBranchLength){return this.options.minLength * currentBranchLength;}
	//This is an alternative way to limiting complexity from "steps deep".
	//I've seen what that does, but this is what came to me intuitively,
	//So I'm doing the intuition the justice of experimentation.
	//Besides, if you just set levelsDeep lower than this would limit, it will be the decider by default.

	//adding base:
	var base = raph.path("M "+this.width/2+" "+this.height+" l 0 -"+this.height*0.9);
	this.branches.push(base);

	// var options = {
	//   branchFrequency:0.75,
	//	 branchFrequencyVariation: 0.1,
  	//	 minLength:10, //Minimum number of pixels for a vein to be long.
	//   branchLength:0.6,
	//   levelsDeep:5,
	//   branchAngle:30,
	//   initialAngle:90,
	//   initialVelocity:20,
	//   finalAngle:-45,
	//	 finalVelocity: 20,
	//	 tipVariation: 0.3,
	//	 branchAngleVariation: 0.1
	// }

	this.trimAndRender = function trimAndRender(branch, depthRemain, cb){
		console.log("Trimming branch..")
		var totalLength = branch.getTotalLength();
		var stepIn = totalLength * (options.branchFrequency) //* ((Math.random()+0.5) * options.tipVariation)
		var newBranch = branch.getSubpath(stepIn, totalLength)

		this.render(raph.path(newBranch), branch, depthRemain, cb)
	}

	this.render = function render(branch, bigBranch, depthRemaining, cb){
		var stemRemaining = branch.getTotalLength();

		if(depthRemaining > 0){
			console.log("Rendering...")
			//Split down the branch:
			//var remainder = branch.getSubpath(stemRemaining, branch)
			var commonBase = branch.getPointAtLength(0)
			var pointDerivativeAngle = commonBase.alpha

			for(var branchDir = -1; branchDir<2; branchDir+=2){
				var branchBase = "M "+commonBase.x+" "+commonBase.y+" c ";
				var tip = {
					x:(Math.random()-0.5)*options.tipVariation,
					y: 0 + (stemRemaining * this.options.branchLength)+(Math.random()-0.5)*options.tipVariation//* (Math.random()-0.5)*options.tipVariation)
				}
				
				//No velocity for testing:
				// var branchInitialD = ''+commonBase.x+" "+commonBase.y+" "
				 var branchArrivalD = ''+tip.x+' '+tip.y+' '
				
				// //Velocities in progress:
				var branchInitialD = ''+options.initialVelocity*stemRemaining*Math.cos(options.initialAngle * branchDir)+' '+options.initialVelocity*Math.sin(options.initialAngle * branchDir)+' '
				//var branchArrivalD = ''+options.finalVelocity*stemRemaining*Math.cos(options.finalAngle * branchDir)+' '+options.finalVelocity*Math.sin(options.finalAngle * branchDir)
				
				var branchTip = " "+tip.x+" "+tip.y+" "

				//curvyBranchString
				var branchString = branchBase + branchInitialD + branchArrivalD + branchTip;

				console.log(branchString)

				var newBranch = this.raph.path(branchString);

				//newBranch.rotate(45, commonBase.x,  commonBase.y)
				var amountToRotate = pointDerivativeAngle + (options.branchAngle * branchDir)
				//console.log("Attempting to rotate "+options.branchAngle + this.branchVariation + branchDir)
				//newBranch.rotate(amountToRotate, commonBase.x,  commonBase.y)
				//bigBranch.push(newBranch)
				this.trimAndRender(newBranch, depthRemaining - 1);
				cb(newBranch)
			}
		}
	}
	this.activate = function(cb){
		console.log("Activated")
		this.trimAndRender(base, options.levelsDeep, cb);
		cb(base)
	}
}

function angleBetween(p1, p2){
	var deltaX = p2.x - p1.x
	var deltaY = p2.y - p1.y
	var angle_rad = Math.atan2(deltaY, deltaX)
	var angle_deg = angle_rad * 180.0/Math.PI
	return angle_deg
}













