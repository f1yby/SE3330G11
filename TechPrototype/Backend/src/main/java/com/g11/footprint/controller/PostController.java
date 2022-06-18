package com.g11.footprint.controller;


import com.g11.footprint.dto.PostCommentWithUserName;
import com.g11.footprint.dto.PostWithLikedCount;
import com.g11.footprint.entity.FootPrint;
import com.g11.footprint.entity.Post;
import com.g11.footprint.entity.PostComment;
import com.g11.footprint.entity.User;
import com.g11.footprint.repository.FootPrintRepository;
import com.g11.footprint.repository.PostRepository;
import com.g11.footprint.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.LinkedList;
import java.util.Optional;

@Controller
@RequestMapping(path = "/post")
public class PostController {
    @Autowired
    PostRepository postRepository;
    @Autowired
    FootPrintRepository footPrintRepository;

    @Autowired
    UserRepository userRepository;

    @PostMapping(path = "/add")
    public @ResponseBody String add(@RequestParam Integer fid, @RequestParam String topic, @RequestParam String content, @RequestParam String tag) {
        Optional<FootPrint> optionalFootPrint = footPrintRepository.findById(fid);
        if (optionalFootPrint.isPresent()) {
            Post post = new Post();
            post.setTopic(topic);
            post.setTag(tag);
            post.setContent(content);
            post.setFootPrint(optionalFootPrint.get());
            post.setUser(optionalFootPrint.get().getUser());
            postRepository.save(post);
            return "Ok";

        }
        return "Invalid Fid";
    }

    @RequestMapping(path = "/like")
    public @ResponseBody String like(@RequestParam Integer uid, @RequestParam Integer pid) {
        Optional<User> optionalUser = userRepository.findById(uid);
        Optional<Post> optionalPost = postRepository.findById(pid);
        if (optionalPost.isPresent()) {
            if (optionalUser.isPresent()) {
                optionalPost.get().getLikedUser().add(optionalUser.get());
                postRepository.save(optionalPost.get());
                return "Ok";
            }
            return "Invalid Uid";
        }
        return "Invalid Pid";
    }

    @RequestMapping(path = "/comment/add")
    public @ResponseBody String addComment(@RequestParam Integer uid, @RequestParam Integer pid, @RequestParam String content) {
        Optional<User> optionalUser = userRepository.findById(uid);
        Optional<Post> optionalPost = postRepository.findById(pid);
        if (optionalPost.isPresent()) {
            if (optionalUser.isPresent()) {
                PostComment postComment = new PostComment();
                postComment.setUser(optionalUser.get());
                postComment.setContent(content);
                optionalPost.get().getPostComments().add(postComment);
                postRepository.save(optionalPost.get());
                return "Ok";
            }
            return "Invalid Uid";
        }
        return "Invalid Pid";
    }


    @RequestMapping(path = "/comment/findAllByPid")
    public @ResponseBody Iterable<PostCommentWithUserName> findAllCommentsByPid( @RequestParam Integer pid) {
        Optional<Post> optionalPost = postRepository.findById(pid);
        if (optionalPost.isPresent()) {
            LinkedList<PostCommentWithUserName> postCommentWithUserNames = new LinkedList<>();

            optionalPost.get().getPostComments().forEach(postComment -> postCommentWithUserNames.add(new PostCommentWithUserName(postComment)));
            return postCommentWithUserNames;
        }
        return new LinkedList<>();
    }

    @RequestMapping(path = "/findAll")
    public @ResponseBody Iterable<PostWithLikedCount> findAll() {
        Iterable<Post> posts = postRepository.findAll();
        LinkedList<PostWithLikedCount> postWithLikedCounts = new LinkedList<>();
        posts.forEach(post -> postWithLikedCounts.add(new PostWithLikedCount(post)));
        return postWithLikedCounts;
    }

    @RequestMapping(path = "/findAllByTag")
    public @ResponseBody Iterable<PostWithLikedCount> findAllByTag(String tag) {
        Iterable<Post> posts = postRepository.findAllByTag(tag);
        LinkedList<PostWithLikedCount> postWithLikedCounts = new LinkedList<>();
        posts.forEach(post -> postWithLikedCounts.add(new PostWithLikedCount(post)));
        return postWithLikedCounts;
    }

    @RequestMapping(path = "/findAllByUid")
    public @ResponseBody Iterable<PostWithLikedCount> findAllByUser_Uid(Integer uid) {
        Iterable<Post> posts = postRepository.findAllByUser_Uid(uid);
        LinkedList<PostWithLikedCount> postWithLikedCounts = new LinkedList<>();
        posts.forEach(post -> postWithLikedCounts.add(new PostWithLikedCount(post)));
        return postWithLikedCounts;
    }
}
