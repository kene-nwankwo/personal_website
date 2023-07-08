export default function Home(){
    return (
    <div>
        <h1>Software Projects</h1>
        <hr/>
        <Java />
        <hr/>
        <CLanguage />
        <hr/>
        <AVRAssembly />
    </div>
    )
}

function Java(){
    return (
        <>
        <h3>Java</h3>

        <a href="Project PDFS/Java Projects/132 Projects/CMSC 132 Project 7.pdf" target="_blank"><h4>Maze Solving Algorithm</h4></a>

        <h5>Graphs, Weighted Graphs, HashMaps, Depth-First-Search, Breadth-First-Search, Dijsktra's Algorithm</h5>
        <ul>
        <li>Implemented 3 algorithms to solve a randomized maze. Depth-First, Breadth-First, and Dijsktra's Algorithm</li>
        <li>Implemented a Weighted Graph Data Structure to hold and model the contents of the maze and traverse its vertices</li>
        <li>Used nested hashMaps to Implement the Weighted graph data structure</li>
        </ul>

        <a href="Project PDFS/Java Projects/132 Projects/CMSC 132 Poject 3.pdf" target="_blank"><h4>Clear Cell Game</h4></a>

        <h5>Enumerated type, abstract class, 2D Array Manipulation</h5>
        <ul>
        <li>Implemented the logic model for a clear cell game</li>
        <li>Used Enumerated types and an abstract class to display the contents of a game board stored in a 2D Array</li>
        <li>Designed methods to control the contents of the game board based on user actions in accordance with the rules of the game</li>
        <a href="https://www.youtube.com/watch?v=tLo9S8iYPZ0&ab_channel=CMSC132_Emad" target="_blank"><li>Game Video</li></a>

        </ul>

        <a href="Project PDFS/Java Projects/132 Projects/Blackjack Game Project.pdf" target="_blank"><h4>Black Jack Game</h4></a>

        <h5>ArrayList, Enumerated types</h5>
        <ul>
        <li>Implemented the logic model for a simulation of the Black Jack game</li>
        <li>The user plays against the computer/dealer, the computer is operating based on the current status of the game</li>
        <li>Implemented methods to: make decisions based on the state of the board, create random decks, decide the winner, and end the game</li>
        </ul>

        <h4>Data Structure Projects</h4>

        <h5>Created several Data structures from the ground up, including additional useful methods</h5>
        <ul>
        <a href="Project PDFS/Java Projects/132 Projects/Data Structure Projects/CMSC 132 Proj4 LinkedList.pdf" target="_blank"><li>LinkedList</li></a>
        <a href="Project PDFS/Java Projects/132 Projects/Data Structure Projects/CMSC 132 Project 5.pdf" target="_blank"><li>HashTable</li></a>
        <a href="Project PDFS/Java Projects/132 Projects/Data Structure Projects/CMSC 132 Project 6.pdf" target="_blank"><li>Binary Search Tree Map</li></a>
        <a href="Project PDFS/Java Projects/132 Projects/Data Structure Projects/CMSC 132_ Heavy Bag Project 8.pdf" target="_blank"><li>Heavy Bag</li></a>
        </ul>

        <a href="Project PDFS/Java Projects/131 Projects/Project 7.pdf" target="_blank"><h4>Diagram System</h4></a>

        <h5>2D Arrays, Array manipulation, Inheritance, GUI</h5>
        <ul>
        <li>Implement classes that support displaying and animating 2D grid diagrams</li>
        <li>Calculate the next animation step on a 2D Array for the next frame in GUI</li>
        </ul>

        <a href="Project PDFS/Java Projects/131 Projects/Project 8.pdf" target="_blank"><h4>Media Rental Manager</h4></a>

        <h5>Classes, Interfaces, Polymorphism</h5>
        <ul>
        <li>Created a simplified version of a system that allows people to rent movies and music albums (similar to Netflix) and receive them via mail</li>
        <li>The Media rental system keeps track of customers and media (movies and music albums). A customer has a name, address, a service plan, and two lists (queues)</li>
        <li>One queue represents the media the customer is interested in receiving and the second one represents the media already received (rented) by the customer</li>
        <li>A movie has a title, a number of copies available, and a rating (e.g., "PG"). An album has a title, number of copies available, an artist, and the songs that are part of the album</li>
        <li>A database for systems is represented using two ArrayList objects. One ArrayList represents the customers present in the database; the second represents the media (movies and albums) in the database</li>
        </ul>
        </>
    )
}

