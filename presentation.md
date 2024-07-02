# KeY Workshop
Guilherme Horta Alvares da Silva

---

## Memory and storage
- Storage holds data between function calls
- Memory is a temporary place to store data
- Memory in Solidity is similar to Java where each arrays and structs are like pointers. They store identities.
- In storage, each variable has its value. Every assignment is a deep copy.
- In Solidity, there is storage path variable. It represents a path to a storage variable. 

---

## Storage

```solidity [1,12|2-4|3,6-7|3,9-11]
function f() {
	alice.account.balance = 10;
	bob.account.balance = 20;
	Account storage acc = alice.account;

	alice.account = bob.account;
	assert(acc.balance == 20);

	acc.balance = 30;
	assert(alice.account.balance == 30);
	assert(bob.account.balance   == 20);
}
```

---

## Memory

```solidity [1,12|2-4|3,6-7|3,9-11]
function f(Person alice, Person bob) {
	alice.account.balance = 10;
	bob.account.balance = 20;
	Account memory acc = alice.account;

	alice.account = bob.account;
	assert(acc.balance == 20);

	acc.balance = 30;
	assert(alice.account.balance == 30);
	assert(bob.account.balance   == 30);
}
```

---

## Defaults
- Different from Java, Solidity has no nulls
- Each variable is initialized with default values
- The main challenge is how to axiomatize the heap to get the defaults lazily just when reading from the heap

---

## Storage

```solidity [1,5|2|4]
function f() {
	alice = new Person();

	assert(alice.account.balance == 0);
}
```

---

## Memory

```solidity [1,5|2|4]
function f() {
  Person memory alice = new Person();

  assert(alice.account.balance == 0);
}
```


