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

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Controller
@RequestMapping(path = "/footprint/picture")
public class FootPrintPictureController {
    @Autowired
    private FootPrintRepository footPrintRepository;

    @PostMapping(path = "/add")
    public @ResponseBody String AddFootPrint(@RequestParam Integer fid, @RequestParam String latitude, @RequestParam String longitude, @RequestParam String pictureUrl) {

        Optional<FootPrint> footPrintOptional = footPrintRepository.findById(fid);
        if (footPrintOptional.isPresent()) {
            FootPrintPicture footPrintPicture = new FootPrintPicture();
            FootPrint footPrint=footPrintOptional.get();
            footPrintPicture.setPictureUrl(pictureUrl);
            footPrintPicture.setLatitude(latitude);
            footPrintPicture.setLongitude(longitude);
            footPrintPicture.setFootPrint(footPrint);
            Set<FootPrintPicture> pictureSet = footPrint.getFootPrintPicture();
            pictureSet.add(footPrintPicture);
            footPrintRepository.save(footPrint);
            return "Ok";
        }
        return "Err";
    }

    @PostMapping(path = "/findAllByFid")
    public @ResponseBody Set<FootPrintPicture> GetAllByFid(@RequestParam Integer fid) {
        return footPrintRepository.findById(fid).map(FootPrint::getFootPrintPicture).orElse(null);
    }

}
