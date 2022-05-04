package com.g11.footprint.entity;

import javax.persistence.*;

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

    public Integer getFpid() {
        return fpid;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }

    public String getLatitude() {
        return latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setFpid(Integer fpid) {
        this.fpid = fpid;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public void setFootPrint(FootPrint footPrint) {
        this.footPrint = footPrint;
    }

}
