import {Store} from './store';

interface TestStoreStateInterface {
    value1: string;
    value2: string;
    value3?: string;
    oneSublevel: {
        value1: string;
        value2: string;
        value3?: string;
    };
    twoSublevels?: {
        firstSublevel1: {
            secondSublevel1: {
                value1: string;
                value2: string;
                value3?: string;
            };
            secondSublevel2: {
                value1: string;
                value2: string;
                value3?: string;
            };
        };
        firstSublevel2: {
            secondSublevel1: {
                value1: string;
                value2: string;
                value3?: string;
            };
            secondSublevel2: {
                value1: string;
                value2: string;
                value3?: string;
            };
        };
        firstSublevel3?: {
            secondSublevel1: {
                value1: string;
                value2: string;
                value3?: string;
            };
            secondSublevel2: {
                value1: string;
                value2: string;
                value3?: string;
            };
        };
    };
    fiveSublevels?: {
        firstSublevel1: {
            secondSublevel1: {
                thirdSublevel1: {
                    fourthSublevel1: {
                        fifthSublevel1: {
                            value1: string;
                            value2: string;
                            value3?: string;
                        };
                        fifthSublevel2: {
                            value1: string;
                            value2: string;
                            value3?: string;
                        };
                    };
                    fourthSublevel2?: {
                        fifthSublevel1: {
                            value1: string;
                            value2: string;
                            value3?: string;
                        };
                    };
                };
            };
            secondSublevel2: {
                value1: string;
                value2: string;
                value3?: string;
            };
        };
    };
}

class TestStoreState implements TestStoreStateInterface {
    value1 = 'root: value1';
    value2 = 'root: value2';
    oneSublevel = {
        value1: 'oneSublevel: value1',
        value2: 'oneSublevel: value2',
    };
    twoSublevels = {
        firstSublevel1: {
            secondSublevel1: {
                value1: 'twoSublevels-firstSublevel1-secondSublevel1: value1',
                value2: 'twoSublevels-firstSublevel1-secondSublevel1: value2',
            },
            secondSublevel2: {
                value1: 'twoSublevels-firstSublevel1-secondSublevel2: value1',
                value2: 'twoSublevels-firstSublevel1-secondSublevel2: value2',
            },
        },
        firstSublevel2: {
            secondSublevel1: {
                value1: 'twoSublevels-firstSublevel2-secondSublevel1: value1',
                value2: 'twoSublevels-firstSublevel2-secondSublevel1: value2',
            },
            secondSublevel2: {
                value1: 'twoSublevels-firstSublevel2-secondSublevel2: value1',
                value2: 'twoSublevels-firstSublevel2-secondSublevel2: value2',
            },
        },
    };
    fiveSublevels = {
        firstSublevel1: {
            secondSublevel1: {
                thirdSublevel1: {
                    fourthSublevel1: {
                        fifthSublevel1: {
                            value1:
                                'fiveSublevels-firstSublevel1-secondSublevel1-thirdSublevel1-fourthSublevel1-fifthSublevel1: value1',
                            value2:
                                'fiveSublevels-firstSublevel1-secondSublevel1-thirdSublevel1-fourthSublevel1-fifthSublevel1: value2',
                        },
                        fifthSublevel2: {
                            value1:
                                'fiveSublevels-firstSublevel1-secondSublevel1-thirdSublevel1-fourthSublevel1-fifthSublevel2: value1',
                            value2:
                                'fiveSublevels-firstSublevel1-secondSublevel1-thirdSublevel1-fourthSublevel1-fifthSublevel2: value2',
                        },
                    },
                },
            },
            secondSublevel2: {
                value1: 'fiveSublevels-firstSublevel1-secondSublevel2: value1',
                value2: 'fiveSublevels-firstSublevel1-secondSublevel2: value2',
            },
        },
    };
}

class TestStore extends Store<TestStoreStateInterface> {
    constructor() {
        super(new TestStoreState());
    }
}

