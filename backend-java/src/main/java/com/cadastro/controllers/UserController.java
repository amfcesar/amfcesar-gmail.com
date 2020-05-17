package com.cadastro.controllers;

import com.cadastro.dtos.UserDto;
import com.cadastro.entity.User;
import com.cadastro.service.UserService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/user")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class UserController {

    final private UserService userService;
    final private ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<UserDto>> listAllUser() {
        List<UserDto> listDto = new ArrayList<>();
        userService.findAll(Sort.by("name").ascending())
                .forEach(emp -> listDto.add(modelMapper.map(emp, UserDto.class)));

        return ResponseEntity.ok(listDto);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<UserDto> update(@NotEmpty @PathVariable("id") Long id,
                                          @Valid @RequestBody UserDto userDto) {

        userDto.setId(id);
        User user = this.modelMapper.map(userDto, User.class);
        user = this.userService.save(user);

        return ResponseEntity.ok(this.modelMapper.map(user, UserDto.class));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> remover(@NotEmpty @PathVariable("id") Long id ) {
        Optional<User> user = this.userService.findById(id);

        if(!user.isPresent()) {
            return ResponseEntity.noContent().build();
        }

        this.userService.remover(id);
        return ResponseEntity.ok().build();
    }
    @GetMapping(value = "/{id}")
    public ResponseEntity<?> findById(@NotEmpty @PathVariable("id") Long id ) {
        Optional<User> user = this.userService.findById(id);

        if(!user.isPresent()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(user.get());
    }

    @PostMapping
    public ResponseEntity<UserDto> save(@Valid @RequestBody UserDto userDto) {
        User user = this.modelMapper.map(userDto, User.class);
        user = this.userService.save(user);
        return ResponseEntity.ok().body(this.modelMapper.map(user, UserDto.class));
    }

}
