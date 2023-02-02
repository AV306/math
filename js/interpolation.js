/**
 * WARNING: This requires util.js to be imported BEFORE this.
 */

class Curve
{
  // Supports up to cubic curves
  // ax^3+bx^2+cx+d
  a;
  b;
  c;
  d;
  
  constructor( a, b, c, d )
  {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }
  
  eval( x )
  {
    // x should be normalised
    return this.a * x**3 + this.b * x**2 + this.c * x + this.d;
  }
}

const TEST_CURVE = new Curve( 2.4, -5.4, 4, 0 );

function lerp( min, max, val )
{
  var d =  max - min;
  
  return clamp( min, max, min + (d * val) );
}

function smoothstep( min, max, val )
{
  val = val * val * (3 - 2*val);
  
  return lerp( min, max, val );
}

function curveInterpolate( curve, min, max, val )
{
  val = curve.eval( val );
  return lerp( min, max, val );
}
