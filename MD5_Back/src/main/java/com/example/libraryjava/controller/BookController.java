package com.example.libraryjava.controller;

import com.example.libraryjava.model.Book;
import com.example.libraryjava.service.BookService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/book")
@CrossOrigin
public class BookController {
    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/")
    public ResponseEntity<Object> getAllBook() {
        List<Book> bookList = bookService.getAllBook();

        Object responseObject = new Object() {
            public final List<Book> result = bookList;
            public final String message = "OK";
            public final int status = HttpStatus.OK.value();
        };
        return new ResponseEntity<>(responseObject, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Object> addBook(@RequestBody Book book) { //need try
        bookService.addBook(book);
        Object responseObject = new Object() {
            public final String message = "Book added successfully.";
            public final int status = HttpStatus.CREATED.value();
        };
        return new ResponseEntity<>(responseObject, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Void> updateBook(@PathVariable("id") long id, @RequestBody Book book){
        bookService.updateBook(id, book);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> deleteBook(@PathVariable("id") long id){
            bookService.deleteBook(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/search/{id}")
    public ResponseEntity<Object> getOneBook(@PathVariable("id") long id) {
        Book book = bookService.getOneBook(id);

        Object responseObject = new Object() {
            public final Book result = book;
            public final String message = "OK";
            public final int status = HttpStatus.OK.value();
        };
        return new ResponseEntity<>(responseObject, HttpStatus.OK);
    }
}