package com.g11.footprint.controller;

import com.g11.footprint.entity.FootPrint;
import com.g11.footprint.entity.FootPrintPicture;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class FootPrintPictureControllerTest extends FootPrintPictureController {

    @Test
    void add() {
        Iterable<FootPrint> footPrints = footPrintRepository.findAll();
        FootPrint test = footPrints.iterator().next();
        test.setFootPrintPicture(new HashSet<>());
        footPrintRepository.save(test);

        assertEquals("Ok", add(test.getFid(), "100", "200", "hello world"));
        assertEquals("Invalid Fid", add(-1, "100", "200", "hello world"));

    }

    @Test
    void findAllByFid() {
        assertEquals("[]",findAllByFid(-1).toString());

    }
}
