// This example is still an anonymous function even though we used the `function` keyword, as it doesn't have a name.
const funkyFunction = function(music, isWhiteBoy) {
    if (isWhiteBoy) {
      console.log('Play: ' +  music);
    }
  }
  funkyFunction('that funky music',true);