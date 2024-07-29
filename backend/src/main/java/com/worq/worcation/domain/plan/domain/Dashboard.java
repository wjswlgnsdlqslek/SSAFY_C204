package com.worq.worcation.domain.plan.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "dashboard", schema = "worQ")
public class Dashboard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "dashboard_id", nullable = false)
    private Long id;

    @NotNull
    @Column(name = "worcation_number", nullable = false)
    private Long worcationNumber;

    @OneToMany(mappedBy = "dashboard")
    private Set<Plan> tasks = new LinkedHashSet<>();

}