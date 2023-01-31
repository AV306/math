function clamp( min, max, val )
{
  return Math.min( Math.max( min, val ), max );
}

/*function lerp( min, max, val )
{
  var d = 
  
  return clamp( min, max, min + (d * val) );
}*/

function smoothstep( min, max, val )
{
  var d = min <= max ? max - min : min - max;
  val = val * val * (3 - 2*val);
  
  return clamp( min, max, min + (d * val) );
}
