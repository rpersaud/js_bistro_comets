
Template.form.events({
  'click input[type=submit]' : function () {
    // template data, if any, is available in 'this'
    var rec = {
      "name" : this.name,
      "phone" : this.phone,
      "number" : this.number,
      "status" : "pending"
    };
    console.log(rec);
    Reservation.insert(rec);
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