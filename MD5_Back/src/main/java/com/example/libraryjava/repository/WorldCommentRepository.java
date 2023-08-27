package com.example.libraryjava.repository;

import com.example.libraryjava.model.WorldComment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorldCommentRepository extends JpaRepository<WorldComment, Long> {
}