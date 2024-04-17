//Main Question:

//Given the following TypeScript type definitions:

type TDev = {
  firstName: string;
  lastName: string;
  specialty: string;
};

type TQaEngineer = {
  firstName: string;
  lastName: string;
  rank: number;
};

type TQaTeam = {
  lead: QaEngineer;
  qaEngineers: QaEngineer[];
};

type TDevTeam = {
  lead: Dev;
  developers: Dev[];
  qa: QaTeam;
};

//Tasks:
//
//Class Creation: Create classes for QaTeam and DevTeam that correspond to the above type definitions.
//Ensure your classes provide methods to add new members to their respective teams (e.g., adding a Dev to the developers array).
//
//Team Management: Implement functionality within your classes to add and manage team members effectively. 
//Include basic error handling or validation to ensure data integrity when adding new members.
//
//Demonstration: Instantiate your classes and add several members to each team.
//Then, write a piece of code that prints out the team members in the following format, using traditional iteration methods (e.g., for, forEach):
//
//For the lead: lead name: ${firstName} ${lastName}
//For developers and QA engineers: dev1: ${firstName} ${lastName}, qa1: ${firstName} ${lastName}, etc.
//Bonus Questions:
//
//Generics: Refactor the QaTeam and DevTeam classes (and/or their corresponding types if necessary) to use generics, 
//allowing them to be more flexible and capable of representing teams with different kinds of members. 
//Demonstrate how your generic classes might be used with different member types.
//
//Advanced Iteration: Modify the DevTeam class to make instances of this class iterable 
//using a for...of loop by implementing the [Symbol.iterator]() method. 
//The iteration should yield strings formatted as indicated in the main question for each member of the team, 
//including the lead, developers, and QA engineers.(Hint: Implement the *[Symbol.iterator]())
