package com.example.libraryjava.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "worldComment")
public class WorldComment {
    @Id
    @GeneratedValue
    private long id;
    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;
    @Column(name = "comment_time")
    private Date commentTime;
    @Column(name = "content")
    private String content;

    public WorldComment() {
    }

    public WorldComment(Account account, Date commentTime, String content) {
        this.account = account;
        this.commentTime = commentTime;
        this.content = content;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public Date getCommentTime() {
        return commentTime;
    }

    public void setCommentTime(Date commentTime) {
        this.commentTime = commentTime;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}