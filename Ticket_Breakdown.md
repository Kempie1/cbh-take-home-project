# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. Time/effort estimate: 1-2 hours</br>
Acceptance criteria: Migration runs succsessfully with all the database data intact</br>
Description:
Create a migration to expand the agents table to include "CustomID" in form of a string and nullable. Back-up the data, and apply the migration.</br>
2. Time/effort estimate: 1-2 hours</br>
Acceptance criteria: CustomID is created, with a unit test. Test runs successfully</br>
Description:
Create a function to assign "CustomID" to agents.</br>
3. Time/effort estimate: 1-2 hours</br>
Acceptance criteria: generateReport and its tests are edited to reflect new behaviour.</br>
Description:
Edit the generateReport function to return "CustomID" if possible instead of "ID". </br>
4. Time/effort estimate: 1-2 hours</br>
Acceptance criteria: All features work together, and feature wide tests are written.</br>
Description:
Review the patch, and merge in-to main branch.</br>