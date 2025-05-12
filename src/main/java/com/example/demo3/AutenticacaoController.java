package com.example.demo3;// Imports necessários para o Spring Boot
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/autenticar")
public class AutenticacaoController {

    @PostMapping("/voz")
    public ResponseEntity<String> autenticarPorVoz() {

        return ResponseEntity.ok("Autenticação por voz válida");
    }

    @PostMapping("/face")
    public ResponseEntity<String> autenticarPorFace(@RequestBody byte[] imagem) {

        return ResponseEntity.ok("Reconhecimento facial válido");
    }

    @PostMapping("/biometria")
    public ResponseEntity<String> autenticarPorBiometria() {

        return ResponseEntity.ok("Biometria válida");
    }
}
