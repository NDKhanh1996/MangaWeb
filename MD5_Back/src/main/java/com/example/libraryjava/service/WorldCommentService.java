package com.example.libraryjava.service;

import com.example.libraryjava.model.WorldComment;
import com.example.libraryjava.repository.WorldCommentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorldCommentService implements IWorldComment {
    private final WorldCommentRepository worldCommentRepository;

    public WorldCommentService(WorldCommentRepository worldCommentRepository) {
        this.worldCommentRepository = worldCommentRepository;
    }

    @Override
    public List<WorldComment> getAllComment() {
        return worldCommentRepository.findAll();
    }

    @Override
    public void addWorldComment(WorldComment worldComment) {
        worldCommentRepository.save(worldComment);
    }

    @Override
    public void updateWorldComment(long id, WorldComment worldComment) {
        if (worldComment != null) {
            WorldComment newWorldComment = worldCommentRepository.getReferenceById(id);
            newWorldComment.setContent(worldComment.getContent());
            worldCommentRepository.save(newWorldComment);
        }
    }

    @Override
    public void deleteWorldComment(long id) {
        WorldComment worldComment = worldCommentRepository.getReferenceById(id);
        worldCommentRepository.delete(worldComment);
    }
}