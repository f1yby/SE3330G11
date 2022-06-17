package com.g11.footprint.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javafx.geometry.Pos;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@Entity
public class PostComment {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @JsonIgnore
    @ManyToOne
    User user;

    String content;

    public PostComment() {
    }

    public PostComment(PostComment postComment) {
        id = postComment.getId();
        user = postComment.getUser();
        content = postComment.getContent();
    }

}