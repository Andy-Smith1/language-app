
const languageContainer = document.querySelector('.language-container');
const countriesContainer = document.querySelector('.countries-container');
const languageSearchBox = document.querySelector('#lang-search');
const languageSearchButton = document.querySelector('#language-button');
const countrySearchBox = document.querySelector('#country-search');
const countrySearchButton = document.querySelector ('#country-button');
let h3Lang = document.querySelector('#h3-lang');
let h4Lang = document.querySelector('#h4-lang');
let spanOne = document.querySelector('#country');
let spanTwo = document.querySelector('#langs');
let h3Country = document.querySelector('#h3-country');
let h4Country = document.querySelector('#h4-country');
let countrySpanOne = document.querySelector('#main-lang');
let countrySpanTwo = document.querySelector('#alt-langs');
let learnMore = document.querySelector('#learn-more');
let wikiLink = document.querySelector('#wiki');




//searches languageList from input. If none found, updates h3
function findLanguage (lang) {
    if (lang.language !== languageSearchBox.value.toLowerCase()) {
        h3Lang.textContent = `No results found for "${languageSearchBox.value}"`
        spanOne.textContent = ''; //clears rest of text if no language found
        h4Lang.textContent = '';
        spanTwo.textContent = '';
    } 
    return lang.language === languageSearchBox.value.toLowerCase();
};

//If language is found, updates text on page with alt languages & countries
languageSearchButton.addEventListener('click', () => {
    if (languageSearchBox.value == '') return; //no action if nothing entered in input field
    let countriesSpoken = languageList.find(findLanguage).country;
    let alternativeLang = languageList.find(findLanguage).alternative;
    h3Lang.textContent = `Widely spoken in `;
    spanOne.textContent = countriesSpoken + '.'
    h4Lang.textContent = `Your client may also speak `;
    spanTwo.textContent = alternativeLang + '.'
    learnMore.textContent = `To learn more about this language `;
    wikiLink.textContent = 'click here.'
    wikiLink.href = `https://en.wikipedia.org/wiki/${languageSearchBox.value}_language`
    suggestionsList.textContent = '';
});



const suggestionsList = document.querySelector('.suggestions');

languageSearchBox.addEventListener('keyup', () => {
    let input = languageSearchBox.value.toLowerCase();
    suggestionsList.textContent = '';
    let suggestions = languageList.filter(function (lang) {
        return lang.language.startsWith(input);
    })
    suggestions.forEach((suggestion) => {
        let div = document.createElement('div');
        div.textContent = suggestion.language;
        suggestionsList.appendChild(div);
    })
    if (input === '') {
        suggestionsList.textContent = '';
    }
})

suggestionsList.addEventListener('click', (e) => {
    languageSearchBox.value = e.target.textContent;
    suggestionsList.textContent = '';
})



//searches languageList for country from input. If none found, updates h3
// function findCountry(country) {
//     if (country.country !== countrySearchBox.value.toLowerCase()) {
//         h3Country.textContent = `No results found for "${countrySearchBox.value}"`;
//         countrySpanOne.textContent = ''; //clears rest of text if no country found
//         h4Country.textContent = '';
//         countrySpanTwo.textContent = '';
//     }
//     return country.country === countrySearchBox.value.toLowerCase();
// };

// //if country is found, updates text on page with main language & alternative languages
// countrySearchButton.addEventListener('click', () => {
//     if (countrySearchBox.value == '') return; //no action if nothing entered in input field
//     let mainLanguage = languageList.find(findCountry).language;
//     let altLanguages = languageList.filter(function(lang) {
//         if (lang.country === countrySearchBox.value) {
//             return lang.alternative;
//         }
//     });
//     // let altLanguages = languageList.find(findCountry).alternative;
//     h3Country.textContent = 'The primary language is '
//     countrySpanOne.textContent = mainLanguage + '.';
//     h4Country.textContent = 'Your client may also speak ';
//     countrySpanTwo.textContent = altLanguages + '.';
// });


let languageList = [
    {language: 'acateco', country: 'guatemala', alternative: 'spanish'},
    {language: 'afar', country: 'ethiopia', alternative: ['tigrinya', ' somali', ' oromo']},
    {language: 'afrikaans', country: 'south africa', alternative: 'dutch'},
    {language: 'akan', country: 'ghana', alternative: ['twi', ' lingala', ' french']},
    {language: 'albanian', country: 'albania', alternative: ['greek', ' italian', ' bulgarian', ' serbo-croat']},
    {language: 'acholi', country: 'uganda', alternative: 'swahili'},
    {language: 'amharic', country: 'ethiopia', alternative: ['tigrinya', ' oromo', ' arabic', ' somali']},
    {language: 'arabic', country: 'saudi arabia', alternative: ['kurdish', ' turkish']},
    {language: 'armenian', country: 'armenia', alternative: ['greek', 'albanian']},
    {language: 'asante', country: 'ghana', alternative: ['twi', ' lingala', ' french']},
    {language: 'assamese', country: 'bangladesh', alternative: ['bengali',' hindi', ' sylheti']},
    {language: '', country: '', alternative: ''},
    {language: '', country: '', alternative: ''},
    {language: '', country: '', alternative: ''},
    {language: '', country: '', alternative: ''},
    {language: '', country: '', alternative: ''},
    {language: '', country: '', alternative: ''},
    {language: '', country: '', alternative: ''},
    
]
