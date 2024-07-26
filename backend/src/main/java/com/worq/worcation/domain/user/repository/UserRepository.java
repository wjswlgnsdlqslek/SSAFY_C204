package com.worq.worcation.domain.user.repository;

import com.worq.worcation.domain.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
    User findByPhone(String phone);
    User findByNickName(String nickName);
}
