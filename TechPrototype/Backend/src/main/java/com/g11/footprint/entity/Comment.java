package com.g11.footprint.entity;

import javax.persistence.*;

@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer cid;

    @ManyToOne
    @JoinColumn(name = "fid")
    private FootPrint footPrint;

    @ManyToOne
    @JoinColumn(name = "uid")
    private User user;

    private String content;

}
