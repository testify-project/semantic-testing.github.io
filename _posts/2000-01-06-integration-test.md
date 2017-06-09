---
title: "Integration"
bg: navy
color: white
fa-icon: puzzle-piece
---

## Integration Test

**Goal**

A service provided by a module behaves exactly as you expect in isolation.

**Objectives**

* Load and initialize the module
* Load resources used by the module
* Retrieve the service from the module
* Implement one or more test cases that causes the service to fail
* Implement one or more test cases that causes the service to passes
* Deliver production code that has at least 80% code coverage

**Strategies**

* Assert the module loads correctly
* Assert the service can be retrieved from the module
* Assert test cases can be executed independent of other test cases
* Assert the result produced by the service
* Assert integration between the service and collaborators it depends on
* Assert integration between the service and resources it depends on

**Tactics**

* Utilize a testing framework
* Utilize fake or virtual collaborators to simulate certain behaviors
* Utilize an assertion library
* Utilize a local or virtual resources
* Utilize a code coverage analyzer
* Utilize a mutation analyzer

