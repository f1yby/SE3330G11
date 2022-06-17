package com.g11.footprint.controller;

import com.g11.footprint.repository.PostRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class FootPrintControllerTest extends FootPrintController {

    @Autowired
    PostRepository postRepository;

    @Test
    void addTest() {
        footPrintRepository.deleteAll();
        assertEquals("Ok", add(userRepository.findByName("test").get().getUid(), 1, 100, "home", "here", "there", "100%"));
        assertEquals("Invalid Uid", add(-1, 1, 100, "home", "here", "there", "100%"));
    }

    @Test
    void findsTest() {
        assertEquals("[]", findFootPrintByUid(-1).toString());
        assertEquals("[]", findFootPrintByUidAndDatePeriod(-1, -1, -1).toString());
        assertEquals("[]", findFootPrintByUidAndDatePeriodAndLocation(-1, -1, -1, "home").toString());
        assertEquals("[]", findFootPrintByUidAndLocation(-1, "home").toString());
    }

}
