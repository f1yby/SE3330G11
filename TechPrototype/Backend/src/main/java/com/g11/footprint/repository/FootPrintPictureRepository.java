package com.g11.footprint.repository;

import com.g11.footprint.entity.FootPrint;
import com.g11.footprint.entity.FootPrintPicture;
import com.g11.footprint.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface FootPrintPictureRepository extends CrudRepository<FootPrintPicture, Integer> {
    @Query("select fp from FootPrintPicture fp where fp.footPrint=:footPrint")
    List<FootPrintPicture> getAllByFootPrint(FootPrint footPrint);
}