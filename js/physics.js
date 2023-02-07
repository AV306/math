// REQUIRES vectors.js, angles.js

class Transform2D
{
  pos;
  velocity;
  rotation;
  
  constructor( pos = VEC2_ZERO, rot = 0, v = VEC2_ZERO )
  {
    this.pos = pos;
    this.rotation = rot;
    this.velocity = v;
  }
  
  getPos() { return this.pos; }
  setPos( pos ) { this.pos = pos; } // Trying out type "hints"
  
  getRotation() { return this.rotation; }
  setRotation( rotation ) { this.rotation = wrapDegrees( this.rotation + rotation ); }
  
  getVelocity() { return this.velocity; }
  setVelocity( velocity ) { this.velocity = velocity; }
}
