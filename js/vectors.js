class Vec2
{
  x;
  y;
  length; // precompute for optimisation
  
  constructor( x, y )
  {
    this.x = x;
    this.y = y;
    
    this.length = Math.sqrt( this.x**2 + this.y**2 );
  }
  
  addVec( other )
  {
    return new Vec2(
      this.x + other.x,
      this.y + other.y
    );
  }
  
  addScalar( x, y )
  {
    return new Vec2(
      this.x + x,
      this.y + y
    );
  }
  
  subVec( other )
  {
    return new Vec2(
      this.x - other.x,
      this.y - other.y
    );
  }
  
  subScalar( x, y )
  {
    return new Vec2(
      this.x - x,
      this.y - y
    );
  }
  
  multVec( other )
  {
    return new Vec2(
      this.x * other.x,
      this.y * other.y
    );
  }
  
  multScalar( s )
  {
    return new Vec2(
      this.x * s,
      this.y * s
    );
  }
  
  divideScalar( s )
  {
    return new Vec2(
      this.x / s,
      this.y / s
    );
  }
  
  dot( other )
  {
    return (this.x * other.x) + (this.y * other.y);
  }
  
  angleFrom( other )
  {
    return Math.acos( this.dot( other ) / (this.length * other.length ) );
  }
  
  rotate( theta )
  {
    return new Vec2(
      this.x * cos( theta ) - this.y * sin( theta ),
      this.x * sin( theta ) + this.y * cos( theta )
    );
  }
  
  magnitude()
  {
    return this.length;
  }
  
  normalise()
  {
    if ( this.length == 0 ) return new Vec2( 0, 0 );
    else return new Vec2(
      this.x / this.length,
      this.y / this.length
    );
  }
  
  inverseX()
  {
    return new Vec2(
      -this.x,
      this.y
    )
  }
  
  inverseY()
  {
    return new Vec2(
      this.x,
      -this.y
    )
  }
  
  /*
  // Implementation dependent
  convertPos()
  {
    return new Vec2(
      halfW + this.x,
      halfH - this.y
    );
  }
  */
  
  toString()
  {
    return `(${this.x}, ${this.y})`;
  }
}

class Vec3
{
  x;
  y;
  z;
  length;
  
  constructor( x, y, z )
  {
    this.x = x;
    this.y = y;
    this.z = z;
    
    this.length = Math.sqrt(
      x*x + y*y + z*z
    );
  }
  
  addScalar( s )
  {
    return new Vec3(
      this.x + s,
      this.y + s,
      this.z + s
    );
  }
  
  addVec( v )
  {
    return new Vec3(
      this.x + v.x,
      this.y + v.y,
      this.z + v.z
    );
  }
  
  subScalar( s )
  {
    return this.addScalar( -s );
  }
  
  subVec( v )
  {
    return new Vec3(
      this.x - v.x,
      this.y - v.y,
      this.z - v.z
    );
  }
  
  multScalar( s )
  {
    // Uniform scaling
    return new Vec3(
      this.x * s,
      this.y * s,
      this.z * s
    );
  }
  
  scale( x, y, z )
  {
    return new Vec3(
      this.x * x,
      this.y * y,
      this.z * z
    );
  }
  
  dot( v )
  {
    return this.x * v.x + 
      this.y * v.y +
      this.z * v.z;
  }
  
  cross( v )
  {
    throw "Unsupported operation";
  }
  
  // TODO: Implement
}

class Vec4
{
  vec3;
  w;
  
  constructor( x, y, z, w ) {}
}
