(function(tests){

    //MAKE SURE YOU FOLLOW THE STEPS BELOW AND DO THE FOUR(4) STEPS IN THE CORRECT ORDER

    const DATA_URL = "https://prog2700.netlify.app/json/dnaMap.json";
    const DNA_SEQUENCE = "GTGCCAATGTTACTGCTAAATCTCTATATACAGTGGCTTAAGGATGGGGGGCCCAGCAGCGGCCGACCCCCCCCCTCAGTGTGGAATCAACCGGAATTGAGG";
    
    // Function to extract Codons as a JavaScript Array from the DNA Sequence String.
    const extractCodonsFromDNA = function(dnaSequence)
    {
      var codons = []; //DO NOT MODIFY THIS LINE
      // STEP #1: ADD CODE TO COMPLETE THE FUNCTION HERE...
      // You'll get an error notification in the console until 
      // the function is completed correctly. Be sure to check 
      // what the expected result should be and write the function 
      // so that it returns that expected result.
      // The console will notify you when the function is working as expected.
      // |    |     |     |     |      |      |      |      |      |      |
      // V    V     V     V     V      V      V      V      V      V      V

    let newSeq = DNA_SEQUENCE.split(/(...)/g);
    // console.log(newSeq);
    newSeq = newSeq.filter(value => value);
    // console.log(newSeq);
    codons = newSeq

    // need to filter out empty substrings now.....

      // ^    ^     ^     ^     ^      ^      ^      ^      ^      ^      ^
      // |    |     |     |     |      |      |      |      |      |      |
      return codons; //DO NOT MODIFY THIS LINE
    }
    
    const translateCodonsToAminos = function(codons, jsonData) 
    {
      let aminos = []; //DO NOT MODIFY THIS LINE
      // STEP #4: ADD CODE TO COMPLETE THE FUNCTION HERE...
      // For each codon in the 'codons' array, find a match in the 'jsonData'
      // When you've found a match, add the corresponding amino abbreviation to the 'aminos' array.
      // Be sure to check what the expected result is and write the function 
      // so that it returns that expected result.
      // The console will notify you when the function is working as expected.
      // Once you have this step completed, you've completed the Tech Check.
      // |    |     |     |     |      |      |      |      |      |      |
      // V    V     V     V     V      V      V      V      V      V      V

      codons.forEach((value, index, array) => {})
      for (let i=0; i < codons.length; i++) {
        // need to search within the json object for a match in codons array
        for (let j=0; j < jsonData.length; j++) {
          // need to iterate across the codons array and compare for matches in jsonData for every index
          // if there's a match     =>  push "abbr" into "aminos" array
          if (jsonData[j].codons.indexOf(codons[i]) > -1) {
            aminos.push(jsonData[j].abbr);
          }
        }
        // console.log(aminos);
      }

      // This is what I came up with at first and realized that it was backwards => and that I wanted to iterate through my codons array FIRST => then compare to the JSON object
      // for (let i=0; i < jsonData.length; i++) {
      //   // need to search within the json object for a match in codons array
      //   for (let j=0; j < codons.length; j++) {
      //     // need to iterate across the codons array and compare for matches in jsonData for every index
      //     // if there's a match     =>  push "abbr" into "aminos" array
      //     if (jsonData[i].codons == codons[j]) {
      //       aminos.push(jsonData[i].abbr);
      //     }
      //   }
      // }


      // ^    ^     ^     ^     ^      ^      ^      ^      ^      ^      ^
      // |    |     |     |     |      |      |      |      |      |      |
      return aminos; //DO NOT MODIFY THIS LINE
    }

    const codons = extractCodonsFromDNA(DNA_SEQUENCE); //DO NOT MODIFY THIS LINE
    let aminos = []; //DO NOT MODIFY THIS LINE
      
    // STEP #2: WRITE CODE TO FETCH DATA USING THE PROVIDED JSON DATA URL.
    // YOU CAN CONFIRM THAT YOU'VE SUCCESSFULLY FETCHED THE DATA BY LOGGING IT TO THE CONSOLE
    // |    |     |     |     |      |      |      |      |      |      |
    // V    V     V     V     V      V      V      V      V      V      V

    fetch(DATA_URL)
      .then(function(response){
        return response.json();
      })
      .then(function(json)
      {
        // console.log(json);
            aminos = translateCodonsToAminos(codons, json); //DO NOT MODIFY THIS LINE...but you can uncomment and move it when directed to.
          tests.runTests(codons, aminos) //DO NOT MODIFY THIS LINE...but you can move it when directed to.
      })


    // ^    ^     ^     ^     ^      ^      ^      ^      ^      ^      ^
    // |    |     |     |     |      |      |      |      |      |      |

 
    // STEP #3: 
    // ONCE YOU HAVE YOUR API CALL WORKING, LOOK AT THE TWO LINES OF CODE BELOW. 
    // ONE LINE IS COMMENTED OUT (aminos = ...) AND THE OTHER ISN'T (test.runTests...). 
    // UNCOMMENT THE FIRST LINE AND MOVE BOTH LINES INTO THE BODY OF THE
    // CALLBACK FUNCTION YOU WROTE ABOVE IN TODO #2 WHERE YOU'RE ABLE
    // TO ACCESS YOUR JSON DATA FROM YOUR API CALL...
    // |    |     |     |     |      |      |      |      |      |      |
    // V    V     V     V     V      V      V      V      V      V      V



    // ^    ^     ^     ^     ^      ^      ^      ^      ^      ^      ^
    // |    |     |     |     |      |      |      |      |      |      |

  })(tests);
