# rxjs-observable-store
A state management solution implemented using RxJS to mimic Redux architecture.

Read my blog post [State management in Angular with observable store services](https://jurebajt.com/state-management-in-angular-with-observable-store-services/) to learn more about how to use the `rxjs-observable-store` package to manage state in front-end applications.

## Installation

```bash
npm install rxjs-observable-store --save
```

## Usage

```typescript
import {Store} from 'rxjs-observable-store';

class TestState {
    testProperty: string = 'initial value';
}

class TestStore extends Store<TestState> {
    constructor () {
        super(new TestState());
    }

    updateTestProperty (): void {
        this.setState({
            ...this.state,
            testProperty: 'updated value',
        });
    }
}

class TestComponent {
    store: TestStore;

    constructor () {
        this.store = new TestStore();

        this.store.state$.subscribe(state => {
            console.log(state);
        });

        setTimeout(() => {
            this.store.updateTestProperty();
        }, 3000);
    }
}
```
