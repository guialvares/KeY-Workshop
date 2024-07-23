### Modeling Solidity data types in SolidiKeY
Guilherme Horta Alvares da Silva

Chalmers University

KeY Symposium 2024


## Motivation
- Ethereum is the second-biggest cryptocurrency and the biggest smart contract platform <!-- .element: class="fragment fade-in-then-semi-out" -->
- Code in the smart contracts domain can't be changed after deployment <!-- .element: class="fragment fade-in-then-semi-out" -->
- It is totally open <!-- .element: class="fragment fade-in-then-semi-out" -->
- It is used for financial assets <!-- .element: class="fragment fade-in-then-semi-out" -->
- There are adversary interests in smart contracts <!-- .element: class="fragment fade-in-then-semi-out" -->
- The identity behind addresses is anonymous <!-- .element: class="fragment fade-in" -->


## Correctness of Smart Contract
- Smart contracts usually have unexpected behaviors <!-- .element: class="fragment fade-in-then-semi-out" -->
- There was a decentralized autonomous organization in the Ethereum blockchain that almost lost 150 million dollars in 2016 because of a reentrance bug <!-- .element: class="fragment fade-in-then-semi-out" -->
- Several bugs are still happening and one way to avoid them is by using formal methods and techniques <!-- .element: class="fragment fade-in" -->


## Objective
- Specify and verify important classes of properties about asset flow <!-- .element: class="fragment fade-in-then-semi-out" -->
- Study a relationship between asset flow and internal contract data <!-- .element: class="fragment fade-in-then-semi-out" -->
- The project targets real source code <!-- .element: class="fragment fade-in-then-semi-out" -->
- Build a calculus that axiomatizes Solidity <!-- .element: class="fragment fade-in-then-semi-out" -->
- Build a proof system that automates verification, SolidiKeY, which is developed on top of the KeY infrastructure <!-- .element: class="fragment fade-in" -->


## Memory and storage
- Storage holds data between function calls <!-- .element: class="fragment fade-in-then-semi-out" -->
- Memory is a temporary place to store data <!-- .element: class="fragment  fade-in-then-semi-out" -->
- Memory in Solidity is similar to Java where each arrays and structs are like pointers. They are object identities <!-- .element: class="fragment fade-in-then-semi-out" -->
- In storage, arrays and structs have no identities. There is no alias. Every assignment is a deep copy <!-- .element: class="fragment fade-in-then-semi-out" -->
- In addition, there are storage path variables. It represents a path into a storage <!-- .element: class="fragment fade-in" -->