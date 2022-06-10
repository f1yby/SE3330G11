package com.g11.footprint.repository;

import com.g11.footprint.entity.FootPrint;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;


// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface FootPrintRepository extends CrudRepository<FootPrint, Integer> {
    Iterable<FootPrint> getAllByUserUid(Integer uid);

    @Query("select f from FootPrint f where f.user.uid=:uid and f.date>=:dateStart and f.date<=:dateEnd and f.location=:location")
    Iterable<FootPrint> getAllByUserUidAndDatePeriodAndLocation(Integer uid, Integer dateStart, Integer dateEnd, String location);

    Iterable<FootPrint> getAllByUserUidAndLocation(Integer uid, String location);

    @Query("select f from FootPrint f where f.user.uid=:uid and f.date>=:dateStart and f.date<=:dateEnd")
    Iterable<FootPrint> getAllByUserUidAndDatePeriod(Integer uid, Integer dateStart, Integer dateEnd);
}