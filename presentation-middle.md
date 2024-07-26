## Defaults
- Different from Java, Solidity has no nulls <!-- .element: class="fragment fade-in-then-semi-out" -->
- Each variable is initialized with default values <!-- .element: class="fragment fade-in-then-semi-out" -->
- In the heap, each position of the array has one identity <!-- .element: class="fragment fade-in-then-semi-out" -->
- The size of the array can be very big (like 1000) or even symbolic (not known) <!-- .element: class="fragment fade-in-then-semi-out" -->
- The main challenge is how to axiomatize to get the defaults lazily just when reading <!-- .element: class="fragment fade-in" -->