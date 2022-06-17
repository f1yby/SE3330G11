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

import java.util.Optional;

@Controller
@RequestMapping(path = "/footprint")
public class FootPrintController {
    @Autowired
    FootPrintRepository footPrintRepository;
    @Autowired
    UserRepository userRepository;

    @PostMapping(path = "/add")
    public @ResponseBody String add(@RequestParam Integer uid, @RequestParam Integer trid, @RequestParam Integer date, @RequestParam String location, @RequestParam String centerLatitude, @RequestParam String centerLongitude, @RequestParam String zoom) {
        FootPrint footPrint = new FootPrint();
        Optional<User> optionalUser = userRepository.findById(uid);
        if (optionalUser.isPresent()) {
            footPrint.setUser(optionalUser.get());
            footPrint.setTrid(trid);
            footPrint.setDate(date);
            footPrint.setLocation(location);
            footPrint.setCenterLatitude(centerLatitude);
            footPrint.setCenterLongitude(centerLongitude);
            footPrint.setZoom(zoom);
            footPrintRepository.save(footPrint);
            return "Ok";
        }
        return "Invalid Uid";
    }

    @PostMapping(path = "/findByUid")
    public @ResponseBody Iterable<FootPrint> findFootPrintByUid(@RequestParam Integer uid) {
        return footPrintRepository.getAllByUserUid(uid);
    }

    @PostMapping(path = "/findByUidAndDatePeriodAndLocation")
    public @ResponseBody Iterable<FootPrint> findFootPrintByUidAndDatePeriodAndLocation(@RequestParam Integer uid, @RequestParam Integer dateStart, @RequestParam Integer dateEnd, @RequestParam String location) {
        return footPrintRepository.findAllByUserUidAndDatePeriodAndLocation(uid, dateStart, dateEnd, location);
    }

    @PostMapping(path = "/findByUidAndLocation")
    public @ResponseBody Iterable<FootPrint> findFootPrintByUidAndLocation(@RequestParam Integer uid, @RequestParam String location) {
        return footPrintRepository.getAllByUserUidAndLocation(uid, location);
    }

    @PostMapping(path = "/findByUidAndDatePeriod")
    public @ResponseBody Iterable<FootPrint> findFootPrintByUidAndDatePeriod(@RequestParam Integer uid, @RequestParam Integer dateStart, @RequestParam Integer dateEnd) {
        return footPrintRepository.getAllByUserUidAndDatePeriod(uid, dateStart, dateEnd);
    }

}
