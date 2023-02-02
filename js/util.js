wrap( min, max, val )
{
  var s = max - min;
  val = Math.floor( val % s );
  if ( val < 0 ) val += s;
  
  return val;
}
