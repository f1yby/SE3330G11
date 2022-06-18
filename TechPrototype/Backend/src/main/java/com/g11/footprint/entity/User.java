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


    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JsonIgnore
    Set<Post> post;

    public User() {

    }

    public User(User user) {
        uid = user.uid;
        name = user.name;
        password = user.password;
        iconUrl = user.iconUrl;
        email = user.email;
        post = user.post;
    }
}
