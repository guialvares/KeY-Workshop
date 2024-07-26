## Memory <!-- .element: style="font-size: 40px; color:aqua" -->
$$
\begin{align*}
  \text{newMemory} &\leftarrow \text{alice}, \text{account}, \textcolor{chartreuse}{\text{alice:account}}  \newline
                   &\leftarrow \text{bob}, \text{account}, \textcolor{chartreuse}{\text{bob:account}} \newline
                   &\leftarrow \text{alice:account}, \text{balance}, \textcolor{chartreuse}{10}  \newline
                   &\leftarrow \text{bob:account}, \text{balance}, \textcolor{chartreuse}{20}  \newline
\end{align*}
$$ <!-- .element: style="font-size: 35px;" class="fragment fade-in" -->

## Storage <!-- .element: style="font-size: 40px; color:aqua" class="fragment fade-in" -->
$$
\begin{align*}
  \text{newStorage} &\leftarrow (\text{alice} &\leftarrow (\text{account} \leftarrow (\text{balance} \leftarrow \textcolor{chartreuse}{10})))  \newline
                   &\leftarrow (\text{bob} &\leftarrow (\text{account} \leftarrow (\text{balance} \leftarrow \textcolor{chartreuse}{20})))
\end{align*}
$$ <!-- .element: style="font-size: 35px;" class="fragment fade-in" -->


## After running
```solidity
function f(){
    ...
    alice.account = bob.account;
    ...
}
```


## Memory <!-- .element: style="font-size: 40px; color:aqua" -->
$$
\begin{align*}
  \text{newMemory} &\leftarrow \text{alice}, \text{account}, \textcolor{chartreuse}{\text{bob:account}}  \newline
                   &\leftarrow \text{bob}, \text{account}, \textcolor{chartreuse}{\text{bob:account}} \newline
                   &\leftarrow \text{alice:account}, \text{balance}, \textcolor{chartreuse}{10}  \newline
                   &\leftarrow \text{bob:account}, \text{balance}, \textcolor{chartreuse}{20}  \newline
\end{align*}
$$ <!-- .element: style="font-size: 35px;" class="fragment fade-in" -->

## Storage <!-- .element: style="font-size: 40px; color:aqua" class="fragment fade-in" -->
$$
\begin{align*}
  \text{newStorage} &\leftarrow (\text{alice} &\leftarrow (\text{account} \leftarrow (\text{balance} \leftarrow \textcolor{chartreuse}{20})))  \newline
                   &\leftarrow (\text{bob} &\leftarrow (\text{account} \leftarrow (\text{balance} \leftarrow \textcolor{chartreuse}{20})))
\end{align*}
$$ <!-- .element: style="font-size: 35px;" class="fragment fade-in" -->


## Defaults
- Different from Java, Solidity has no nulls <!-- .element: class="fragment fade-in-then-semi-out" -->
- Each variable is initialized with default values <!-- .element: class="fragment fade-in-then-semi-out" -->
- In the heap, each position of the array has one identity <!-- .element: class="fragment fade-in-then-semi-out" -->
- The size of the array can be very big (like 1000) or even symbolic (not known) <!-- .element: class="fragment fade-in-then-semi-out" -->
- The main challenge is how to axiomatize to get the defaults lazily just when reading <!-- .element: class="fragment fade-in" -->