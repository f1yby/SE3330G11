package com.g11.footprint.entity;

import lombok.Setter;
import lombok.Getter;
import org.hibernate.annotations.Cascade;

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
    private String content;
    private Integer likedCounter;
    private Integer clickCounter;
    //TODO Tags
    private Integer date;
    private String location;
    private String centerLongitude;
    private String centerLatitude;
    private String zoom;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "fpid")
    private Set<FootPrintPicture> footPrintPicture;

}
