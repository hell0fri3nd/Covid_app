import React from 'react';
import {getAll} from "../api/DataGetters";

export async function parseCountries() {
    let data = [];
    let locations = [];

    return getAll().then(r => data = r.data._embedded.csvEntries).then(() => {
        data.forEach(entry => {
            if (!locations.includes(entry.location)) {
                locations.push(entry.location)
            }
        })

        return locations;
    });

}
