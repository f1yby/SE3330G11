package com.g11.footprint.dto;

import com.g11.footprint.entity.PostComment;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostCommentWithUserName extends PostComment {
    String name;
    String iconUrl;

    public PostCommentWithUserName(PostComment postComment) {
        super(postComment);
        name = postComment.getUser().getName();
        iconUrl = postComment.getUser().getIconUrl();
    }

}
