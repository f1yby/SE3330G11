package com.g11.footprint.repository;

import com.g11.footprint.entity.Post;
<<<<<<< HEAD
//import javafx.geometry.Pos;
=======
>>>>>>> 52f96d2da36cc38b36ad140004991e49a2e65bfd
import org.springframework.data.repository.CrudRepository;

public interface PostRepository extends CrudRepository<Post, Integer> {
    Iterable<Post> findAllByTag(String tag);

    Iterable<Post> findAllByUser_Uid(Integer user_Uid);
}
