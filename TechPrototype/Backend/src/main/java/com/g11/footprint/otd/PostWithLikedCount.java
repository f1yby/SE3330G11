package com.g11.footprint.otd;

import com.g11.footprint.entity.Post;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostWithLikedCount extends Post {
    Integer fid;
    Integer uid;
    Integer liked;

    public PostWithLikedCount(Post post) {
        super(post);
        fid = post.getFootPrint().getFid();
        uid = post.getUser().getUid();
        liked = post.getLikedUser().size();
    }

}
