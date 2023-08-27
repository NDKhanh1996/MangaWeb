package com.example.libraryjava.service;

import com.example.libraryjava.model.Account;
import org.springframework.stereotype.Service;
import com.example.libraryjava.repository.AccountRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AccountService implements IAccount {
    private final AccountRepository accountRepository;

    public AccountService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }


    @Override
    public List<Account> getAllAccount() {
        return accountRepository.findAll();
    }

    @Override
    public void addAccount(Account account) {
        accountRepository.save(account);
    }

    @Override
    public void updateAccount(long id, Account account) {
        if (account != null) {
            Account newAccount = accountRepository.getReferenceById(id);
            newAccount.setName(account.getName());
            newAccount.setPassword(account.getPassword());
            accountRepository.save(newAccount);
        }
    }

    @Override
    public Account getAccountById(long id) {
        Optional<Account> accountOptional = accountRepository.findById(id);
        return accountOptional.orElse(null);
    }

    @Override
    public Account getAccountByName(String name) {
        return accountRepository.findByName(name);
    }

    @Override
    public Account login(String email, String password) {
        Account account = accountRepository.findByName(email);
        return (account != null && password.equals(account.getPassword())) ? account : null;
    }
}