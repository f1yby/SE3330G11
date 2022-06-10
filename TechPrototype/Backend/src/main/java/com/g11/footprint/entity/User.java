package com.g11.footprint.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer uid;
    private String name;
    private String password;
    private String iconUrl;
    private String email;
    private Integer likedCount;
    private Integer commentCount;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "uid")
    @JsonIgnore
    private Set<FootPrintComment> footPrintComments;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "uid")
    @JsonIgnore
    private Set<FootPrint> footPrints;
}
