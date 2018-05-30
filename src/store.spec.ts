import {Store} from './store';

class TestStore extends Store<any> {
    constructor () {
        super({
            value: 'initial value',
        });
    }

    updateState (nextState: any): void {
        this.setState(nextState);
    }
}

describe('Store', () => {
    let store: TestStore;

    beforeEach(() => {
        store = new TestStore();
    });

    it('should set correct initial state', () => {
        expect(store.state).toEqual({value: 'initial value'});
    });

    it('should correctly update the state when calling setState', () => {
        store.updateState({value: 'updated value'});
        expect(store.state).toEqual({value: 'updated value'});
    });

    it('should push updated state to subscribers', done => {
        store.updateState({value: 'updated value'});
        store.state$.subscribe(state => {
            expect(state).toEqual({value: 'updated value'});
            done();
        });
    });
});
