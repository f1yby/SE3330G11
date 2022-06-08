package com.g11.footprint.controller;

import com.g11.footprint.entity.User;
import com.g11.footprint.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path = "/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping(path = "/add")
    public @ResponseBody String addNewUser(@RequestParam String name, @RequestParam String password, @RequestParam String email, @RequestParam String iconUrl) {
        if (userRepository.findByName(name).isPresent()) {
            return "Err";
        }
        User user = new User();
        user.setName(name);
        user.setPassword(password);
        user.setEmail(email);
        user.setIconUrl(iconUrl);
        user.setCommentCount(0);
        user.setLikedCount(0);
        userRepository.save(user);
        return "Ok";
    }

    @PostMapping(path = "/auth")
    public @ResponseBody Integer findUserByNameAndPassword(@RequestParam String name, @RequestParam String password) {
        return userRepository.findByNameAndPassword(name, password).map(User::getUid).orElse(null);
    }

    @GetMapping(path = "/getAll")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping(path = "/search")
    public @ResponseBody User getByUid(@RequestParam User u) {
        return u;
    }
}
