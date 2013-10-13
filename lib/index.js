
var partial = require( 'partial' );

function curry( fn ) {
  var args =  Array.prototype.slice.call( arguments );
  fn = args.shift();

  if ( typeof fn !== 'function' ) {
    throw new Error( 'curry: first argument must be a function' );
  }

  var indices = args.map( function( x, ind ) {
    return ind;
  } );

  return partial( indices, args, fn );
}

module.exports = exports = curry;
