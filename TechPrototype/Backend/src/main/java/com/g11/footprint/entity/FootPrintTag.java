package com.g11.footprint.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class FootPrintTag {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer tid;
    private String description;

}
