
var curry = require( 'curry' );
var expect = require( 'expect.js' );

describe( 'curry', function() {

  it( 'should return curried function', function() {
    function foo( a, b, c, d ) {
      return a + b * ( c - d );
    }

    fooCurried1 = curry( foo, 1 );
    fooCurried2 = curry( foo, 1, 2 );
    fooCurried3 = curry( foo, 1, 3, 2 );
    fooCurried4 = curry( foo, 1, 3, 2, 4 );

    expect( fooCurried1( 2, 3, 4 ) ).to.equal( foo( 1, 2, 3, 4 ) );
    expect( fooCurried2( 3, 4 ) ).to.equal( foo( 1, 2, 3, 4 ) );
    expect( fooCurried3( 4 ) ).to.equal( foo( 1, 3, 2, 4 ) );
    expect( fooCurried4() ).to.equal( foo( 1, 3, 2, 4 ) );

  } );
} );
