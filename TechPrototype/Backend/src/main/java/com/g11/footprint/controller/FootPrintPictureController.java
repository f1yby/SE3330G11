package com.g11.footprint.controller;

import com.g11.footprint.entity.FootPrint;
import com.g11.footprint.entity.FootPrintPicture;
import com.g11.footprint.entity.User;
import com.g11.footprint.repository.FootPrintPictureRepository;
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
@RequestMapping(path = "/footprint/picture")
public class FootPrintPictureController {
    @Autowired
    private FootPrintRepository footPrintRepository;

    @Autowired
    private FootPrintPictureRepository footPrintPictureRepository;

    @PostMapping(path = "/add")
    public @ResponseBody String AddFootPrint(@RequestParam Integer fid, @RequestParam String latitude, @RequestParam String longitude, @RequestParam String pictureUrl) {
        FootPrintPicture footPrintPicture = new FootPrintPicture();
        Optional<FootPrint> footPrint = footPrintRepository.findById(fid);
        if (footPrint.isPresent()) {
            footPrintPicture.setPictureUrl(pictureUrl);
            footPrintPicture.setLatitude(latitude);
            footPrintPicture.setLongitude(longitude);
            footPrintPicture.setFootPrint(footPrint.get());
            footPrintPictureRepository.save(footPrintPicture);
            return "Ok";
        }
        return "Err";
    }

    @PostMapping(path = "/findAllByFid")
    public @ResponseBody List<FootPrintPicture> GetAllByFid(@RequestParam Integer fid) {
        Optional<FootPrint> footPrint = footPrintRepository.findById(fid);
        return footPrint.map(print -> footPrintPictureRepository.getAllByFootPrint(print)).orElse(null);
    }

}
