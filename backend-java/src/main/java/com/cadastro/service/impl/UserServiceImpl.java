package com.cadastro.service.impl;

import com.cadastro.entity.User;
import com.cadastro.repository.UserRepository;
import com.cadastro.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    public List<User> findAll(Sort sort) {
        return userRepository.findAll(sort);
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public void remover(Long id) {
        userRepository.deleteById(id);
    }
}


