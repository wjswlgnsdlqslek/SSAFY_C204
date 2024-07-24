// src/main/java/com/worq/worcation/domain/worcation/dto/WorcationRequestDto.java
package com.worq.worcation.domain.worcation.dto;

import java.util.Date;

public class WorcationRequestDto {
    private Date start;
    private Date end;
    private String sido;
    private String gugun;
    private String job;
    private String type;

    // Getters and Setters
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
