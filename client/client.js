
Template.form.events({
  'click #form-submit' : function () {
    // template data, if any, is available in 'this'
   alert('clicked');
   var rec = {
      "name" : template.find('name').value,
      "phone" : template.find('phone').value,
      "number" : template.find('number').value,
      "status" : 0
    };
    alert(rec.name);
    return Reservations.insert({name: "Foo"});
  }
});

/*
 <form>
 <input type="text" name="name" placeholder="Name" />
 <input type="tel" name="phone" placeholder="Phone Number" />
 <input type="text" name="number" placeholder="Number in Party" />
 <button type="submit" class="button radius medium eight columns offset-by-four">Add Reservation</button>
 </form>
 */