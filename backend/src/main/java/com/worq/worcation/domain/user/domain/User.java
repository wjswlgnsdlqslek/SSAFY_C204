package com.worq.worcation.domain.user.domain;

import com.worq.worcation.domain.worcation.domain.Worcation;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    @OneToOne(mappedBy = "user")
    private Worcation worcation;

    @Column(name = "user_email", nullable = false, unique = true)
    private String email;

    @Column(name = "user_password", nullable = false)
    private String password;

    @Column(name = "user_nickname", nullable = false)
    private String nickName;

    @Column(name = "user_phone", nullable = false, unique = true)
    private String phone;

    @Column(name = "user_favorite_sido", nullable = false)
    private String sido;

    @Column(name = "user_favorite_gugun", nullable = false)
    private String gugun;

    @Column(name = "user_photo")
    private String profileImg;

    @Column(name = "user_report_count")
    private Long report;
}
