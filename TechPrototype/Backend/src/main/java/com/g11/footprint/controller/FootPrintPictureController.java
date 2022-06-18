package com.g11.footprint.controller;

import com.g11.footprint.entity.FootPrint;
import com.g11.footprint.entity.FootPrintPicture;
import com.g11.footprint.repository.FootPrintRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Controller
@RequestMapping(path = "/footprint/picture")
public class FootPrintPictureController {
    @Autowired
    FootPrintRepository footPrintRepository;

    @PostMapping(path = "/add")
    public @ResponseBody String add(@RequestParam Integer fid, @RequestParam String latitude, @RequestParam String longitude, @RequestParam String pictureUrl) {

        Optional<FootPrint> footPrintOptional = footPrintRepository.findById(fid);
        if (footPrintOptional.isPresent()) {
            FootPrintPicture footPrintPicture = new FootPrintPicture();
            FootPrint footPrint = footPrintOptional.get();
            footPrintPicture.setPictureUrl(pictureUrl);
            footPrintPicture.setLatitude(latitude);
            footPrintPicture.setLongitude(longitude);
            Set<FootPrintPicture> pictureSet = footPrint.getFootPrintPicture();
            pictureSet.add(footPrintPicture);
            footPrint.setFootPrintPicture(pictureSet);
            footPrintRepository.save(footPrint);
            return "Ok";
        }
        return "Invalid Fid";
    }

    @PostMapping(path = "/findAllByFid")
    public @ResponseBody Iterable<FootPrintPicture> findAllByFid(@RequestParam Integer fid) {
        return footPrintRepository.findById(fid).map(FootPrint::getFootPrintPicture).orElse(new HashSet<>());
    }

}
