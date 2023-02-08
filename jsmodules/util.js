export function wrap( min, max, val )
{
  var s = max - min;
  val = Math.floor( val % s );
  if ( val < 0 ) val += s;
  
  return val;
}

export function clamp( min, max, v )
{
  return Math.min( Math.max( v, min), max );
}

export function mapRange( vmin, vmax, tmin, tmax, val )
{
  var vrange = vmax - vmin;
  var trange = tmax - tmin;
  
  val = clamp( vmin, vmax, val );
  
  return clamp( tmin, tmax, trange * (val / vrange) );
}
