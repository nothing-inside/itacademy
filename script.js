function enterInformation() {
    let countryName=prompt('Название страны')
    let countryCapital=prompt('Название столицы')
    addCountry(countryName, countryCapital)
}

function getInformation() {
    let countryName=prompt('Название страны')
    console.log(getCountryInfo(countryName))
}

function listCountries() {
    console.log( "список стран:" + listCountrys() );
}

function deleteInformation() {
    let countryName=prompt('Название страны')
    deleteCountry(countryName)
}