package com.example.libraryjava.service;

import com.example.libraryjava.model.Account;

import java.util.List;

public interface IAccount {
    public List<Account> getAllAccount();

    public void addAccount(Account account);

    public void updateAccount(long id, Account account);

    public Account getAccountById(long id);

    public Account getAccountByName(String name);

    Account login(String email, String password);
}