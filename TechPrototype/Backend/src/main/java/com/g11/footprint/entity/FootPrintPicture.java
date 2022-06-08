package com.g11.footprint.entity;

import lombok.Setter;
import lombok.Getter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "foot_print_picture")
public class FootPrintPicture {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer fpid;

    @ManyToOne
    @JoinColumn(name = "trid")
    private FootPrint footPrint;
    private String pictureUrl;
    private String latitude;
    private String longitude;
}
