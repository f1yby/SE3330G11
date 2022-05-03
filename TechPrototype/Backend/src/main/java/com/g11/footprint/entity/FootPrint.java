package com.g11.footprint.entity;

import javax.persistence.*;

@Entity
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

    public void setUser(User user) {
        this.user = user;
    }

    public void setTrid(Integer trid) {
        this.trid = trid;
    }

    public Integer getFid() {
        return fid;
    }

    public Integer getTrid() {
        return trid;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Integer getDate() {
        return date;
    }

    public void setDate(Integer date) {
        this.date = date;
    }
}
