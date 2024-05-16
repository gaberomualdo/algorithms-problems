Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  
  Array.prototype.min = function() {
    return Math.min.apply(null, this);
  };
  
  const appearsOnce = (arr, item) => {
      let seen = false;
      for(const elm of arr) {
          if(elm === item) {
              if(seen) {
                  return false;
              } else {
                  seen = true;
              }
          }
      }
      return seen;
  }
  
  /**
   * @param {string} word
   * @return {boolean}
   */
  var equalFrequency = function(word) {
      const letterTable = {};
      for(let i = 0; i < word.length; i++) {
          const letter = word[i];
          if(letterTable[letter] === undefined) {
              letterTable[letter] = 1;
          } else {
              letterTable[letter]++;
          }
      }
      const frequencies = Object.values(letterTable);
      const highFreq = frequencies.max();
      const lowFreq = frequencies.min();
      if(frequencies.length === 1) return true;
      if(highFreq === lowFreq && highFreq === 1) return true;
      if(lowFreq === 1 && appearsOnce(frequencies, lowFreq)) {
          let noneInBetween = true;
          for(const freq of frequencies) {
              if(freq > 1 && freq < highFreq) {
                  noneInBetween = false;
                  break;
              }
          }
          if(noneInBetween) return true;
      }
      if(highFreq - lowFreq === 1) {
          if(appearsOnce(frequencies, highFreq)) return true;
      }
      return false;
  };