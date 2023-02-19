function mostSpokenLanguages(countries, numLanguages) {
    const languageCount = {};
    
    // Count the number of times each language appears
    Object.values(countries).forEach(country => {
      country.languages.forEach(language => {
        if (languageCount[language]) {
          languageCount[language]++;
        } else {
          languageCount[language] = 1;
        }
      });
    });
  
    // Sort the languages by their count in descending order
    const sortedLanguages = Object.entries(languageCount)
      .sort((a, b) => b[1] - a[1])
      .map(entry => `${entry[0]} (${entry[1]})`);
  
    // Return a Set of the top n languages
    return new Set(sortedLanguages.slice(0, numLanguages));
  }
  
  const mostSpoken = mostSpokenLanguages(countries, 5);
  console.log(mostSpoken);