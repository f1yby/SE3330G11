package com.g11.footprint.repository;

import com.g11.footprint.entity.FootPrint;
import com.g11.footprint.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface FootPrintRepository extends CrudRepository<FootPrint, Integer> {
    @Query("select f from FootPrint f where f.user=:user")
    List<FootPrint> getAllByUser(User user);
}