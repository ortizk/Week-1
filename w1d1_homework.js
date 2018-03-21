// What is the difference between interpolation and concatenation?
// Give an example of each.
	//interpollation inputs variables into a string and concatenation connects two strings together

//String concatenation works with two strings and is used to combine two strings together

// 'Hello'+'World'

//String interpolation is used to insert a variable into a string

// var x = 'World'
//
// `Hello ${x}`


// What does the acronym DRY stand for?
// Why should we pay attention to it?
// What programming tools have we learned to write DRY code?
	//DRY stands for Don't Repeat Yourself, it means not write redundant code. If you have to modify something, in DRY code, you would 
	//only have to modify one thing not many things throughout the file. Repeating your code also slows loading time.

// Using the provided variable definitions,
// replace the blanks with a mathematical or boolean operator that evaluates the expression to true.
// Test your answers by using console.log in front of each expression in your answer file.
//

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin'

console.log(a < b);
console.log(c > d);
console.log('Kevin' === 'Kevin');
console.log(a + b === c);
console.log(a * a === d);
console.log(e === 'Kevin');
console.log(48 !== '48');



// while (true) {
// console.log('Do not run this loop');
// }

//It is an infinite loop because true will always be true until it isn't.

//This is an infinite loop

// const runProgram = true;
//
// while (runProgram) {
// 	console.log('Do not run this loop');
// 	runProgram = false;
// }

//This code will not work because you can't redefine a constant


// let letters = "A";
// let i = 0;
//
// while (i < 20) {
// 	letters += "A";
// 	i++;
// }
//
// console.log(letters);


// output will be AAAAAAAAAAAAAAAAAAAA (A written 20 times)
//it gave me the expected result

//Section 4

//a for loop is able to provide options of code to run. If something then do this else do something else. 
//a while loop will preform the same task until told not to ie while i < 20. They can both preform the same operation.



 function forLoop(){
   for(let i=0; i<=999; i++){
     console.log(i);
   }
 }
 forLoop()


// for (let i=0; i < 100; i++) {
// 	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
// }
// What are the three components of the control panel? Each component is separated by a semicolon ;.
//
// Write your answers as comments in the file.
//inititial expression/conditional/final expression
//The first part of the control panel is intitial expression: is the value that your loop starts at
//The second part of the control panel is conditional: is up to when you want the loop to run until
//The thrid part of the control panel is final expression: is what the loop spits out and if the conditional is not met yet, the loop will run again



// Using a postfix operator i-- instead of i++, write a for loop that iterates in reverse.
// Console.log a countdown from 999 to 0.
//
function reverse (){
	for(let i=999; i >= 0; i--){
		console.log(i);
	}
}
reverse()

// Write a for loop that uses interpolation to send a message to the console as well as the current value of i.
//
function moreCounting (){
	for(let i=0; i <= 10; i++){
		console.log(`The value of i is: ` + `${i} of 10`);
	}
}
moreCounting()



// Iterate over the StarWars array and print each element to the console.
//
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

function printStarWars (){
	for(let i=0; i < StarWars.length ; i++){
		console.log(StarWars[i] + ` ${i}`);
	}
}
printStarWars()

function skipStarWars (){
	for(let i=0; i < StarWars.length ; i+=2){
		console.log(StarWars[i] + ` ${i}`);
	}
}
skipStarWars()
// Iterate over the StarWars array again and print each character's name as well as the value of i.
//
// CHALLENGE
//
// Figure out how to iterate over every second element of the StarWars array, starting with the first element.
// => Han, R2D2, Leia
// Skip this challenge if you end up spending too much time on it.

// const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
// function StarWarsArr(){
//   for(let i=0; i<=StarWars.length-1; i++){
//     console.log(StarWars[i]);
//   }
// }
// StarWarsArr()
// const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
// function StarWarsArr(){
//   for(let i=0; i<=StarWars.length-1; i++){
//     console.log(StarWars[i], i);
//
//   }
// }
// StarWarsArr()

// const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
// function StarWarsArr(){
  // for(let i=0; i<=StarWars.length-1; i++){
//     console.log(StarWars[i++]);
//   }
// }
// StarWarsArr()

