### Modeling Solidity data types in SolidiKeY
Guilherme Horta Alvares da Silva

Chalmers University

KeY Symposium 2024


## Motivation
- Solidity is used in the second-biggest cryptocurrency (Ethereum) <!-- .element: class="fragment fade-in-then-semi-out" -->
- Used for programming financial assets <!-- .element: class="fragment fade-in-then-semi-out" -->
- There are adversary interests in smart contracts <!-- .element: class="fragment fade-in-then-semi-out" -->
- Code in the smart contracts domain can't be changed after deployment <!-- .element: class="fragment fade-in-then-semi-out" -->
- Use formal methods to ensure correctness <!-- .element: class="fragment fade-in" -->


## Objectives
- Specify and verify important classes of properties about asset flow <!-- .element: class="fragment fade-in-then-semi-out" -->
- Study a relationship between asset flow and internal contract data <!-- .element: class="fragment fade-in-then-semi-out" -->
- Build a calculus that axiomatizes Solidity <!-- .element: class="fragment fade-in-then-semi-out" -->
- Build a proof system that automates verification, SolidiKeY, which is developed on top of the KeY infrastructure <!-- .element: class="fragment fade-in" -->
<!-- Explain the difference between storage and memory -->