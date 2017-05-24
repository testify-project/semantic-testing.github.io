---
title: "System"
bg: darknavy
color: white
fa-icon: cubes
---

## System Test

**Goal**

Insure a client facing service behaves exactly as you expect in isolation.

**Objectives**

* Load and initialize the system
* Load resources used by the system
* Retrieves the service from the system
* Implement one or more test cases that causes the service to fail
* Implement one or more test cases that causes the service to passes
* Deliver production code that has at least 80% code coverage

**Strategies**

* Assert the system loads correctly
* Assert the service can be retrieved from the system
* Assert test cases can be executed independent of other test cases
* Assert the input sent to the service by the client
* Assert the output sent to the client by the service
* Assert integration between the service, its collaborators and resources it uses

**Tactics**

* Utilize a testing framework
* Utilize virtual collaborators to simulate certain behaviors
* Utilize an assertion library
* Utilize a virtual or remote resources
* Utilize a code coverage analyzer
* Utilize a mutation analyzer
