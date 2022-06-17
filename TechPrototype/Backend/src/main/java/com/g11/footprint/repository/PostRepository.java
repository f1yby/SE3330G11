package com.g11.footprint.repository;

import com.g11.footprint.entity.Post;
import org.springframework.data.repository.CrudRepository;

public interface PostRepository extends CrudRepository<Post, Integer> {
    Iterable<Post> findAllByTag(String tag);

    Iterable<Post> findAllByUser_Uid(Integer user_Uid);
}
