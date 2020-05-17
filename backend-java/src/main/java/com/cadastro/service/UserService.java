package com.cadastro.service;

import com.cadastro.entity.User;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface UserService {

    Optional<User> findById(Long id);
    List<User> findAll(Sort sort);
    User save(User user);
    void remover(Long id);
}
