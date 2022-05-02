package com.g11.footprint.controller;

import com.g11.footprint.entity.FootPrint;
import com.g11.footprint.entity.User;
import com.g11.footprint.repository.FootPrintRepository;
import com.g11.footprint.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping(path = "/footprint")
public class FootPrintController {
    @Autowired
    private FootPrintRepository footPrintRepository;
    @Autowired
    private UserRepository userRepository;

    @PostMapping(path = "/add")
    public @ResponseBody FootPrint AddFootPrint(@RequestParam Integer uid, @RequestParam Integer trid) {
        FootPrint footPrint = new FootPrint();
        Optional<User> result = userRepository.findById(uid);
        if (result.isPresent()) {
            footPrint.setUser(result.get());
            footPrint.setTrid(trid);
            footPrintRepository.save(footPrint);
        }
        return footPrint;
    }

    @PostMapping(path = "/findByUid")
    public @ResponseBody List<FootPrint> findFootPrintByUid(@RequestParam Integer uid) {
        Optional<User> user = userRepository.findById(uid);
        return user.map(value -> footPrintRepository.getAllByUser(value)).orElse(null);
    }
}
