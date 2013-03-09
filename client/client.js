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
      "status" : 0
    });
  }
});

Template.pending.reservations = function() {
  return Reservations.find({status:0});
}