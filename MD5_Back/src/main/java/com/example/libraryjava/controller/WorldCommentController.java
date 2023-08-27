package com.example.libraryjava.controller;

import com.example.libraryjava.model.WorldComment;
import com.example.libraryjava.service.WorldCommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/worldComment")
@CrossOrigin
public class WorldCommentController {
    private final WorldCommentService worldCommentService;

    public WorldCommentController(WorldCommentService worldCommentService) {
        this.worldCommentService = worldCommentService;
    }

    @GetMapping("/")
    public ResponseEntity<Object> getAllWorldComment() {
        List<WorldComment> worldCommentList = worldCommentService.getAllComment();
        Object responseObject = new Object() {
            public final List<WorldComment> result = worldCommentList;
            public final String message = "Get all comment complete";
            public final int status = HttpStatus.OK.value();
        };
        return new ResponseEntity<>(responseObject, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Object> addWorldComment(@RequestBody WorldComment worldComment) {
        worldCommentService.addWorldComment(worldComment);
        Object responseObject = new Object() {
            public final String message = "World comment added successfully.";
            public final int status = HttpStatus.CREATED.value();
        };
        return new ResponseEntity<>(responseObject, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Void> updateWorldComment(@PathVariable("id") long id, @RequestBody WorldComment worldComment) {
        worldCommentService.updateWorldComment(id, worldComment);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> deleteWorldComment(@PathVariable("id") long id) {
        worldCommentService.deleteWorldComment(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}