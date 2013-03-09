Template.form.events({
  'click button' : function (e, t) {
    // template data, if any, is available in 'this'
    var name = t.find('#name').value;
    var raw_phone = t.find('#phone').value;
    var num = t.find('#number').value;

    if (!name.length || !raw_phone.length || !num.length) {
      console.log('nope length')
      return false;
    }
    if ( isNaN( parseInt(num) ) ) {
      console.log('nope NaN');
      return false;
    }

    var regexObj = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var goodnum= regexObj.test(raw_phone);
    if (!!goodnum) {
      var phone = raw_phone.replace(regexObj, "($1) $2-$3");
    } else {
      console.log('nope number');
      return false;
    }

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

Template.pending.events({
  'click  .pending-slot' : function (evt, tpl) {
    //alert(this._id);
    //Reservations.update({ status: 1 }, {_id: this._id});
     Reservations.update({ _id: this._id },
      {
          $set: { 'status': 1 },
      });
  },

});

Template.confirmed.list = function() {
  return Reservations.find({status:1});

}

Template.confirmed.events({
  'click .confirmed-slot': function() {
     Reservations.update({ _id: this._id },
      {
          $set: { 'status': 0 },
      });
  }

});