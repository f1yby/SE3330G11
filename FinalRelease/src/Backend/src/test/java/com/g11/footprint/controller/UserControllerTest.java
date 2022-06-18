package com.g11.footprint.controller;

import com.g11.footprint.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class UserControllerTest extends UserController {
    @Autowired
    UserRepository userRepository;

    @Test
    void add() {
        userRepository.deleteAll();
        assertEquals("Ok", add("test", "123456", "test@test.com", "www.test.com"));
        assertEquals("Err", add("test", "123456", "test@test.com", "www.test.com"));
    }


    @Test
    void finds() {
        assertEquals(userRepository.findByName("test").get().getUid(), findUserByNameAndPassword("test", "123456"));
        assertEquals(userRepository.findAll().iterator().next().getUid(), findAllUsers().iterator().next().getUid());


    }
}
