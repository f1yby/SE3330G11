package com.g11.footprint.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@Entity
public class Post {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @JsonIgnore
    @ManyToOne
    User user;

    @JsonIgnore
    @OneToOne
    FootPrint footPrint;

    String content;

    String topic;

    String tag;

    @JsonIgnore
    @ManyToMany(fetch = FetchType.EAGER)
    Set<User> likedUser;

    public Post() {
    }

    public Post(Post post) {
        id = post.id;
        user = post.user;
        footPrint = post.footPrint;
        content = post.content;
        topic = post.topic;
        tag = post.tag;
        likedUser = post.likedUser;
    }
}
