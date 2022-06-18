package com.g11.footprint.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Setter
@Getter
@Entity
@Table(name = "foot_print")

public class FootPrint {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer fid;
    private Integer trid;

    @ManyToOne
    @JoinColumn(name = "uid")
    private User user;
    //TODO Tags
    private Integer date;
    private String location;
    private String centerLongitude;
    private String centerLatitude;
    private String zoom;

    @JsonIgnore
    private Boolean havePicture;

    //    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "fid")
    private Set<FootPrintPicture> footPrintPicture;
}
