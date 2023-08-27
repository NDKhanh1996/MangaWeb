package com.example.libraryjava.model;


import jakarta.persistence.*;

@Entity
@Table(name = "book")
public class Book {
    @Id
    @GeneratedValue
    private long id;
    @Column(name = "name")
    private String name;
    @Column(name = "categories")
    private String categories;
    @Column(name = "author")
    private String author;
    @Column(name = "cover")
    private String cover;
    @Column(name = "content")
    private String content;
    @Column(name = "comments")
    private String comments;    // json string

    public Book() {

    }

    public Book(String name, String categories, String author, String cover, String content, String comments) {
        this.name = name;
        this.categories = categories;
        this.author = author;
        this.cover = cover;
        this.content = content;
        this.comments = comments;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategories() {
        return categories;
    }

    public void setCategories(String categories) {
        this.categories = categories;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getCover() {
        return cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }
}