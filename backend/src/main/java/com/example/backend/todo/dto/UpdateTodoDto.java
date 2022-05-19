package com.example.backend.todo.dto;

import lombok.Getter;

@Getter
public class UpdateTodoDto {
	private String text;
	private Boolean isDone;
}
