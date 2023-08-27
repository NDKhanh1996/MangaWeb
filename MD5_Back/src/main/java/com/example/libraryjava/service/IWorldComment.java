package com.example.libraryjava.service;

import com.example.libraryjava.model.WorldComment;

import java.util.List;

public interface IWorldComment {
    public List<WorldComment> getAllComment();

    public void addWorldComment(WorldComment worldComment);

    public void updateWorldComment(long id, WorldComment worldComment);
    public void deleteWorldComment(long id);
}