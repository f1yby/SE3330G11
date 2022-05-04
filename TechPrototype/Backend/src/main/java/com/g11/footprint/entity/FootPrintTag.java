package com.g11.footprint.entity;

import javax.persistence.*;

@Entity
@Table(name="foot_print_tag")
public class FootPrintTag {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer tid;
    private String description;

}
