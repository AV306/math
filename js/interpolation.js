function clamp( min, max, val )
{
  return Math.min( Math.max( min, val ), max );
}

function lerp( min, max, val )
{ 
  var d = max - min;
  
  return clamp( min, max, min + (d * val) );
}

function smoothstep( min, max, val )
{
  var d = max - min;
  var x = val * val * (3 - 2*val);
  
  return clamp( min, max, min + (d * val) );
}
