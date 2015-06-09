(function() {

  return {
    events: {
      'app.activated':'getRquiredFields'
    },
    
    getRquiredFields: function(){
        
        var required_fields_array = [];
        var ticket_fields = this.ticketFields();
        
        // add field's name to required_fields_array if isRequired() returns true
        for (var i=0; i<ticket_fields.length; i++){
            if (ticket_fields[i].isRequired() === true){
                required_fields_array.push(ticket_fields[i].name());
            }
        }
        
        this.switchTo('required_fields', { 'required_fields':required_fields_array });
    }
  };

}());
