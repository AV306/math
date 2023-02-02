/**
 * WARNING: This requires util.js to be imported BEFORE this.
 */

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
