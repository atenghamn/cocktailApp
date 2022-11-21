package com.example.cocktailbackend.service;

import com.example.cocktailbackend.dto.Drink;
import com.example.cocktailbackend.dto.DrinkList;
import com.example.cocktailbackend.dto.IngridientList;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

@Service
public class CocktailService {

    private final WebClient webClient;

    public CocktailService(WebClient webClient) {
        this.webClient = webClient;
    }

    public DrinkList getByName(String name) {
        return webClient
                .get()
                .uri(String.format("/search.php?s=%s", name))
                .exchangeToMono(clientResponse -> clientResponse.bodyToMono(DrinkList.class))
                .block();
    }

    public IngridientList getByIngridient(String name) {
        return webClient
                .get()
                .uri(String.format("/search.php?i=%s", name))
                .exchangeToMono(clientResponse -> clientResponse.bodyToMono(IngridientList.class))
                .block();
    }

    public DrinkList getRandom() {
        return webClient
                .get()
                .uri("/random.php")
                .exchangeToMono(clientResponse -> clientResponse.bodyToMono(DrinkList.class))
                .block();
    }
}
