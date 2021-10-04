import React from 'react';
import axios from 'axios';

const URI_base = "http://localhost:8080/api/csvEntries/"
const URI_search = "http://localhost:8080/api/csvEntries/search/"

export function getAll() {
    return axios.get(URI_base)
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })

}

export function getByDate(date) {
    return axios.get(URI_search + "findByDate", {params: {date: date}})
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
}


export function getByLocation(location) {
    return axios.get(URI_search + "findByLocation", {params: {location: location}})
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log("ERROR: " + error);
        })
}

export function getByTotalCasesGreaterThan(val) {
    return axios.get(URI_search + "findByTotalCasesGreaterThan", {params: {value: val}})
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
}

export function getByNewCasesGreaterThan(val) {
    return axios.get(URI_search + "findByNewCasesGreaterThan", {params: {value: val}})
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
}


export function getByTotalDeathsGreaterThan(val) {
    return axios.get(URI_search + "findByTotalDeathsGreaterThan", {params: {value: val}})
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
}


export function getByNewDeathsGreaterThan(val) {
    return axios.get(URI_search + "findByNewDeathsGreaterThan", {params: {value: val}})
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
}


export function getByTotalCasesGreaterThanAndDate(val, date) {
    return axios.get(URI_search + "findByTotalCasesGreaterThanAndDate", {params: {value: val, date: date}})
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
}


export function getByNewCasesGreaterThanAndDate(val, date) {
    return axios.get(URI_search + "findByNewCasesGreaterThanAndDate", {params: {value: val, date: date}})
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
}


export function getByTotalDeathsGreaterThanAndDate(val, date) {
    return axios.get(URI_search + "findByTotalDeathsGreaterThanAndDate", {params: {value: val, date: date}})
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
}


export function getByNewDeathsGreaterThanAndDate(val, date) {
    return axios.get(URI_search + "findByNewDeathsGreaterThanAndDate", {params: {value: val, date: date}})
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
}


export function getByTotalCasesGreaterThanAndLocation(val, location) {
    return axios.get(URI_search + "findByTotalCasesGreaterThanAndLocation", {params: {value: val, location: location}})
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
}


export function getByNewCasesGreaterThanAndLocation(val, location) {
    return axios.get(URI_search + "findByNewCasesGreaterThanAndLocation", {params: {value: val, location: location}})
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
}


export function getByTotalDeathsGreaterThanAndLocation(val, location) {
    return axios.get(URI_search + "findByTotalDeathsGreaterThanAndLocation", {params: {value: val, location: location}})
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
}


export function getByNewDeathsGreaterThanAndLocation(val, location) {
    return axios.get(URI_search + "findByNewDeathsGreaterThanAndLocation", {params: {value: val, location: location}})
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
}


export function getByLocationAndTestsUnitsIs(location, testUnit) {
    return axios.get(URI_search + "findByLocationAndTestsUnitsIs", {params: {location: location, testUnit: testUnit}})
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
}





