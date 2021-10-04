package it.unibz.covidapp.loader;

import it.unibz.covidapp.service.DataGetter;
import it.unibz.covidapp.database.CsvEntry;
import it.unibz.covidapp.database.DataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


@Component
public class DatabaseLoader implements CommandLineRunner {

    private final DataRepository repository;

    @Autowired
    public DatabaseLoader(DataRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {

        DataGetter getter = new DataGetter();
        String uri = "https://covid.ourworldindata.org/data/owid-covid-data.csv";

        for (CsvEntry object : getter.getData(uri)) {
            this.repository.save(object);
        }
    }
}

