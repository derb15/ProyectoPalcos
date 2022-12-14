package com.example.proyectopalcos.Controller;


import com.example.proyectopalcos.model.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.proyectopalcos.service.AdminService;


import java.util.List;

@RestController
@RequestMapping("/api/Admin")
public class AdminController {
    @Autowired
    private AdminService adminService;
    @GetMapping("/all")
    public List<Admin> getAll(){
        return adminService.getAll();
    }
    @PostMapping("/save")
    public Admin save(@RequestBody Admin s){
        return adminService.save(s);
    }
}
