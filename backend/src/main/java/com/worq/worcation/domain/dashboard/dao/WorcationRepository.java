// src/main/java/com/worq/worcation/domain/dashboard/dao/WorcationRepository.java
package com.worq.worcation.domain.dashboard.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.worq.worcation.domain.dashboard.domain.Worcation;

@Repository
public interface WorcationRepository extends JpaRepository<Worcation, Long> {
}
