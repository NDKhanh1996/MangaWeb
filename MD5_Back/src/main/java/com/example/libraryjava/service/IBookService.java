package com.example.libraryjava.service;

import com.example.libraryjava.model.Book;

import java.util.List;

public interface IBookService {
    public List<Book> getAllBook();

    public void addBook(Book book);

    public void updateBook(long id, Book book);

    public void deleteBook(long id);

    public Book getOneBook(long id);
}