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
    public @ResponseBody Integer AddFootPrint(@RequestParam Integer uid, @RequestParam Integer trid, @RequestParam Integer date, @RequestParam String location, @RequestParam String centerLatitude, @RequestParam String centerLongitude, @RequestParam String zoom) {
        FootPrint footPrint = new FootPrint();
        Optional<User> result = userRepository.findById(uid);
        if (result.isPresent()) {
            footPrint.setUser(result.get());
            footPrint.setTrid(trid);
            footPrint.setDate(date);
            footPrint.setLocation(location);
            footPrint.setCenterLatitude(centerLatitude);
            footPrint.setCenterLongitude(centerLongitude);
            footPrint.setZoom(zoom);
            footPrintRepository.save(footPrint);
            return footPrint.getFid();
        }
        return null;
    }

    @PostMapping(path = "/findByUid")
    public @ResponseBody List<FootPrint> findFootPrintByUid(@RequestParam Integer uid) {
        Optional<User> user = userRepository.findById(uid);
        return user.map(value -> footPrintRepository.getAllByUser(value)).orElse(null);
    }

    @PostMapping(path = "/findByUidAndDatePeriodAndLocation")
    public @ResponseBody List<FootPrint> findFootPrintByUidAndDatePeriodAndLocation(@RequestParam Integer uid, @RequestParam Integer dateStart, @RequestParam Integer dateEnd, @RequestParam String location) {
        Optional<User> user = userRepository.findById(uid);
        return user.map(value -> footPrintRepository.getAllByUserAndDatePeriodAndLocation(value, dateStart, dateEnd, location)).orElse(null);
    }

    @PostMapping(path = "/findByUidAndLocation")
    public @ResponseBody List<FootPrint> findFootPrintByUidAndLocation(@RequestParam Integer uid, @RequestParam String location) {
        Optional<User> user = userRepository.findById(uid);
        return user.map(value -> footPrintRepository.getAllByUserAndLocation(value, location)).orElse(null);
    }

    @PostMapping(path = "/findByUidAndDatePeriod")
    public @ResponseBody List<FootPrint> findFootPrintByUidAndDatePeriod(@RequestParam Integer uid, @RequestParam Integer dateStart, @RequestParam Integer dateEnd) {
        Optional<User> user = userRepository.findById(uid);
        return user.map(value -> footPrintRepository.getAllByUserAndDatePeriod(value, dateStart, dateEnd)).orElse(null);
    }

}
