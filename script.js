
const languageContainer = document.querySelector('.language-container');
const countriesContainer = document.querySelector('.countries-container');
const languageSearchBox = document.querySelector('#lang-search');
const languageSearchButton = document.querySelector('#language-button');
const countrySearchBox = document.querySelector('#country-search');
const countrySearchButton = document.querySelector ('#country-button');
const spokenInDiv = document.querySelector('.spoken-in');
const alternativesDiv = document.querySelector('.alternatives')
let h3Lang = document.querySelector('#h3-lang');
let h4Lang = document.querySelector('#h4-lang');
let spanOne = document.querySelector('#country');
let spanTwo = document.querySelector('#langs');



//If language is found, updates text on page with alt languages & countries
languageSearchButton.addEventListener('click', () => {
    let countriesSpoken = languageList.find(findLanguage).country;
    let alternativeLang = languageList.find(findLanguage).alternative;
    h3Lang.textContent = `Widely spoken in `;
    spanOne.textContent = countriesSpoken + '.'
    h4Lang.textContent = `Your client may also speak `;
    spanTwo.textContent = alternativeLang + '.'

    
})

//searches languageList from input. If none found, updates h3
function findLanguage (lang) {
    if (lang.language !== languageSearchBox.value.toLowerCase()) {
        h3Lang.textContent = `No results found for "${languageSearchBox.value}"`
        spanOne.textContent = '';
        h4Lang.textContent = '';
        spanTwo.textContent = '';
    } 
    return lang.language === languageSearchBox.value.toLowerCase();
}

function findCountry(country) {
    return country.language === countrySearchBox.value.toLowerCase();
}



let languageList = [
    {language: 'acateco', country: 'guatemala', alternative: 'spanish'},
    {language: 'afar', country: 'ethiopia', alternative: ['tigrinya', ' somali', ' oromo']},
    {language: 'afrikaans', country: 'south africa', alternative: 'dutch'},
    {language: 'akan', country: 'ghana', alternative: ['twi', ' lingala', ' french']},
    {language: 'albanian', country: 'albania', alternative: ['greek', ' italian', ' bulgarian', ' serbo-croat']},
    {language: 'alcholi', country: 'uganda', alternative: 'swahili'},
    {language: 'amharic', country: 'ethiopia', alternative: ['tigrinya', ' oromo', ' arabic', ' somali']},
    {language: 'arabic', country: 'saudi arabia', alternative: ['kurdish', ' turkish']},
    {language: 'armenian', country: 'armenia', alternative: ['greek', 'albanian']},
    {language: 'asante', country: 'ghana', alternative: ['twi', ' lingala', ' french']},
    {language: 'assamese', country: 'bangladesh', alternative: 'bengali, hindi or sylheti'},
    {language: '', country: '', alternative: ''},
    {language: '', country: '', alternative: ''},
    {language: '', country: '', alternative: ''},
    {language: '', country: '', alternative: ''},
    {language: '', country: '', alternative: ''},
    {language: '', country: '', alternative: ''},
    {language: '', country: '', alternative: ''},
    
    
    
]


//old working code

// languageSearchButton.addEventListener('click', () => {
//     languageList.forEach((lang) => {

//         if (languageSearchBox.value.toLowerCase() === lang.language) {
//             h3.textContent = `Widely spoken in `;
//             spanOne.textContent = lang.country;
//             h4.textContent = `Your client may also speak `;
//             spanTwo.textContent = lang.alternative;
//         } else {
//             h3.textContent = `No results found for "${lang.language}"`;
//             spanOne.textContent = '';
//             h4.textContent = '';
//             spanTwo.textContent = '';
            
//         }
//     })
// });