// src/main/java/com/worq/worcation/domain/worcation/domain/Worcation.java
package com.worq.worcation.domain.worcation.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
@Entity
public class Worcation {

    // Getters and Setters
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long userId;
    private Date start;
    private Date end;
    private String sido;
    private String gugun;
    private String job;
    private String type;

}
