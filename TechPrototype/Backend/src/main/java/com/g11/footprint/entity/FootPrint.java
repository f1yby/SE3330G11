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

    private String centerLongitude;

    private String centerLatitude;

    private String zoom;

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

    public void setCenterLongitude(String centerLongitude) {
        this.centerLongitude = centerLongitude;
    }

    public void setCenterLatitude(String centerLatitude) {
        this.centerLatitude = centerLatitude;
    }

    public String getCenterLongitude() {
        return centerLongitude;
    }

    public String getCenterLatitude() {
        return centerLatitude;
    }

    public String getZoom() {
        return zoom;
    }

    public void setZoom(String zoom) {
        this.zoom = zoom;
    }


}
