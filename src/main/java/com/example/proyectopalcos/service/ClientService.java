package com.example.proyectopalcos.service;

import com.example.proyectopalcos.Repository.Crud.ClientRepository;

import com.example.proyectopalcos.model.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;

    public List<Client> getAll(){
        return clientRepository.getAll();
    }
    public Optional<Client> getClient(int id){
        return clientRepository.getClient(id);
    }
    public Client save(Client d){
        if(d.getId()==null){
            return clientRepository.save(d);
        }else{
            Optional<Client> e= clientRepository.getClient(d.getId());
            if(e.isPresent()){
                return d;
            }else{
                return clientRepository.save(d);
            }
        }
    }
    public Client update(Client d){
        if(d.getId()!=null){
            Optional<Client> q = clientRepository.getClient(d.getId());
            if(q.isPresent()){
                if(d.getName()!=null){
                    q.get().setName(d.getName());
                }
                if (d.getEmail()!=null){
                    q.get().setEmail(d.getEmail());
                }
                if (d.getAge()!=null){
                    q.get().setAge(d.getAge());
                }
                if (d.getPassword()!=null){
                    q.get().setPassword(d.getPassword());
                }
                clientRepository.save(q.get());
                return q.get();
            }else{
                return d;
            }
        }else{
            return d;
        }
    }
    public boolean delete(int id){
        boolean flag=false;
        Optional<Client>d= clientRepository.getClient(id);
        if(d.isPresent()){
            clientRepository.delete(d.get());
            flag=true;
        }
        return flag;
    }
}
