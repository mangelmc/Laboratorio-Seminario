import {MESSAGES} from "/DATABASE/Collections.js";
Template.layout.helpers({
    msnList(){
        return MESSAGES.find({});
    },
});
Template.layout.events({
    "submit .chatSendMessages":function(event){
        event.preventDefault();
        var mensaje = event.target.msn.value;
        MESSAGES.insert({msn:mensaje,date:new Date()});
        //alert(mensaje);
        event.target.msn.value="";
    }
})