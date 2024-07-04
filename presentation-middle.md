## Defaults
- Different from Java, Solidity has no nulls
- Each variable is initialized with default values
- The main challenge is how to axiomatize the heap to get the defaults lazily just when reading from the heap


## Storage

```solidity [1,5|2|4]
function f() {
	alice = new Person();

	assert(alice.account.balance == 0);
}
```


## Memory

```solidity [1,5|2|4]
function f() {
  Person memory alice = new Person();

  assert(alice.account.balance == 0);
}
```