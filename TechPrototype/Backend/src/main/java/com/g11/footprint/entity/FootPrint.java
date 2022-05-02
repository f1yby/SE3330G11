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

    public void setUser(User user) {
        this.user = user;
    }

    public void setTrid(Integer trid) {
        this.trid = trid;
    }

    public Integer getFid() {
        return fid;
    }
}
