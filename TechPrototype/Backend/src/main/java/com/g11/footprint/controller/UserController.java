package com.g11.footprint.controller;

import com.g11.footprint.entity.User;
import com.g11.footprint.repository.UserRepository;
import com.g11.footprint.sevice.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.atomic.AtomicLong;

@Controller
@RequestMapping(path = "/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping(path = "/add")
    public @ResponseBody Integer addNewUser(@RequestParam String name, @RequestParam String password, @RequestParam String email, @RequestParam String iconUrl) {
        User user = new User();
        user.setName(name);
        user.setPassword(password);
        user.setEmail(email);
        user.setIconUrl(iconUrl);
        user.setCommentCount(0);
        user.setLikedCount(0);
        userRepository.save(user);
        return user.getUid();
    }

    @PostMapping(path = "/auth")
    public @ResponseBody Integer checkUser(@RequestParam String name, @RequestParam String password) {
        return userRepository.auth(name, password).getUid();
    }

    @GetMapping(path = "/alemaill")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping(path = "/search")
    public @ResponseBody User getByUid(@RequestParam User u) {
        return u;
    }
}
