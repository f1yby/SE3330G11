package com.g11.footprint.repository;

import com.g11.footprint.entity.FootPrintTag;
import com.g11.footprint.entity.User;
import org.springframework.data.repository.CrudRepository;


// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface FootPrintTagRepository extends CrudRepository<FootPrintTag, Integer> {

}