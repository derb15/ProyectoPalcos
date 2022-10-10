package com.example.proyectopalcos.service;

import com.example.proyectopalcos.Repository.Crud.MessageRepository;
import com.example.proyectopalcos.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;

    public List<Message> getAll(){
        return messageRepository.getAll();
    }
    public Optional<Message> getMessage(int id){
        return messageRepository.getMessage(id);
    }
    public Message save(Message m){
        if(m.getId()==null){
            return messageRepository.save(m);
        }else{
            Optional<Message> e=messageRepository.getMessage(m.getId());
            if(e.isPresent()){
                return m;
            }else{
                return messageRepository.save(m);
            }
        }
    }
    public Message update(Message m) {
        if (m.getId() != null) {
            Optional<Message> q = messageRepository.getMessage(m.getId());
            if (q.isPresent()) {
                if (m.getMessageText() != null) {
                    q.get().setMessageText(m.getMessageText());
                }
                messageRepository.save(q.get());
                return q.get();
            }

        }
        return m;
    }
    public boolean delete(int id){
        boolean flag=false;
        Optional<Message>m=messageRepository.getMessage(id);
        if(m.isPresent()){
            messageRepository.delete(m.get());
            flag=true;
        }
        return flag;
    }
}
