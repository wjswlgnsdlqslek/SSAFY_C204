package com.worq.worcation.domain.plan.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "task", schema = "worQ")
public class Plan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "task_id", nullable = false)
    private Long id;

    @Size(max = 100)
    @NotNull
    @Column(name = "task_content", nullable = false, length = 100)
    private String taskContent;

    @NotNull
    @Column(name = "task_start_time", nullable = false)
    private Instant taskStartTime;

    @NotNull
    @Column(name = "task_end_time", nullable = false)
    private Instant taskEndTime;

    @NotNull
    @Column(name = "task_is_finish", nullable = false)
    private Boolean taskIsFinish = false;

    @Lob
    @Column(name = "task_important")
    private String taskImportant;

    @NotNull
    @Lob
    @Column(name = "task_type", nullable = false)
    private String taskType;

    @Size(max = 100)
    @NotNull
    @Column(name = "task_title", nullable = false, length = 100)
    private String taskTitle;

}