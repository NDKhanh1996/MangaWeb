package com.example.libraryjava.service;

import com.example.libraryjava.model.Book;
import org.springframework.stereotype.Service;
import com.example.libraryjava.repository.BookRepository;

import java.util.List;
import java.util.Optional;

@Service
public class BookService implements IBookService {
    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    public void addBook(Book book) {
        bookRepository.save(book);
    }

    @Override
    public void updateBook(long id, Book book) {
        if (book != null) {
            Book newBook = bookRepository.getReferenceById(id);
            newBook.setName(book.getName());
            newBook.setCategories(book.getCategories());
            newBook.setAuthor(book.getAuthor());
            newBook.setCover(book.getCover());
            newBook.setContent(book.getContent());
            newBook.setComments(book.getComments());
            bookRepository.save(newBook);
        }
    }

    @Override
    public void deleteBook(long id) {
        Book book = bookRepository.getReferenceById(id);
        bookRepository.delete(book);
    }

    @Override
    public List<Book> getAllBook() {
        return bookRepository.findAll();
    }

    @Override
    public Book getOneBook(long id) {
        Optional<Book> bookOptional = bookRepository.findById(id);
        return bookOptional.orElse(null);
    }
}