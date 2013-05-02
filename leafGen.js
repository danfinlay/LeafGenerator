var LeafGen = function(leafWidth, leafHeight, options, raph){

	this.veins = [];

	this.width = leafWidth;
	this.height = leafHeight;
	this.options = options;

	//adding base:
	var base = raph.path("M "+this.width/2+" "+this.height+" l 0 -"+this.height*0.9);
	this.veins.push(base);

	// var options = {
  	//	 stemBranchFrequency:0.75, //Veins branch from stem every time this percent remains.
	//   branchFrequency:0.75,
  	//	 minLength:10, //Minimum number of pixels for a vein to be long.
  	//	 stagger:0,
	//   branchLength:0.6,
	//   levelsDeep:5,
	//   veinAngle:30,
	//   initialAngle:90,
	//   initialVelocity:20,
	//   finalAngle:-45
	// }

	var stemRemaining = base.getTotalLength();
	while(stemRemaining>this.options.minLength*this.options.branchLength){
		var base = base.getSubpath(stemRemaining * (1-this.options.stemBranchFrequency), stemRemaining);
		//var rightBase
		this.branchFrom(base)
	}

	this.branchFrom = function branchFrom(branch){

		
		
		var branchLength = branch.getTotalLength();

		var branchPoint = branch.getTotalLength();
	}

}