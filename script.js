
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
    h3Lang.textContent = `Most commonly spoken in `;
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
    {language: 'arabic', country: 'the middle east', alternative: ['kurdish', ' turkish']},
    {language: 'armenian', country: 'armenia', alternative: ['greek', ' albanian']},
    {language: 'asante', country: 'ghana', alternative: ['twi', ' lingala', ' french']},
    {language: 'assamese', country: 'bangladesh', alternative: ['bengali',' hindi', ' sylheti']},
    {language: 'assyrian', country: 'syria', alternative: 'arabic'},
    {language: 'azerbaijani', country: 'azerbaijan', alternative: ['russian', ' turkish', ' farsi']},
    {language: 'bahasa indonesia', country: 'indonesia', alternative: ['malay', ' portuguese', ' tetun']},
    {language: 'bambara', country: 'mali', alternative: ['mandinka', ' french']},
    {language: 'basque', country: 'spain', alternative: ['spanish', ' french']},
    {language: 'belarusian', country: 'belarus', alternative: ['russian', ' lithuanian', ' latvian', ' polish']},
    {language: 'bengali', country: 'bangladesh', alternative: ['hindi', ' sylheti']},
    {language: 'berber', country: 'morocco', alternative: ['arabic', ' french']},
    {language: 'bosnian', country: 'bosnia', alternative: ['serbo-croat', ' albanian']},
    {language: 'bravanese', country: 'somalia', alternative: ['somali', ' arabic']},
    {language: 'bulgarian', country: 'bulgaria', alternative: ['greek', 'albanian']},
    {language: 'burmese', country: 'burma', alternative: ['nepali', ' hindi']},
    {language: 'cambodian (khmer)', country: 'cambodia', alternative: ['vietnamese', ' thai']},
    {language: 'cantonese', country: 'china', alternative: 'mandarin'},
    {language: 'cape verdean creole', country: 'cape verde', alternative: ['portuguese', ' haitain (creole)', ' french']},
    {language: 'catalan', country: 'spain', alternative: 'spanish'},
    {language: 'cebuano', country: 'philippines', alternative: ['tagalog', ' bahasa indonesia']},
    {language: 'chaldean', country: 'iraq', alternative: ['arabic', ' kurdish']},
    {language: 'chaozhou', country: 'china', alternative: ['mandarin', ' cantonese']},
    {language: 'creole (haitian)', country: 'haiti', alternative: 'french'},
    {language: 'czech', country: 'czech republic', alternative: 'slovak'},
    {language: 'danish', country: 'denmark', alternative: ['swedish', ' german']},
    {language: 'dinka', country: 'south sudan', alternative: ['mandinka', ' french']},
    {language: 'dutch', country: 'the netherlands', alternative: ['german', 'french']},
    {language: 'estonian', country: 'estonia', alternative: 'russia'},
    {language: 'ewe', country: 'ghana', alternative: 'twi'},
    {language: 'fanti', country: 'ghana', alternative: ['twi', ' lingala', ' french']},
    {language: 'farsi (afghan)', country: 'afghanistan', alternative: ['arabic', ' kurdish', ' pashto']},
    {language: 'farsi (persian)', country: 'iran', alternative: ['arabic', ' kurdish', ' pashto']},
    {language: 'finnish', country: 'finland', alternative: ['hungarian', ' german']},
    {language: 'flemish', country: 'belgium', alternative: ['french', ' german']},
    {language: 'french', country: 'france', alternative: ['german', ' dutch']},
    {language: 'fujianese', country: 'china', alternative: ['mandarin', ' cantonese']},
    {language: 'fulani', country: 'nigeria', alternative: 'french'},
    {language: 'fuzhou', country: 'china', alternative: ['mandarin', ' cantonese']},
    {language: 'ga', country: 'ghana', alternative: ['french', ' lingala', ' twi']},
    {language: 'garre', country: 'somalia', alternative: 'somali'},
    {language: 'georgian', country: 'georgia', alternative: 'russian'},
    {language: 'german', country: 'germany', alternative: ['dutch', ' french']},
    {language: 'greek', country: 'greece', alternative: ['bulgarian', ' turkish', ' italian']},
    {language: 'gujarati', country: 'india', alternative: ['hindi', ' urdu', ' marathi']},
    {language: 'hakka', country: 'china', alternative: ['cantonese', ' mandarin']},
    {language: 'hausa', country: 'nigeria', alternative: 'yoruba'},
    {language: 'hebrew', country: 'israel', alternative: ['yiddish', ' arabic']},
    {language: 'hindi', country: 'india', alternative: ['urdu', ' punjabi']},
    {language: 'hmong', country: 'china', alternative: ['mandarin', ' cantonese', ' vietnamese']},
    {language: 'hungarian', country: 'hungary', alternative: ['czech', ' slovak']},
    {language: 'igbo', country: 'nigeria', alternative: 'french'},
    {language: 'ilocano', country: 'philippines', alternative: ['tagalog', ' bahasa indonesia', ' malay']},
    {language: 'italian', country: 'italy', alternative: ['spanish', ' portuguese']},
    {language: 'japanese', country: 'japan', alternative: 'korean'},
    {language: 'jula', country: 'burkina faso', alternative: 'mandinka'},
    {language: 'kachchi', country: 'india', alternative: ['gujarati', ' hindi', ' urdu']},
    {language: 'kanjobal', country: 'guatemala', alternative: 'spanish'},
    {language: 'karen', country: 'burma', alternative: ['burmese', ' hindi', ' nepali']},
    {language: 'karenni', country: 'burma', alternative: ['burmese', ' hindi', ' nepali']},
    {language: 'kashmiri', country: 'india', alternative: ['hindi', ' urdu']},
    {language: 'kazakh', country: 'kazakhstan', alternative: ['pashto', ' russian', ' arabic']},
    {language: 'kirghiz', country: 'kyrgyzstan', alternative: 'turkish'},
    {language: 'kirundi', country: 'burundi', alternative: 'swahili'},
    {language: 'kongo', country: 'democratic republic of the congo', alternative: ['swahili', ' arabic']},
    {language: 'korean', country: 'south korea', alternative: 'japanese'},
    {language: 'kunama', country: 'eritrea', alternative: ['tigrinya', ' amharic']},
    {language: 'kurdish (kurmanji)', country: 'syria', alternative: ['sorani', ' arabic', ' turkish', ' farsi']},
    {language: 'kurdish (sorani)', country: 'iraq', alternative: ['turkish', ' arabic']},
    {language: 'kurdish (bahdini)', country: 'iraq', alternative: ['turkish', ' arabic']},
    {language: 'laotian', country: 'laos', alternative: ['thai', ' vietnamese']},
    {language: 'latvian', country: 'latvia', alternative: 'russia'},
    {language: 'lingala', country: 'democratic republic of the congo', alternative: ['twi', ' french']},
    {language: 'lithuanian', country: 'lithuania', alternative: 'russian'},
    {language: 'lugandan', country: 'uganda', alternative: 'french'},
    {language: 'macedonian', country: 'macedonia', alternative: ['serbo-croat', ' bosnian', ' russian']},
    {language: 'maay maay', country: 'somalia', alternative: ['somali', ' arabic']},
    {language: 'malay', country: 'malaysia', alternative: 'indonesian'},
    {language: 'malayalam', country: 'india', alternative: ['india', ' sinhala']},
    {language: 'maltese', country: 'malta', alternative: 'spanish'},
    {language: 'mandarin', country: 'china', alternative: 'cantonese'},
    {language: 'mandinka', country: 'mali', alternative: ['french', ' krio']},
    {language: 'marathi', country: 'india', alternative: ['hindi', ' gujarati']},
    {language: 'mirpuri', country: 'india', alternative: ['hindi', ' punjabi', ' gujarati']},
    {language: 'mixteco alto', country: 'mexico', alternative: 'spanish'},
    {language: 'mongolian', country: 'mongolia', alternative: ['russian', ' mandarin', ' cantonese']},
    {language: 'mulam', country: 'china', alternative: ['mandarin', ' cantonese']},
    {language: 'ndebele', country: 'south africa', alternative: ['dutch', ' afrikaans', ' shona']},
    {language: 'nepali', country: 'nepal', alternative: ['hindi', ' urdu']},
    {language: 'norweigan', country: 'norway', alternative: ['swedish', ' german']},
    {language: 'nuer', country: 'ethiopia', alternative: ['tigrinya', ' amharic']},
    {language: 'oromo', country: 'ethiopia', alternative: ['somali', ' tigrinya', ' amharic', ' french']},
    {language: 'pahari', country: 'nepal', alternative: ['nepali', ' hindi', ' urdu']},
    {language: 'pangasinan', country: 'philippines', alternative: 'tagalog'},
    {language: 'pashto', country: 'afghanistan', alternative: ['farsi (afghan)', ' urdu']},
    {language: 'pidgin nigerian', country: 'nigeria', alternative: 'yoruba'},
    {language: 'polish', country: 'poland', alternative: ['czech', 'slovak']},
    {language: 'popti', country: 'guatemala', alternative: 'spanish'},
    {language: 'portuguese', country: 'portugal', alternative: 'spanish'},
    {language: 'pothwari', country: 'india', alternative: ['hindi', ' punjabi', ' gujarati']},
    {language: 'pulaar', country: 'senegal', alternative: ['fulani', ' fula', ' wolof']},
    {language: 'punjabi', country: 'india/pakistan', alternative: ['urdu', ' hindi']},
    {language: 'romanian', country: 'romania', alternative: 'russian'},
    {language: 'russian', country: 'russia', alternative: ['lithuanian', ' latvian']},
    {language: 'kinyarwanda', country: 'rwanda', alternative: 'french'},
    {language: 'serbo-croat', country: 'serbia/croatia', alternative: ['bosnian', ' czech', ' slovak']},
    {language: 'shanghainese', country: 'china', alternative:['mandarin', 'cantonese']},
    {language: 'shona', country: 'zimbabwe', alternative: 'ndebele'},
    {language: 'sinhala', country: 'sri lanka', alternative: 'tamil'},
    {language: 'slovak', country: 'slovakia', alternative: 'czech'},
    {language: 'slovene', country: 'slovenia', alternative: ['russian', ' slovak']},
    {language: 'somali', country: 'somalia', alternative: 'arabic'},
    {language: 'soso', country: 'guinea', alternative: 'french'},
    {language: 'spanish', country: 'spain', alternative: ['portuguese', ' catalan', ' french']},
    {language: 'sudanese', country: 'sudan/south sudan', alternative: 'arabic'},
    {language: 'swahili', country: 'kenya', alternative: ['arabic', ' hindi']},
    {language: 'swati', country: 'south africa', alternative: ['dutch', ' afrikaans']},
    {language: 'sylheti', country: 'bangladesh', alternative: ['bengali', ' hindi']},
    {language: 'tagalog', country: 'philippines', alternative: ['indonesian', ' malay', ' ilocano']},
    {language: 'taiwanese', country: 'taiwan/china', alternative: 'mandarin'},
    {language: 'tajik', country: 'tajikistan', alternative: ['turkish', ' arabic', ' russian']},
    {language: 'tamil', country: 'sri lanka', alternative: ['sinhala', ' hindi', ' urdu']},
    {language: 'telugu', country: 'india', alternative: 'tamil'},
    {language: 'tetun', country: 'east timor', alternative: ['portuguese', ' indonesian']},
    {language: 'thai', country: 'thailand', alternative: ['mandarin', ' vietnamese']},
    {language: 'thmne', country: 'sierra leone', alternative: 'krio'},
    {language: 'tibetan', country: 'tibet', alternative: ['burmese', ' nepali', ' hindi']},
    {language: 'tigrinya', country: 'eritrea', alternative: ['amharic', ' oromo', ' somali', ' arabic']},
    {language: 'tioshanese', country: 'china', alternative: ['mandarin', ' cantonese']},
    {language: 'tshiluba', country: 'democratic republic of the congo', alternative: ['swahili', ' arabic']},
    {language: 'turkish', country: 'turkey', alternative: ['greek', ' kurdish', ' arabic']},
    {language: 'turkmen', country: 'turkmenistan', alternative: ['turkish', ' arabic']},
    {language: 'twi', country: 'ghana', alternative: ['lingala', ' french']},
    {language: 'tzotzil', country: 'mexico', alternative: 'spanish'},
    {language: 'ukrainian', country: 'ukraine', alternative: 'russian'},
    {language: 'urdu', country: 'india/pakistan', alternative: ['punjabi', ' hindi']},
    {language: 'uzbek', country: 'uzbekistan', alternative: 'turkish'},
    {language: 'vietnamese', country: 'vietnam', alternative: ['thai', ' cantonese']},
    {language: 'wolof', country: 'senegal', alternative: ['swahili', ' arabic']},
    {language: 'xhosa', country: 'south africa', alternative: 'afrikaans'},
    {language: 'yiddish', country: 'israel', alternative: ['hebrew', ' arabic']},
    {language: 'yoruba', country: 'nigeria', alternative: 'igbo'},
    {language: 'zulu', country: 'south africa', alternative: ['mandinka', ' swahili']},
]


// {language: '', country: '', alternative: ''},