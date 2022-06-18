package com.g11.footprint.controller;

import com.g11.footprint.entity.FootPrint;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class PostControllerTest extends PostController {
    @Test
    void add() {
        postRepository.deleteAll();
        Iterable<FootPrint> footPrints = footPrintRepository.findAll();
        FootPrint test = footPrints.iterator().next();
        assertEquals("Ok", add(test.getFid(), "test", "hello world", "test"));
        assertEquals("Invalid Fid", add(-1, "test", "hello world", "test"));
    }

    @Test
    void like() {
        assertEquals("Ok", like(userRepository.findByName("test").get().getUid(), postRepository.findAll().iterator().next().getId()));
        assertEquals("Invalid Uid", like(-1, postRepository.findAll().iterator().next().getId()));
        assertEquals("Invalid Pid", like(userRepository.findByName("test").get().getUid(), -1));

    }


    @Test
    void finds() {
        Integer uid = userRepository.findByName("test").get().getUid();
        assertEquals(postRepository.findAllByTag("test").iterator().next().getId(), findAllByTag("test").iterator().next().getId());
        assertEquals(postRepository.findAllByUser_Uid(uid).iterator().next().getId(), findAllByUser_Uid(uid).iterator().next().getId());
        assertEquals(postRepository.findAll().iterator().next().getId(), findAll().iterator().next().getId());


    }

}
