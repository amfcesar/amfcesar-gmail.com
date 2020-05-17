package com.cadastro.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User extends BaseEntity<Long> {

    @Column(nullable = true)
    private String name;

    @Column(unique = true, nullable = true)
    private String email;

}
