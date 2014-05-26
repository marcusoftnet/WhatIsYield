# Intro to yield and generators

Koa is cool, because it gives us non-blocking code without having to go through the hassle of nesting callbacks. Have you ever found yourself in a situation where you wanted to get the value from a deep structure callback hierarchy.

Koa fixes this for us, by using generators. What is that? How does it work? And why is Koa using them? 

## What is yield
In order to understand generators we need to understand the concept yield. 

-- yield means: get me the next of the sequence
-- typically used within a loop, in the examples I've seen. 
-- Like 1_yieldInLoops.js
-- but can also be just a number of yield statements in a function
-- Like 2_yieldingFunction.js
--- yield inside functions like this is a feature of EcmaScript 6
--- called generator functions, must have an asterisk

### How to call this
-- Write client that calls the generator function
--- creates an instance of the generator
--- calls .next() to get the value back 
--- show the struct that is returned
--- show what happens if you call the next value

- What happens when you don't call next? 
-- it waits... until the next .next() call.
-- in a nice non-blocking, NodeJsy way. 
-- that's exactly what we get with callbacks... but it's just without the writing the callback. 

Yo
I
Expect
Little
Delay
... do something else in the meanwhile and you can continue here when I'm done

## Co and Koa
- Sooo... if someone could call .next() for us, we could actually get nice code
-- co is one of those tools (Koa is another)
-- with co you can wrap your code in a function that manages the calling to .next() for you so you just can write the code
-- walk through 3_coYieldingFunction.js

- Koa Js behaves in exactly the same way
-- Koa is just a very tiny web server and some middleware you include
-- Koa uses yield and generators for all it's middleware meaning that it will wait until it comes back and in the meantime it's non-blocking letting Node doing something else. 
-- We get the callback non-blocking goodness... without the nesting of callbacks. 

## Koa then?
- let's look at two examples
-- Koa logging middleware
-- getting from db (1000 users)