describe('Store', () => {
    let store: TestStore;

    beforeEach(() => {
        store = new TestStore();
    });

    it('should set state correctly via setState() call', () => {
        const mockedNewState = {
            value1: 'root: value1 updated',
            value2: 'root: value2 updated',
            oneSublevel: {
                value1: 'oneSublevel: value1 updated',
                value2: 'oneSublevel: value2 updated',
                value3: 'oneSublevel: value3 updated',
            },
        };
        store.setState(mockedNewState);
        expect(store.state).toEqual(mockedNewState);
    });

    it('should update values correctly on "root"', () => {
        const newValue = 'root: value1 updated';
        const expectedState = new TestStoreState();
        Object.assign(expectedState, {value1: newValue});
        store.updateState(newValue, 'value1');
        expect(store.state).toEqual(expectedState);
    });

    it('should create values correctly on "root" for non-existing paths', () => {
        const newValue = 'root: value3 created';
        const expectedState = new TestStoreState();
        Object.assign(expectedState, {value3: newValue});
        store.updateState(newValue, 'value3');
        expect(store.state).toEqual(expectedState);
    });

    it('should update values correctly on "oneSublevel"', () => {
        const newValue = 'oneSublevel: value2 updated';
        const expectedState = new TestStoreState();
        Object.assign(expectedState.oneSublevel, {value2: newValue});
        store.updateState(newValue, 'oneSublevel', 'value2');
        expect(store.state).toEqual(expectedState);
    });

    it('should create values correctly on "oneSublevel" for non-existing paths', () => {
        const newValue = 'oneSublevel: value3 created';
        const expectedState = new TestStoreState();
        Object.assign(expectedState.oneSublevel, {value3: newValue});
        store.updateState(newValue, 'oneSublevel', 'value3');
        expect(store.state).toEqual(expectedState);
    });

    it('should update values correctly on "twoSublevels-firstSublevel1-secondSublevel1"', () => {
        const newValue =
            'twoSublevels-firstSublevel1-secondSublevel1: value1 updated';
        const expectedState = new TestStoreState();
        Object.assign(
            expectedState.twoSublevels.firstSublevel1.secondSublevel1,
            {value1: newValue}
        );
        store.updateState(
            newValue,
            'twoSublevels',
            'firstSublevel1',
            'secondSublevel1',
            'value1'
        );
        expect(store.state).toEqual(expectedState);
    });

    it('should create values correctly on "twoSublevels-firstSublevel1-secondSublevel1" for non-existing-paths', () => {
        const newValue =
            'twoSublevels-firstSublevel1-secondSublevel1: value3 created';
        const expectedState = new TestStoreState();
        Object.assign(
            expectedState.twoSublevels.firstSublevel1.secondSublevel1,
            {value3: newValue}
        );
        store.updateState(
            newValue,
            'twoSublevels',
            'firstSublevel1',
            'secondSublevel1',
            'value3'
        );
        expect(store.state).toEqual(expectedState);
    });

    it('should update values correctly on "twoSublevels-firstSublevel2-secondSublevel2"', () => {
        const newValue =
            'twoSublevels-firstSublevel2-secondSublevel2: value2 updated';
        const expectedState = new TestStoreState();
        Object.assign(
            expectedState.twoSublevels.firstSublevel2.secondSublevel2,
            {value2: newValue}
        );
        store.updateState(
            newValue,
            'twoSublevels',
            'firstSublevel2',
            'secondSublevel2',
            'value2'
        );
        expect(store.state).toEqual(expectedState);
    });

    it('should create values correctly on "twoSublevels-firstSublevel2-secondSublevel2" for non-existing-paths', () => {
        const newValue =
            'twoSublevels-firstSublevel2-secondSublevel2: value3 created';
        const expectedState = new TestStoreState();
        Object.assign(
            expectedState.twoSublevels.firstSublevel2.secondSublevel2,
            {value3: newValue}
        );
        store.updateState(
            newValue,
            'twoSublevels',
            'firstSublevel2',
            'secondSublevel2',
            'value3'
        );
        expect(store.state).toEqual(expectedState);
    });

    it('should create values correctly on "twoSublevels" for non-existing-paths', () => {
        const newValue = {
            secondSublevel1: {
                value1:
                    'twoSublevels-firstSublevel3-secondSublevel1: value1 created',
                value2:
                    'twoSublevels-firstSublevel3-secondSublevel1: value2 created',
            },
            secondSublevel2: {
                value1:
                    'twoSublevels-firstSublevel3-secondSublevel2: value1 created',
                value2:
                    'twoSublevels-firstSublevel3-secondSublevel2: value2 created',
            },
        };
        const expectedState = new TestStoreState();
        Object.assign(expectedState.twoSublevels, {firstSublevel3: newValue});
        store.updateState(newValue, 'twoSublevels', 'firstSublevel3');
        expect(store.state).toEqual(expectedState);
    });

    it('should update values correctly on "fiveSublevels-firstSublevel1-secondSublevel1-thirdSublevel1-fourthSublevel1-fifthSublevel1"', () => {
        const newValue =
            'fiveSublevels-firstSublevel1-secondSublevel1-thirdSublevel1-fourthSublevel1-fifthSublevel1: value2 updated';
        const expectedState = new TestStoreState();
        Object.assign(
            expectedState.fiveSublevels.firstSublevel1.secondSublevel1
                .thirdSublevel1.fourthSublevel1.fifthSublevel1,
            {value2: newValue}
        );
        store.updateState(
            newValue,
            'fiveSublevels',
            'firstSublevel1',
            'secondSublevel1',
            'thirdSublevel1',
            'fourthSublevel1',
            'fifthSublevel1',
            'value2'
        );
        expect(store.state).toEqual(expectedState);
    });

    it('should create values correctly on "fiveSublevels-firstSublevel1-secondSublevel1-thirdSublevel1-fourthSublevel1-fifthSublevel2" for non-existing-paths', () => {
        const newValue =
            'fiveSublevels-firstSublevel1-secondSublevel1-thirdSublevel1-fourthSublevel1-fifthSublevel2: value3 created';
        const expectedState = new TestStoreState();
        Object.assign(
            expectedState.fiveSublevels.firstSublevel1.secondSublevel1
                .thirdSublevel1.fourthSublevel1.fifthSublevel2,
            {value3: newValue}
        );
        store.updateState(
            newValue,
            'fiveSublevels',
            'firstSublevel1',
            'secondSublevel1',
            'thirdSublevel1',
            'fourthSublevel1',
            'fifthSublevel2',
            'value3'
        );
        expect(store.state).toEqual(expectedState);
    });

    it('should create values correctly on "fiveSublevels-firstSublevel1-secondSublevel1-thirdSublevel1" for non-existing-paths', () => {
        const newValue = {
            fifthSublevel1: {
                value1:
                    'fiveSublevels-firstSublevel1-secondSublevel1-thirdSublevel1-fourthSublevel2-fifthSublevel1: value1 created',
                value2:
                    'fiveSublevels-firstSublevel1-secondSublevel1-thirdSublevel1-fourthSublevel2-fifthSublevel1: value2 created',
                value3:
                    'fiveSublevels-firstSublevel1-secondSublevel1-thirdSublevel1-fourthSublevel2-fifthSublevel1: value3 created',
            },
        };
        const expectedState = new TestStoreState();
        Object.assign(
            expectedState.fiveSublevels.firstSublevel1.secondSublevel1
                .thirdSublevel1,
            {fourthSublevel2: newValue}
        );
        store.updateState(
            newValue,
            'fiveSublevels',
            'firstSublevel1',
            'secondSublevel1',
            'thirdSublevel1',
            'fourthSublevel2'
        );
        expect(store.state).toEqual(expectedState);
    });
});
