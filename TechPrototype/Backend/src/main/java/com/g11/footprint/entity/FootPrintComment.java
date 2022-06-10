package com.g11.footprint.entity;

import javax.persistence.*;

@Entity
@Table(name="foot_print_comment")
public class FootPrintComment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer cid;

    private String content;

}
