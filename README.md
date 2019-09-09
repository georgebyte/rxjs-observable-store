# rxjs-observable-store

[![npm](https://img.shields.io/npm/v/rxjs-observable-store.svg?style=flat-square)](https://www.npmjs.com/package/rxjs-observable-store)
[![npm](https://img.shields.io/npm/dm/rxjs-observable-store.svg?style=flat-square)](https://www.npmjs.com/package/rxjs-observable-store)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/jurebajt/rxjs-observable-store/blob/master/LICENSE)

A state management solution implemented using RxJS to mimic Redux architecture.

Read my blog post [State management in Angular with observable store services](https://jurebajt.com/state-management-in-angular-with-observable-store-services/) to learn more about how to use the `rxjs-observable-store` package to manage state in front-end applications.

## Installation

```bash
npm install rxjs-observable-store --save
```

## API

**Store's public properties:**

**`state: <S>`**  
Current state snapshot.

**`state$: Observable<S>`**  
RxJS Observable of state.

**Store's public methods:**

**`setState(nextState: S): void`**  
Set store's state to `nextState`.

**`patchState(value: any, ...path: (string|number|symbol)[]): void`**  
Set store's state at `path` to `value`.

Note:  
When using TypeScript, errors are thrown for nonexisting `path` and wrong `value` type:
![patchState typed value](images/patchState-typed-value.gif "patchState typed value")

Path autocompletion works as well (10 levels deep):
![patchState path autocompletion](images/patchState-path-autocompletion.gif "patchState path autocompletion")

## Usage

```typescript
import {Store} from 'rxjs-observable-store';

class ExampleState {
    exampleText = 'initial text';
    exampleObject = {
        property1: {
            nestedValue: {
                value: 1000,
            },
        },
    };
}

class ExampleStore extends Store<ExampleState> {
    constructor() {
        super(new ExampleState());
    }

    updateExampleText() {
        this.setState({
            ...this.state,
            exampleText: 'updated text',
        });
    }

    updateNestedValue() {
        this.patchState(
            2000,
            'exampleObject',
            'property1',
            'nestedValue',
            'value'
        );
    }
}

class TestComponent {
    store: ExampleStore;

    constructor() {
        this.store = new ExampleStore();

        this.store.state$.subscribe(state => {
            console.log(state);
        });

        setTimeout(() => {
            this.store.updateExampleText();
        }, 1000);

        setTimeout(() => {
            this.store.updateNestedValue();
        }, 2000);
    }
}
```
