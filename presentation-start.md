### Modeling Solidity data types in SolidiKeY
Guilherme Horta Alvares da Silva

Chalmers University

KeY Symposium 2024


## Motivation
- Solidity is used in the second-biggest cryptocurrency (Ethereum) <!-- .element: class="fragment fade-in-then-semi-out" -->
- Smart contracts are used for programming financial assets <!-- .element: class="fragment fade-in-then-semi-out" -->
- There are adversary interests in smart contracts <!-- .element: class="fragment fade-in-then-semi-out" -->
- Code in the smart contracts domain can't be changed after deployment <!-- .element: class="fragment fade-in-then-semi-out" -->
- Formal methods are necessary because it is impossible to change code with problems <!-- .element: class="fragment fade-in" -->


## Correctness of Smart Contract
- There was a decentralized autonomous organization in the Ethereum blockchain that almost lost 150 million dollars in 2016 because of a reentrance bug <!-- .element: class="fragment fade-in-then-semi-out" -->
- Using formal methods helps to find bugs before deploying the code <!-- .element: class="fragment fade-in" -->


## Objectives
- Specify and verify important classes of properties about asset flow <!-- .element: class="fragment fade-in-then-semi-out" -->
- Study a relationship between asset flow and internal contract data <!-- .element: class="fragment fade-in-then-semi-out" -->
- Build a calculus that axiomatizes Solidity <!-- .element: class="fragment fade-in-then-semi-out" -->
- Build a proof system that automates verification, SolidiKeY, which is developed on top of the KeY infrastructure <!-- .element: class="fragment fade-in" -->


## Memory and storage
- Memory is a temporary place to store data <!-- .element: class="fragment  fade-in-then-semi-out" -->
- Memory in Solidity is similar to Java where each arrays and structs are like pointers. They are object identities <!-- .element: class="fragment fade-in-then-semi-out" -->
- Storage holds data between function calls <!-- .element: class="fragment fade-in-then-semi-out" -->
- In storage, arrays and structs have no identities. There is no alias. Every assignment is a deep copy <!-- .element: class="fragment fade-in-then-semi-out" -->
- The storage path variable represents a path to storage <!-- .element: class="fragment fade-in" -->