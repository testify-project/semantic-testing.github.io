---
title: "Integration"
bg: navy
color: white
fa-icon: puzzle-piece
---

## Integration Test

**Goal**

The goal of an integration test is to insure a service provided by a module behaves exactly as you expect in isolation.

**Objectives**

* Load and initialize the module
* Load resources used by the module
* Retrieves the service from the module
* Implement one or more test cases that causes the service to fail
* Implement one or more test cases that causes the service to passes
* Deliver production code that has at least 80% code coverage

**Strategies**

* Assert the module loads correctly
* Assert the service can be retrieved from the module
* Assert test cases can be executed independent of other test cases
* Assert the result produced by the service
* Assert integration between the service, its collaborators and resources it uses

**Tactics**

* Utilize a testing framework
* Utilize a mocking framework to simulate certain collaborators
* Utilize an assertion library
* Utilize a local or virtual resources
* Utilize a code coverage tool
* Utilize a mutation testing tool
