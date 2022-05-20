package com.example.backend.todo.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Todo {
	@Id
	@GeneratedValue(strategy = IDENTITY)
	private Long id;

	@Column(columnDefinition = "TEXT", nullable = false)
	private String text;

	@Column(columnDefinition = "TINYINT")
	private Boolean isDone;

	@Builder
	public Todo(Long id, String text, Boolean isDone) {
		this.id = id;
		this.text = text;
		this.isDone = isDone;
	}
}
