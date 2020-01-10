# Checking out Mobx

Single mobx store is created and passed to the application
through the Context.

Custom `useAutorun` hook is used for the effects that depend
on the store values.

Posts are downloaded asynchronously, received data is typechecked
using type assertions feature of Typescript 3.7
