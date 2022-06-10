package com.g11.footprint.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "foot_print_picture")
public class FootPrintPicture {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer fpid;
    private String pictureUrl;
    private String latitude;
    private String longitude;

}
