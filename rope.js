class rope{
	constructor(body1,body2,pointA,pointB)
	{
		this.pointA=pointA
		this.pointB=pointB

		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA,y:this.pointB}
		}
	//create rope constraint here
	    con=Matter.Constraint.create({
		pointA:{x:400,y:100},
		bodyA:roof,
		bodyB:bob1,bob2,bob3,bob4,bob5,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	  })
	}


    //create display() here 
	display() {
		var pointA=this.rope.bodyA.position
		var pointB=this.rope.bodyB.position
		strokeWeight(2)
		line(con.pointA.x,con.pointA.y,bob1.position.x,bob1.position.y)
	}
}
