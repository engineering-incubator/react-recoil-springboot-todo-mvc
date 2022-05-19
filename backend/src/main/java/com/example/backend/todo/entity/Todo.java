package com.example.backend.todo.entity;

import lombok.*;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Todo {
	@Id
	@GeneratedValue(strategy = IDENTITY)
	private Long id;

	@Column(columnDefinition = "TEXT", nullable = false)
	private String text;

	@Column(columnDefinition = "TINYINT")
	private Boolean isDone;

	@Builder
	public Todo(String text, Boolean isDone) {
		this.text = text;
		this.isDone = isDone;
	}
}
