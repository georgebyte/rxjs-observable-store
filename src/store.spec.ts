import {Store} from './store';

interface ITestStoreState {
    value?: string;
    oneSublevel: {
        value1: string,
        value2: number,
        value3?: number,
    };
    twoSublevels: {
        middleSublevel: {
            lastSublevel: {
                value: string,
            }
        },
        anotherMiddleSublevel: {
            value: number,
        },
        optionalMiddleSublevel?: {
            lastSublevel?: {
                value: string,
            },
        },
    }
}

class TestStoreState implements ITestStoreState {
    value = '';
    oneSublevel = {
        value1: '',
        value2: null,
    };
    twoSublevels = {
        middleSublevel: {
            lastSublevel: {
                value: ''
            }
        },
        anotherMiddleSublevel: {
            value: null,
        }
    }
}

class TestStore extends Store<ITestStoreState> {
    constructor () {
        super(new TestStoreState());
    }
}

describe('Store', () => {
    let store: TestStore;

    beforeEach(() => {
        store = new TestStore();
    });

    it('should update state on specified path', () => {
        store.setState({
            oneSublevel: {
                value1: '',
                value2: null,
            },
            twoSublevels: {
                middleSublevel: {
                    lastSublevel: {
                        value: '',
                    },
                },
                anotherMiddleSublevel: {
                    value: 123,
                },
            },
        });
    });

    it('should update state on specified path', () => {
        store.updateState('abc', 'oneSublevel', 'value1');
        expect(store.state).toEqual({
            value: '',
            oneSublevel: {
                value1: 'abc',
                value2: null,
            },
            twoSublevels: {
                middleSublevel: {
                    lastSublevel: {
                        value: ''
                    }
                },
                anotherMiddleSublevel: {
                    value: null,
                },
            }
        });
    });

    it('should update state on specified path', () => {
        store.updateState({value: 'new value'}, 'twoSublevels', 'optionalMiddleSublevel', 'lastSublevel');
        expect(store.state).toEqual({
            value: '',
            oneSublevel: {
                value1: '',
                value2: null,
            },
            twoSublevels: {
                middleSublevel: {
                    lastSublevel: {
                        value: ''
                    }
                },
                anotherMiddleSublevel: {
                    value: null,
                },
                optionalMiddleSublevel: {
                    lastSublevel: {
                        value: 'new value'
                    }
                }
            }
        });
    });
});
