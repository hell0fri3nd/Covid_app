package it.unibz.covidapp.database;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface DataRepository extends CrudRepository<CsvEntry, Long> {
    List<CsvEntry> findByDate(@Param("date") String date);

    List<CsvEntry> findByLocation(@Param("location") String location);

    List<CsvEntry> findByTotalCasesGreaterThan(@Param("value") int value);

    List<CsvEntry> findByNewCasesGreaterThan(@Param("value") int value);

    List<CsvEntry> findByTotalDeathsGreaterThan(@Param("value") int value);

    List<CsvEntry> findByNewDeathsGreaterThan(@Param("value") int value);

    List<CsvEntry> findByTotalCasesGreaterThanAndDate(@Param("value") int value, @Param("date") String date);

    List<CsvEntry> findByNewCasesGreaterThanAndDate(@Param("value") int value, @Param("date") String date);

    List<CsvEntry> findByTotalDeathsGreaterThanAndDate(@Param("value") int value, @Param("date") String date);

    List<CsvEntry> findByNewDeathsGreaterThanAndDate(@Param("value") int value, @Param("date") String date);

    List<CsvEntry> findByTotalCasesGreaterThanAndLocation(@Param("value") int value, @Param("location") String location);

    List<CsvEntry> findByNewCasesGreaterThanAndLocation(@Param("value") int value, @Param("location") String location);

    List<CsvEntry> findByTotalDeathsGreaterThanAndLocation(@Param("value") int value, @Param("location") String location);

    List<CsvEntry> findByNewDeathsGreaterThanAndLocation(@Param("value") int value, @Param("location") String location);

    List<CsvEntry> findByLocationAndTestsUnitsIs(@Param("location") String location, @Param("testUnit") String testUnit);

}
