package com.example.cocktailbackend.dto;

public record Ingridient(
        String idIngredient,
        String strIngredient,
        String strDescription,
        String strType,
        String strAlcohol,
        String strABV
) {
}
