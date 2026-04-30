# React + Context API

A focused lab to get comfortable with Context API and React state logic.

### The Problem
Prop drilling

### The Solution
- Set up a specific hook (e.g; ItemContext) as a global store
- Created custom hook (useItemName) to make accessing the data clean and easy for any component.
- Wrap the app in a Provider so every child component has access to the context / broadcast.
- Use context anywhere in the app by only importing data through custom hook.

### Note
- ***main branch:*** buggy version
- ***improved-todo branch:*** improved version


