js_bistro_comets
================

ATL JS Hackathon - Team 4 - The "Comets"

* Brookes Stephens
* Robert Persaud
* Alicia Persaud

Features
========

1. Download the css template [js-bistro.zip](https://github.com/jennifershehane/js_bistro/blob/master/public/js_bistro/js-bistro.zip?raw=true) and put the contents in your project.
1. Make a reservation form.
2. Make a *Pending Reservations* queue.
3. Submit the form adds a *pending reservation* with the entered information.
4. Make sure you can enter multiple pending reservations.
5. Validate the form
  * i. reject if any of the 3 fields are empty
  * ii. reject if phone number is not valid
  * iii. reject if # in party is not a number
6. Have a *Confirmed Reservations* time slots section.
7. Clicking on a pending reservation and then clicking one of the *confirmed reservations* time slots removes the item from the pending queue and adds to the time slot, updating the time slot by removing the corresponding # of seats in the booking.
8. Reject action to reserve a time slot if there aren't enough seats available in that time slot to fit the reservation.
8. Make sure you can do any of the above any number of times.
9. Make all of the state persist across browser refresh. You can use either server-side storage or browser-side storage.
10. Allow the user to drag-n-drop a pending reservation to a time slot as an alternative to the click-n-click.
11. Text the customer "Your reservation with js bistro has been confirmed!" once he has reserved a time slot. (hint: twilio)
12. Make it possible to delete a pending reservation (right click delete or new control button?).
13. Editing existing reservations
  * i. Clicking on a time slot will open up a modal dialog box with a list of all the current reservations, displayed as a table, each column containing the information *name*, *phone number*, and *number in party*. 
  * ii. Add a forth column to the table and put an edit button there on the right side of each row.
  * iii. When you click the edit button, you can *live edit* the values in that row - the edit button now becomes the *save* button - when you save, the data actually persists.

Do *all* of the above before 10pm. *Just kidding!* Just do one thing at a time, don't worry about finishing. Everyone will get as far as they got when we hit 10pm.