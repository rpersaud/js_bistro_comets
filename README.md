js_bistro_comets
================

ATL JS Hackathon - Team 4 - The "Comets"

Brookes Stephens
Robert Persaud
Alicia Persaud

Features
========

Download the css template js-bistro.zip and put the contents in your project.
Make a reservation form.
Make a Pending Reservations queue.
Submit the form adds a pending reservation with the entered information.
Make sure you can enter multiple pending reservations.
Validate the form
i. reject if any of the 3 fields are empty
ii. reject if phone number is not valid
iii. reject if # in party is not a number
Have a Confirmed Reservations time slots section.
Clicking on a pending reservation and then clicking one of the confirmed reservations time slots removes the item from the pending queue and adds to the time slot, updating the time slot by removing the corresponding # of seats in the booking.
Reject action to reserve a time slot if there aren't enough seats available in that time slot to fit the reservation.
Make sure you can do any of the above any number of times.
Make all of the state persist across browser refresh. You can use either server-side storage or browser-side storage.
Allow the user to drag-n-drop a pending reservation to a time slot as an alternative to the click-n-click.
Text the customer "Your reservation with js bistro has been confirmed!" once he has reserved a time slot. (hint: twilio)
Make it possible to delete a pending reservation (right click delete or new control button?).
Editing existing reservations
i. Clicking on a time slot will open up a modal dialog box with a list of all the current reservations, displayed as a table, each column containing the information name, phone number, and number in party.
ii. Add a forth column to the table and put an edit button there on the right side of each row.
iii. When you click the edit button, you can live edit the values in that row - the edit button now becomes the save button - when you save, the data actually persists.
Do all of the above before 10pm. Just kidding! Just do one thing at a time, don't worry about finishing. Everyone will get as far as they got when we hit 10pm.