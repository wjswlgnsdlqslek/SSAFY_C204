// src/main/java/com/worq/worcation/domain/dashboard/dto/WorcationResponseDto.java
package com.worq.worcation.domain.dashboard.dto;

import com.worq.worcation.domain.dashboard.domain.Worcation;

import java.util.Date;

public class WorcationResponseDto {
    private Long id;
    private Long userId;
    private Date start;
    private Date end;
    private String sido;
    private String gugun;
    private String job;
    private String type;

    public WorcationResponseDto(Worcation worcation) {
        this.id = worcation.getId();
        this.userId = worcation.getUserId();
        this.start = worcation.getStart();
        this.end = worcation.getEnd();
        this.sido = worcation.getSido();
        this.gugun = worcation.getGugun();
        this.job = worcation.getJob();
        this.type = worcation.getType();
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Date getStart() {
        return start;
    }

    public void setStart(Date start) {
        this.start = start;
    }

    public Date getEnd() {
        return end;
    }

    public void setEnd(Date end) {
        this.end = end;
    }

    public String getSido() {
        return sido;
    }

    public void setSido(String sido) {
        this.sido = sido;
    }

    public String getGugun() {
        return gugun;
    }

    public void setGugun(String gugun) {
        this.gugun = gugun;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