//Section 5
/*➜  desktop mkdir galaxy_far_far_away
➜  desktop ls
1.jpg                    2.jpg                    Prework.docx
10 Job Descriptions.docx ORTIZ.PDF                galaxy_far_far_away
➜  desktop cd galaxy_far_far_away 
➜  galaxy_far_far_away mkdir death_star
➜  galaxy_far_far_away ls
death_star
➜  galaxy_far_far_away cd death_star 
➜  death_star touch darth_vader.txt
➜  death_star ls
darth_vader.txt
➜  death_star touch princess_leia.txt
➜  death_star ls
darth_vader.txt   princess_leia.txt
➜  death_star touch storm_trooper.txt
➜  death_star ls
darth_vader.txt   princess_leia.txt storm_trooper.txt
➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star
➜  galaxy_far_far_away mkdir tatooine  
➜  galaxy_far_far_away cd tatooine 
➜  tatooine ls
➜  tatooine touch luke.txt
➜  tatooine ls
luke.txt
➜  tatooine touch ben_kenobi.txt 
➜  tatooine mkdir millenium_falcon
➜  tatooine ls
ben_kenobi.txt   luke.txt         millenium_falcon
➜  tatooine cd millenium_falcon 
➜  millenium_falcon ls
➜  millenium_falcon touch han_solo.text chewbaca.txt
➜  millenium_falcon ls
chewbaca.txt  han_solo.text
➜  millenium_falcon cd ..
➜  tatooine ls
ben_kenobi.txt   luke.txt         millenium_falcon
➜  tatooine mv ben_kenobi.txt obi_wan.txt
➜  tatooine ls
luke.txt         millenium_falcon obi_wan.txt
➜  tatooine cd ..
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd tatooine 
➜  tatooine ls
luke.txt         millenium_falcon obi_wan.txt
➜  tatooine cd ..
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd death_star 
➜  death_star ls
darth_vader.txt   princess_leia.txt storm_trooper.txt
➜  death_star cp storm_trooper.txt ../tatooine
➜  death_star ls
darth_vader.txt   princess_leia.txt storm_trooper.txt
➜  death_star cp storm_trooper.txt ../tatooine/
➜  death_star ls
darth_vader.txt   princess_leia.txt storm_trooper.txt
➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd tatooine
➜  tatooine ls
luke.txt          millenium_falcon  obi_wan.txt       storm_trooper.txt
➜  tatooine mv luke.txt ../millenium_falcon
➜  tatooine ls
millenium_falcon  obi_wan.txt       storm_trooper.txt
➜  tatooine cd millenium_falcon 
➜  millenium_falcon ls
chewbaca.txt  han_solo.text
➜  millenium_falcon cd ~
➜  ~ ls
Applications                Public
Desktop                     code
Documents                   command-line-murder-mystery
Downloads                   funny_things
Fundamentals                homework
Library                     iCloud Drive (Archive)
Movies                      my-favourite-things
Music                       nano.save
Pictures                    world
➜  ~ cd Desktop 
➜  Desktop ls
1.jpg                    2.jpg                    Prework.docx
10 Job Descriptions.docx ORTIZ.PDF                galaxy_far_far_away
➜  Desktop cd galaxy_far_far_away 
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine
➜  galaxy_far_far_away cd death_star 
➜  death_star ls
darth_vader.txt   princess_leia.txt storm_trooper.txt
➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine
➜  galaxy_far_far_away cd millenium_falcon
cd: not a directory: millenium_falcon
➜  galaxy_far_far_away mkdir millenium_falcon
mkdir: millenium_falcon: File exists
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine
➜  galaxy_far_far_away rm -rf millenium_falcon
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away mkdir millenium_falcon
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine
➜  galaxy_far_far_away cd millenium_falcon 
➜  millenium_falcon touch han_solo.txt
➜  millenium_falcon ls
han_solo.txt
➜  millenium_falcon touch chewbaca.txt
➜  millenium_falcon ls
chewbaca.txt han_solo.txt
➜  millenium_falcon cd ..
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine
➜  galaxy_far_far_away cd death_star 
➜  death_star ls
darth_vader.txt   princess_leia.txt storm_trooper.txt
➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine
➜  galaxy_far_far_away cd tatooine 
➜  tatooine ls
millenium_falcon  obi_wan.txt       storm_trooper.txt
➜  tatooine cd millenium_falcon 
➜  millenium_falcon ls
chewbaca.txt  han_solo.text
➜  millenium_falcon cd ..
➜  tatooine ls
millenium_falcon  obi_wan.txt       storm_trooper.txt
➜  tatooine cd ..
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine
➜  galaxy_far_far_away rm -rf millenium_falcon 
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd tatooine 
➜  tatooine ls
millenium_falcon  obi_wan.txt       storm_trooper.txt
➜  tatooine cd millenium_falcon 
➜  millenium_falcon touch luke.txt
➜  millenium_falcon ls
chewbaca.txt  han_solo.text luke.txt
➜  millenium_falcon cd ..
➜  tatooine ls
millenium_falcon  obi_wan.txt       storm_trooper.txt
➜  tatooine mv obi_wan.txt millenium_falcon 
➜  tatooine ls
millenium_falcon  storm_trooper.txt
➜  tatooine cd millenium_falcon 
➜  millenium_falcon ls
chewbaca.txt  han_solo.text luke.txt      obi_wan.txt
➜  millenium_falcon cd ..
➜  tatooine ls
millenium_falcon  storm_trooper.txt
➜  tatooine mv millenium_falcon ..
➜  tatooine ls
storm_trooper.txt
➜  tatooine cd ..
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine
➜  galaxy_far_far_away mv millenium_falcon ../death_star
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd death_star 
➜  death_star ls
darth_vader.txt   princess_leia.txt storm_trooper.txt
➜  death_star ls
darth_vader.txt   princess_leia.txt storm_trooper.txt
➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd death_star 
➜  death_star ls
darth_vader.txt   princess_leia.txt storm_trooper.txt
➜  death_star ls
darth_vader.txt   princess_leia.txt storm_trooper.txt
➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd tatooine 
➜  tatooine ls
storm_trooper.txt
➜  tatooine cd ..
➜  galaxy_far_far_away cd ..
➜  Desktop ls
1.jpg                    ORTIZ.PDF                galaxy_far_far_away
10 Job Descriptions.docx Prework.docx
2.jpg                    death_star
➜  Desktop cd death_star 
➜  death_star ls
chewbaca.txt  han_solo.text luke.txt      obi_wan.txt
➜  death_star cd ..
➜  Desktop ls
1.jpg                    ORTIZ.PDF                galaxy_far_far_away
10 Job Descriptions.docx Prework.docx
2.jpg                    death_star
➜  Desktop cd galaxy_far_far_away 
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd death_star 
➜  death_star ls
darth_vader.txt   princess_leia.txt storm_trooper.txt
➜  death_star cd ..
➜  galaxy_far_far_away cd ..
➜  Desktop ls
1.jpg                    ORTIZ.PDF                galaxy_far_far_away
10 Job Descriptions.docx Prework.docx
2.jpg                    death_star
➜  Desktop mv death_star/ millenium_falcon/
➜  Desktop ls
1.jpg                    ORTIZ.PDF                millenium_falcon
10 Job Descriptions.docx Prework.docx
2.jpg                    galaxy_far_far_away
➜  Desktop cd millenium_falcon 
➜  millenium_falcon ls
chewbaca.txt  han_solo.text luke.txt      obi_wan.txt
➜  millenium_falcon cd ..
➜  Desktop ls
1.jpg                    ORTIZ.PDF                millenium_falcon
10 Job Descriptions.docx Prework.docx
2.jpg                    galaxy_far_far_away
➜  Desktop mv desktop/millenium_falcon desktop/galaxy_far_far_away
mv: rename desktop/millenium_falcon to desktop/galaxy_far_far_away: No such file or directory
➜  Desktop mv millenium_falcon ../galaxy_far_far_away
➜  Desktop ls
1.jpg                    2.jpg                    Prework.docx
10 Job Descriptions.docx ORTIZ.PDF                galaxy_far_far_away
➜  Desktop cd galaxy_far_far_away 
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd ..
➜  Desktop ls
1.jpg                    2.jpg                    Prework.docx
10 Job Descriptions.docx ORTIZ.PDF                galaxy_far_far_away
➜  Desktop cd ..
➜  ~ ls
Applications                code
Desktop                     command-line-murder-mystery
Documents                   funny_things
Downloads                   galaxy_far_far_away
Fundamentals                homework
Library                     iCloud Drive (Archive)
Movies                      my-favourite-things
Music                       nano.save
Pictures                    world
Public
➜  ~ cd galaxy_far_far_away 
➜  galaxy_far_far_away ls
chewbaca.txt  han_solo.text luke.txt      obi_wan.txt
➜  galaxy_far_far_away cd~
zsh: command not found: cd~
➜  galaxy_far_far_away cd ~
➜  ~ ls
Applications                code
Desktop                     command-line-murder-mystery
Documents                   funny_things
Downloads                   galaxy_far_far_away
Fundamentals                homework
Library                     iCloud Drive (Archive)
Movies                      my-favourite-things
Music                       nano.save
Pictures                    world
Public
➜  ~ pwd
/Users/karla
➜  ~ cd galaxy_far_far_away desktop
cd: string not in pwd: galaxy_far_far_away
➜  ~ ls
Applications                code
Desktop                     command-line-murder-mystery
Documents                   funny_things
Downloads                   galaxy_far_far_away
Fundamentals                homework
Library                     iCloud Drive (Archive)
Movies                      my-favourite-things
Music                       nano.save
Pictures                    world
Public
➜  ~ mv galaxy_far_far_away desktop
mv: rename galaxy_far_far_away to desktop/galaxy_far_far_away: Directory not empty
➜  ~ ls
Applications                code
Desktop                     command-line-murder-mystery
Documents                   funny_things
Downloads                   galaxy_far_far_away
Fundamentals                homework
Library                     iCloud Drive (Archive)
Movies                      my-favourite-things
Music                       nano.save
Pictures                    world
Public
➜  ~ pwd
/Users/karla
➜  ~ mv /Users/karla/galaxy_far_far_away /Users/karla/Desktop
mv: rename /Users/karla/galaxy_far_far_away to /Users/karla/Desktop/galaxy_far_far_away: Directory not empty
➜  ~ ls
Applications                code
Desktop                     command-line-murder-mystery
Documents                   funny_things
Downloads                   galaxy_far_far_away
Fundamentals                homework
Library                     iCloud Drive (Archive)
Movies                      my-favourite-things
Music                       nano.save
Pictures                    world
Public
➜  ~ cd galaxy_far_far_away 
➜  galaxy_far_far_away ls
chewbaca.txt  han_solo.text luke.txt      obi_wan.txt
➜  galaxy_far_far_away cd Desktop
cd: no such file or directory: Desktop
➜  galaxy_far_far_away cd ..
➜  ~ ls
Applications                code
Desktop                     command-line-murder-mystery
Documents                   funny_things
Downloads                   galaxy_far_far_away
Fundamentals                homework
Library                     iCloud Drive (Archive)
Movies                      my-favourite-things
Music                       nano.save
Pictures                    world
Public
➜  ~ cd Desktop 
➜  Desktop ls
1.jpg                    2.jpg                    Prework.docx
10 Job Descriptions.docx ORTIZ.PDF                galaxy_far_far_away
➜  Desktop cd ..
➜  ~ ls
Applications                code
Desktop                     command-line-murder-mystery
Documents                   funny_things
Downloads                   galaxy_far_far_away
Fundamentals                homework
Library                     iCloud Drive (Archive)
Movies                      my-favourite-things
Music                       nano.save
Pictures                    world
Public
➜  ~ mv galaxy_far_far_away/ millenium_falcon/
➜  ~ ls
Applications                code
Desktop                     command-line-murder-mystery
Documents                   funny_things
Downloads                   homework
Fundamentals                iCloud Drive (Archive)
Library                     millenium_falcon
Movies                      my-favourite-things
Music                       nano.save
Pictures                    world
Public
➜  ~ mv /Users/karla/millenium_falcon Users/karla/Desktop/galaxy_far_far_away
mv: rename /Users/karla/millenium_falcon to Users/karla/Desktop/galaxy_far_far_away: No such file or directory
➜  ~ mv /Users/karla/millenium_falcon/ /Users/karla/Desktop/              
➜  ~ ls
Applications                Public
Desktop                     code
Documents                   command-line-murder-mystery
Downloads                   funny_things
Fundamentals                homework
Library                     iCloud Drive (Archive)
Movies                      my-favourite-things
Music                       nano.save
Pictures                    world
➜  ~ cd Desktop 
➜  Desktop ls
1.jpg                    ORTIZ.PDF                millenium_falcon
10 Job Descriptions.docx Prework.docx
2.jpg                    galaxy_far_far_away
➜  Desktop mv Desktop/millenium_falcon/ Desktop/galaxy_far_far_away
mv: rename Desktop/millenium_falcon/ to Desktop/galaxy_far_far_away: No such file or directory
➜  Desktop ls
1.jpg                    ORTIZ.PDF                millenium_falcon
10 Job Descriptions.docx Prework.docx
2.jpg                    galaxy_far_far_away
➜  Desktop cd ..
➜  ~ ls
Applications                Public
Desktop                     code
Documents                   command-line-murder-mystery
Downloads                   funny_things
Fundamentals                homework
Library                     iCloud Drive (Archive)
Movies                      my-favourite-things
Music                       nano.save
Pictures                    world
➜  ~ mv Desktop/millenium_falcon/ Desktop/galaxy_far_far_away
➜  ~ cd Desktop 
➜  Desktop ls
1.jpg                    2.jpg                    Prework.docx
10 Job Descriptions.docx ORTIZ.PDF                galaxy_far_far_away
➜  Desktop cd galaxy_far_far_away 
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine
➜  galaxy_far_far_away cd ..
➜  Desktop mv galaxy_far_far_away/millenium_falcon galaxy_far_far_away/death_star
➜  Desktop ls
1.jpg                    2.jpg                    Prework.docx
10 Job Descriptions.docx ORTIZ.PDF                galaxy_far_far_away
➜  Desktop cd galaxy_far_far_away 
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd death_star 
➜  death_star ls
darth_vader.txt   millenium_falcon  princess_leia.txt storm_trooper.txt
➜  death_star mv princess_leia.txt millenium_falcon/
➜  death_star ls
darth_vader.txt   millenium_falcon  storm_trooper.txt
➜  death_star cd millenium_falcon 
➜  millenium_falcon ls
chewbaca.txt      luke.txt          princess_leia.txt
han_solo.text     obi_wan.txt
➜  millenium_falcon rm -rf obi_wan.txt 
➜  millenium_falcon ls
chewbaca.txt      han_solo.text     luke.txt          princess_leia.txt
➜  millenium_falcon cd ..
➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away mkdir yavin_4
➜  galaxy_far_far_away ls
death_star tatooine   yavin_4
➜  galaxy_far_far_away cd ..
➜  Desktop cd galaxy_far_far_away                                    
➜  galaxy_far_far_away ls
death_star tatooine   yavin_4
➜  galaxy_far_far_away cd death_star 
➜  death_star ls
darth_vader.txt   millenium_falcon  storm_trooper.txt
➜  death_star mv millenium_falcon ..
➜  death_star ls
darth_vader.txt   storm_trooper.txt
➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine         yavin_4
➜  galaxy_far_far_away cd ..                        
➜  Desktop ls
1.jpg                    2.jpg                    Prework.docx
10 Job Descriptions.docx ORTIZ.PDF                galaxy_far_far_away
➜  Desktop mv galaxy_far_far_away/millenium_falcon/ galaxy_far_far_away/yavin_4/
➜  Desktop ls
1.jpg                    2.jpg                    Prework.docx
10 Job Descriptions.docx ORTIZ.PDF                galaxy_far_far_away
➜  Desktop cd galaxy_far_far_away 
➜  galaxy_far_far_away ls
death_star tatooine   yavin_4
➜  galaxy_far_far_away cd yavin_4 
➜  yavin_4 ls
millenium_falcon
➜  yavin_4 mkdir x-wing
➜  yavin_4 ls
millenium_falcon x-wing
➜  yavin_4 cd millenium_falcon 
➜  millenium_falcon ls
chewbaca.txt      han_solo.text     luke.txt          princess_leia.txt
➜  millenium_falcon cd ..
➜  yavin_4 ls
millenium_falcon x-wing
➜  yavin_4 cd millenium_falcon 
➜  millenium_falcon ls
chewbaca.txt      han_solo.text     luke.txt          princess_leia.txt
➜  millenium_falcon mv princess_leia.txt ..
➜  millenium_falcon ls
chewbaca.txt  han_solo.text luke.txt
➜  millenium_falcon cd ..
➜  yavin_4 ls
millenium_falcon  princess_leia.txt x-wing
➜  yavin_4 cd ..
➜  galaxy_far_far_away ls
death_star tatooine   yavin_4
➜  galaxy_far_far_away cd yavin_4 
➜  yavin_4 ls
millenium_falcon  princess_leia.txt x-wing
➜  yavin_4 cd millenium_falcon 
➜  millenium_falcon ls
chewbaca.txt  han_solo.text luke.txt
➜  millenium_falcon mv luke.txt ..
➜  millenium_falcon ls
chewbaca.txt  han_solo.text
➜  millenium_falcon cd ..
➜  yavin_4 ls
luke.txt          millenium_falcon  princess_leia.txt x-wing
➜  yavin_4 cd ..
➜  galaxy_far_far_away cd yavin_4         
➜  yavin_4 ls
luke.txt          millenium_falcon  princess_leia.txt x-wing
➜  yavin_4 mv luke.txt x-wing/
➜  yavin_4 ls
millenium_falcon  princess_leia.txt x-wing
➜  yavin_4 cd x-wing 
➜  x-wing ls
luke.txt
➜  x-wing cd ..
➜  yavin_4 ls
millenium_falcon  princess_leia.txt x-wing
➜  yavin_4 ls                   
millenium_falcon  princess_leia.txt x-wing
➜  yavin_4 mv millenium_falcon/ ..
➜  yavin_4 ls
princess_leia.txt x-wing
➜  yavin_4 mv x-wing/ ..
➜  yavin_4 ls
princess_leia.txt
➜  yavin_4 cd ..
➜  galaxy_far_far_away ls
death_star       tatooine         yavin_4
millenium_falcon x-wing
➜  galaxy_far_far_away cd death_star 
➜  death_star ls
darth_vader.txt   storm_trooper.txt
➜  death_star mkdir tie_fighter_1
➜  death_star ls
darth_vader.txt   storm_trooper.txt tie_fighter_1
➜  death_star mkdir tie_fighter_2
➜  death_star ls
darth_vader.txt   storm_trooper.txt tie_fighter_1     tie_fighter_2
➜  death_star mkdir tie_fighter_3
➜  death_star ls
darth_vader.txt   tie_fighter_1     tie_fighter_3
storm_trooper.txt tie_fighter_2
➜  death_star mv darth_vader tie_fighter_1/
mv: rename darth_vader to tie_fighter_1/darth_vader: No such file or directory
➜  death_star ls
darth_vader.txt   tie_fighter_1     tie_fighter_3
storm_trooper.txt tie_fighter_2
➜  death_star mv darth_vader.txt tie_fighter_1/
➜  death_star ls
storm_trooper.txt tie_fighter_1     tie_fighter_2     tie_fighter_3
➜  death_star cd tie_fighter_1
➜  tie_fighter_1 ls
darth_vader.txt
➜  tie_fighter_1 cd ..
➜  death_star ls
storm_trooper.txt tie_fighter_1     tie_fighter_2     tie_fighter_3
➜  death_star cp storm_trooper.txt ../tie_fighter_2/
cp: directory ../tie_fighter_2 does not exist
➜  death_star ls
storm_trooper.txt tie_fighter_1     tie_fighter_2     tie_fighter_3
➜  death_star cd tie_fighter_1   
➜  tie_fighter_1 ls
darth_vader.txt
➜  tie_fighter_1 cd ..
➜  death_star mv storm_trooper.txt tie_fighter_2/
➜  death_star ls
tie_fighter_1 tie_fighter_2 tie_fighter_3
➜  death_star cd tie_fighter_2
➜  tie_fighter_2 ls
storm_trooper.txt
➜  tie_fighter_2 cp storm_trooper.txt ..
➜  tie_fighter_2 ls
storm_trooper.txt
➜  tie_fighter_2 cd ..
➜  death_star ls
storm_trooper.txt tie_fighter_1     tie_fighter_2     tie_fighter_3
➜  death_star cp storm_trooper.txt tie_fighter_3/
➜  death_star ls
storm_trooper.txt tie_fighter_1     tie_fighter_2     tie_fighter_3
➜  death_star cd tie_fighter_3
➜  tie_fighter_3 ls
storm_trooper.txt
➜  tie_fighter_3 cd ..
➜  death_star ls
storm_trooper.txt tie_fighter_1     tie_fighter_2     tie_fighter_3
➜  death_star mv tie_fighter_1 ..
➜  death_star ls
storm_trooper.txt tie_fighter_2     tie_fighter_3
➜  death_star mv tie_fighter_2 ..
➜  death_star ls
storm_trooper.txt tie_fighter_3
➜  death_star mv tie_fighter_3 ..
➜  death_star ls
storm_trooper.txt
➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star       tatooine         tie_fighter_2    x-wing
millenium_falcon tie_fighter_1    tie_fighter_3    yavin_4
➜  galaxy_far_far_away rm -r tie_fighter_2
➜  galaxy_far_far_away ls
death_star       tatooine         tie_fighter_3    yavin_4
millenium_falcon tie_fighter_1    x-wing
➜  galaxy_far_far_away rm -r tie_fighter_3
➜  galaxy_far_far_away ls
death_star       tatooine         x-wing
millenium_falcon tie_fighter_1    yavin_4
➜  galaxy_far_far_away ls
death_star       tatooine         x-wing
millenium_falcon tie_fighter_1    yavin_4
➜  galaxy_far_far_away cd x-wing 
➜  x-wing touch the_force.txt
➜  x-wing ls
luke.txt      the_force.txt
➜  x-wing cd ..
➜  galaxy_far_far_away ls
death_star       tatooine         x-wing
millenium_falcon tie_fighter_1    yavin_4
➜  galaxy_far_far_away rm -r death_star 
➜  galaxy_far_far_away ls
millenium_falcon tie_fighter_1    yavin_4
tatooine         x-wing
➜  galaxy_far_far_away cd ..     
➜  Desktop ls
1.jpg                    2.jpg                    Prework.docx
10 Job Descriptions.docx ORTIZ.PDF                galaxy_far_far_away
➜  Desktop mv galaxy_far_far_away/x-wing galaxy_far_far_away/yavin_4 
➜  Desktop ls
1.jpg                    2.jpg                    Prework.docx
10 Job Descriptions.docx ORTIZ.PDF                galaxy_far_far_away
➜  Desktop cd galaxy_far_far_away 
➜  galaxy_far_far_away ls
millenium_falcon tatooine         tie_fighter_1    yavin_4
➜  galaxy_far_far_away cd yavin_4 
➜  yavin_4 ls
princess_leia.txt x-wing
➜  yavin_4 cd ..
➜  galaxy_far_far_away ls
millenium_falcon tatooine         tie_fighter_1    yavin_4
➜  galaxy_far_far_away cd ..
➜  Desktop mv galaxy_far_far_away/millenium_falcon galaxy_far_far_away/yavin_4 
➜  Desktop ls
1.jpg                    2.jpg                    Prework.docx
10 Job Descriptions.docx ORTIZ.PDF                galaxy_far_far_away
➜  Desktop cd galaxy_far_far_away 
➜  galaxy_far_far_away ls
tatooine      tie_fighter_1 yavin_4
➜  galaxy_far_far_away cd yavin_4 
➜  yavin_4 ls
millenium_falcon  princess_leia.txt x-wing
➜  yavin_4 
*/
/*Section 6
1. biggest takeaway was the best way to learn is to use the information or teach someone
very shortly after learning the information.
Slack
1. that I should be using the app and
@here only notifies people of your message who are active and online and @channel
tells everyone
2. @here is nice when people use it bc then other people who are not active  don't have
to be bothered by a bunch of messages.