package it.unibz.covidapp.database;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class CsvEntry {

    private @Id
    @GeneratedValue
    Long id;
    private String isoCode;
    private String location;
    private String date;
    private Double totalCases;
    private double newCases;
    private double totalDeaths;
    private double newDeaths;
    private double totalCasesPerMillion;
    private double newCasesPerMillion;
    private double totalDeathsPerMillion;
    private double newDeathsPerMillion;
    private double totalTests;
    private double newTests;
    private double totalTestsPerThousand;
    private double newTestsPerThousand;
    private String testsUnits;

    public CsvEntry() {
    }

    public CsvEntry(String isoCode, String location, String date, double totalCases,
                    double newCases, double totalDeaths, double newDeaths, double totalCasesPerMillion,
                    double newCasesPerMillion, double totalDeathsPerMillion,
                    double newDeathsPerMillion, double totalTests, double newTests,
                    double totalTestsPerThousand, double newTestsPerThousand, String testsUnits) {
        this.isoCode = isoCode;
        this.location = location;
        this.date = date;
        this.totalCases = totalCases;
        this.newCases = newCases;
        this.totalDeaths = totalDeaths;
        this.newDeaths = newDeaths;
        this.totalCasesPerMillion = totalCasesPerMillion;
        this.newCasesPerMillion = newCasesPerMillion;
        this.totalDeathsPerMillion = totalDeathsPerMillion;
        this.newDeathsPerMillion = newDeathsPerMillion;
        this.totalTests = totalTests;
        this.newTests = newTests;
        this.totalTestsPerThousand = totalTestsPerThousand;
        this.newTestsPerThousand = newTestsPerThousand;
        this.testsUnits = testsUnits;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIsoCode() {
        return isoCode;
    }

    public void setIsoCode(String isoCode) {
        this.isoCode = isoCode;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public double getTotalCases() {
        return totalCases;
    }

    public void setTotalCases(Double totalCases) {
        this.totalCases = totalCases;
    }

    public double getNewCases() {
        return newCases;
    }

    public void setNewCases(double newCases) {
        this.newCases = newCases;
    }

    public double getTotalDeaths() {
        return totalDeaths;
    }

    public void setTotalDeaths(double totalDeaths) {
        this.totalDeaths = totalDeaths;
    }

    public double getNewDeaths() {
        return newDeaths;
    }

    public void setNewDeaths(double newDeaths) {
        this.newDeaths = newDeaths;
    }

    public double getTotalCasesPerMillion() {
        return totalCasesPerMillion;
    }

    public void setTotalCasesPerMillion(double totalCasesPerMillion) {
        this.totalCasesPerMillion = totalCasesPerMillion;
    }

    public double getNewCasesPerMillion() {
        return newCasesPerMillion;
    }

    public void setNewCasesPerMillion(double newCasesPerMillion) {
        this.newCasesPerMillion = newCasesPerMillion;
    }

    public double getTotalDeathsPerMillion() {
        return totalDeathsPerMillion;
    }

    public void setTotalDeathsPerMillion(double totalDeathsPerMillion) {
        this.totalDeathsPerMillion = totalDeathsPerMillion;
    }

    public double getNewDeathsPerMillion() {
        return newDeathsPerMillion;
    }

    public void setNewDeathsPerMillion(double newDeathsPerMillion) {
        this.newDeathsPerMillion = newDeathsPerMillion;
    }

    public double getTotalTests() {
        return totalTests;
    }

    public void setTotalTests(double totalTests) {
        this.totalTests = totalTests;
    }

    public double getNewTests() {
        return newTests;
    }

    public void setNewTests(double newTests) {
        this.newTests = newTests;
    }

    public double getTotalTestsPerThousand() {
        return totalTestsPerThousand;
    }

    public void setTotalTestsPerThousand(double totalTestsPerThousand) {
        this.totalTestsPerThousand = totalTestsPerThousand;
    }

    public double getNewTestsPerThousand() {
        return newTestsPerThousand;
    }

    public void setNewTestsPerThousand(double newTestsPerThousand) {
        this.newTestsPerThousand = newTestsPerThousand;
    }

    public String getTestsUnits() {
        return testsUnits;
    }

    public void setTestsUnits(String testsUnits) {
        this.testsUnits = testsUnits;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
