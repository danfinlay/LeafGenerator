#LeafGenerator

So far it's just the boilerplate to ultimately write a recursive branching veined tree generator, with plans to modify into a leaf generator, with vector velocities on the branch points and tips of every split.

Having just looked at a ton of leaf examples, I'm pretty sure at this point I'm going to need to add more info that each node knows about its own location, it could be grown into a full tree generator.

##Imagine:
var newBranchCallback = function(branchInfo){
	switch(branchInfo.branchesDeep){
		case 0:
			return trunk;
			break;
		case 1:
			return branch;
			break;
		case 2:
			return leaf;
			break;
	}

Only with waaaaay more organic variation.  Raphael.js is pretty nifty for this, I must say I took to SVG faster and easier than I expected to.