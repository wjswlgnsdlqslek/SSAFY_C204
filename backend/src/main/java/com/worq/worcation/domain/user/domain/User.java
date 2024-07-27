package com.worq.worcation.domain.user.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.worq.worcation.domain.worcation.domain.Worcation;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class User implements UserDetails {
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

    @Column(name = "user_favorite_sigungu", nullable = false)
    private String sigungu;

    @Column(name = "user_photo")
    private String profileImg;

    @Column(name = "user_report_count")
    private Long report;

    @Enumerated(EnumType.STRING)
    @JsonIgnore
    private Role role;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(this.role.toString()));
        return authorities;
    }
    @Override
    public String getUsername() {
        return this.email;
    }
}
