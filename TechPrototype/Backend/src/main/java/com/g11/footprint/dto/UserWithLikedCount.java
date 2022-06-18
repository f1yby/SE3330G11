package com.g11.footprint.dto;

import com.g11.footprint.entity.User;
import lombok.Getter;
import lombok.Setter;

import java.util.function.Consumer;

@Getter
@Setter
public class UserWithLikedCount extends User{
    Integer liked;

    public UserWithLikedCount(User user) {
        super(user);
        liked = 0;

        user.getPost().forEach(post -> liked += post.getLikedUser().size());
    }
}
