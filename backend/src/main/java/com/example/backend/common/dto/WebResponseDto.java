package com.example.backend.common.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class WebResponseDto<T> {
	private String code;
	private T content;
	private String message;

	public static <T> WebResponseDto<T> success (T content) {
		return new WebResponseDto<>(HttpStatus.OK.name(), content, "");
	}

	public static <T> WebResponseDto<T> success (T content, HttpStatus httpStatus) {
		return new WebResponseDto<>(httpStatus.name(), content, "");
	}

	public static <T> WebResponseDto failure (String message, HttpStatus httpStatus) {
		return WebResponseDto.builder()
			.message(message)
			.code(httpStatus.name())
			.build();
	}
}