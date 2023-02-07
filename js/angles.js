 // REQUIRES util.js
import wrap from "util.js";

export function wrapDegrees( deg )
{
  return wrap( 0, 360, deg );
}
