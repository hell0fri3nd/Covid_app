package it.unibz.covidapp.service;

import it.unibz.covidapp.database.CsvEntry;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.text.DateFormat;
import java.util.Date;

public class DataGetter {

    public ArrayList<CsvEntry> getData(String uri) throws IOException {

        URL content = new URL(uri);
        InputStream stream = content.openStream();
        ArrayList<CsvEntry> csvData = new ArrayList<>();

        System.out.println("------------------- [ Loading Data... ] -------------------");

        Scanner inputStream = new Scanner(stream);
        inputStream.nextLine(); // jumps first line of data description
        while (inputStream.hasNext()) {
            String data = inputStream.nextLine();
            String[] values = data.split(",");
            CsvEntry obj = new CsvEntry();

            // TODO: Refactor if clauses with a state pattern or similar
            for (int i = 0; i < values.length; i++) {

                if (i == 0) {
                    obj.setIsoCode(values[0]);
                } else if (i == 1) {
                    obj.setLocation(values[2]);
                } else if (i == 3) {
                    obj.setDate(parseDate(values[3]));
                } else if (i == 4) {
                    obj.setTotalCases(Double.parseDouble(checkEmpty(values[4])));
                } else if (i == 5) {
                    obj.setNewCases(Double.parseDouble(checkEmpty(values[5])));
                } else if (i == 6) {
                    obj.setTotalDeaths(Double.parseDouble(checkEmpty(values[6])));
                } else if (i == 7) {
                    obj.setNewDeaths(Double.parseDouble(checkEmpty(values[7])));
                } else if (i == 8) {
                    obj.setTotalCasesPerMillion(Double.parseDouble(checkEmpty(values[8])));
                } else if (i == 9) {
                    obj.setNewCasesPerMillion(Double.parseDouble(checkEmpty(values[9])));
                } else if (i == 10) {
                    obj.setTotalDeathsPerMillion(Double.parseDouble(checkEmpty(values[10])));
                } else if (i == 11) {
                    obj.setNewDeathsPerMillion(Double.parseDouble(checkEmpty(values[11])));
                } else if (i == 12) {
                    obj.setTotalTests(Double.parseDouble(checkEmpty(values[12])));
                } else if (i == 13) {
                    obj.setNewTests(Double.parseDouble(checkEmpty(values[13])));
                } else if (i == 14) {
                    obj.setTotalTestsPerThousand(Double.parseDouble(checkEmpty(values[14])));
                } else if (i == 15) {
                    obj.setNewTestsPerThousand(Double.parseDouble(checkEmpty(values[15])));
                } else if (i == 16) {
                    obj.setTestsUnits(values[16]);
                }
            }
            csvData.add(obj);
        }
        inputStream.close();
        System.out.println("------------------- [ Data Loaded ] -------------------");

        return csvData;
    }

    public String parseDate(String target) {
        try {
            DateFormat df = new SimpleDateFormat("yyy-MM-dd");
            return df.format(df.parse(target));
        } catch (ParseException pe) {
            pe.printStackTrace();
        }
        return null;
    }

    public String checkEmpty(String value) {
        if (value.equals("")) {
            return "0";
        } else return value;
    }
}
