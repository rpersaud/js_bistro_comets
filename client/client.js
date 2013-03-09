Reservations = new Meteor.Collection('reservations');

Template.form.events({
  'click button' : function (e, t) {
    // template data, if any, is available in 'this'
    var name = t.find('#name').value;
    var phone = t.find('#phone').value;
    var num = t.find('#number').value;
    Reservations.insert({
      "name" : name,
      "phone" : phone,
      "number" : num,
      "status" : 1
    });
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