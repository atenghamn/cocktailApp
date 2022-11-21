package com.example.cocktailbackend.controller;

import com.example.cocktailbackend.dto.Drink;
import com.example.cocktailbackend.dto.DrinkList;
import com.example.cocktailbackend.dto.IngridientList;
import com.example.cocktailbackend.service.CocktailService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/drink")
public class DrinkController {

    private final CocktailService cocktailService;


    public DrinkController(CocktailService cocktailService) {
        this.cocktailService = cocktailService;
    }

    @GetMapping("/{name}")
    public DrinkList getByName (@PathVariable String name){
        return cocktailService.getByName(name);
    }

    @GetMapping("ingridient/{name}")
    public IngridientList getByIngridient(@PathVariable String name){
        return cocktailService.getByIngridient(name);
    }

    @GetMapping
    public DrinkList getRandom() {
        return cocktailService.getRandom();
    }
}