function CLanguage(){
    return (
        <>
        <h3>C Language</h3>

        <a href="Project PDFS/C/threads.pdf" target="_blank"><h4>Threads</h4></a>

        <h5>Threads, Pipe, Fork, Dup2, Randomization, Command Line Arguments, Dynamic Memory Allocation, Program timing</h5>
        <ul>
        <li>Used threads to write a program that computes the maximum data and the sum of data present in an array</li>
        <li>Created a program to perform the maximum and sum operations on arrays using different numbers of threads to process the array</li>
        <li>Compared the times it took to perform the operations with different numbers of threads. Graphed the times to the number of threads used in the process to find the optimal number of threads to complete the operations the most efficiently</li>
        </ul>

        <a href="Project PDFS/C/project6.pdf" target="_blank"><h4>C Shell</h4></a>

        <h5>Pipe, Fork, Dup2, exec functions Makefile</h5>
        <ul>
        <li>Implemented a shell that supports boolean operations, pipes, and file redirection</li>
        <li>Included the features: File redirection, Piping, Subshells</li>
        <li>The shell prompts the user for a command, parses the command, and then attempts to execute the command</li>
        </ul>

        <a href="Project PDFS/C/project4.pdf" target="_blank"><h4>Calendar</h4></a>

        <h5>Dynamic Memory Allocation, Function Pointers, Linked Lists, Makefile</h5>
        <ul>
        <li>Used dynamic memory allocation techniques in order to implement a calendar application, that allows the scheduling of events on specific days</li>
        <li>An Event structure is represented by a node in a linked list. The Calendar structure keeps track of events by using an array of dynamically allocated event nodes in a linked list</li>
        <li>Calendar events can be sorted based on different criteria. Events can be associated with additional information. Different sorting and info are handled with function pointers</li>
        </ul>

        <h4><a href="Project PDFS/C/project2.pdf" target="_blank">Document Manager</a> and <a href="Project PDFS/C/project3.pdf" target="_blank">User Interface</a></h4>

        <h5>C Structures, Functions, String Manipulation, text parsing, File I/O, Command Line Arguments</h5>
        <ul>
        <li>Implemented a document manager program. The program allows users to add paragraphs, lines to paragraphs, to replace text, and edit a document</li>
        <li>Wrote a text-based user interface to the document manager system, that allows users to load, save, and edit documents that have been created</li>
        </ul>

        <a href="Project PDFS/C/project1.pdf" target="_blank"><h4>Grades Calculator</h4></a>

        <h5>Functions, Arrays</h5>
        <ul>
        <li>C program that reads assignment scores and computes numeric grades and statistical information</li>
        <li>Reads information about class assignments and computes a numeric score. The data provided consists of:
            Number of assignments, Points penalty per day late, Number of assignments to drop, Whether statistical information will be generated, and Assignments information (assignment number, score, weight, days late).</li>
        <li>Program computes the numeric score after dropping the n lowest scoring assignments and taking into account days late, penalty per 
            day late, and the weight associated with the assignments. If statistical information is requested, the mean and standard deviation will be computed</li>
        </ul>
        </>
    )
}

function AVRAssembly(){
    return (
        <>
        <h3>AVR Assembly</h3>

        <h4>Assembly Projects <a href="Project PDFS/Assembly/assembly_exercise_1.pdf" target="_blank"> Project1</a> <a href="Project PDFS/Assembly/project5.pdf" target="_blank"> Project2</a> </h4> 

        <h5>Converted C code fragments into AVR Assembly code with the same functionality</h5>
        <ul>
        <li>String Length: Calculate and return the length of a string</li>
        <li>Palindrome: Test if a String is a Palindrome</li>
        <li>Fibonacci: Given n as a parameter, recursively calculate and return the nth Fibonacci number</li>
        <li>Integer Square Root: Compute the square root of an integer, using the bitwise algorithm</li>
        <li>Reverse Prefix Sum: Transform an array by adding the value at an index to the sum of the remainder of the array</li>

        </ul>
        </>
    )
}