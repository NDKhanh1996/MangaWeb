package com.example.libraryjava.repository;

import com.example.libraryjava.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {

}