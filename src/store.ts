import {BehaviorSubject, Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';
import {Object, Tuple} from 'ts-toolbelt';

type Index = string | number | symbol;

export class Store<S extends object> {
    state$: Observable<S>;
    private _state$: BehaviorSubject<S>;

    protected constructor(initialState: S) {
        this._state$ = new BehaviorSubject(initialState);
        this.state$ = this._state$.asObservable();
    }

    get state(): S {
        return this._state$.getValue();
    }

    setState(nextState: S) {
        this._state$.next(nextState);
    }

    // prettier-ignore
    patchState<
        P1 extends keyof Object.Path<S, []>
    >(value: Object.Path<S, [P1]>, part1: P1): void;
    // prettier-ignore
    patchState<
        P1 extends keyof Object.Path<S, []>,
        P2 extends keyof Object.Path<S, [P1]>
    >(value: Object.Path<S, [P1, P2]>, part1: P1, part2: P2): void;
    // prettier-ignore
    patchState<
        P1 extends keyof Object.Path<S, []>,
        P2 extends keyof Object.Path<S, [P1]>,
        P3 extends keyof Object.Path<S, [P1, P2]>
    >(value: Object.Path<S, [P1, P2, P3]>, part1: P1, part2: P2, part3: P3): void;
    // prettier-ignore
    patchState<
        P1 extends keyof Object.Path<S, []>,
        P2 extends keyof Object.Path<S, [P1]>,
        P3 extends keyof Object.Path<S, [P1, P2]>,
        P4 extends keyof Object.Path<S, [P1, P2, P3]>
    // tslint:disable-next-line:max-line-length
    >(value: Object.Path<S, [P1, P2, P3, P4]>, part1: P1, part2: P2, part3: P3, part4: P4): void;
    // prettier-ignore
    patchState<
        P1 extends keyof Object.Path<S, []>,
        P2 extends keyof Object.Path<S, [P1]>,
        P3 extends keyof Object.Path<S, [P1, P2]>,
        P4 extends keyof Object.Path<S, [P1, P2, P3]>,
        P5 extends keyof Object.Path<S, [P1, P2, P3, P4]>
    // tslint:disable-next-line:max-line-length
    >(value: Object.Path<S, [P1, P2, P3, P4, P5]>, part1: P1, part2: P2, part3: P3, part4: P4, part5: P5): void;
    // prettier-ignore
    patchState<
        P1 extends keyof Object.Path<S, []>,
        P2 extends keyof Object.Path<S, [P1]>,
        P3 extends keyof Object.Path<S, [P1, P2]>,
        P4 extends keyof Object.Path<S, [P1, P2, P3]>,
        P5 extends keyof Object.Path<S, [P1, P2, P3, P4]>,
        P6 extends keyof Object.Path<S, [P1, P2, P3, P4, P5]>
    // tslint:disable-next-line:max-line-length
    >(value: Object.Path<S, [P1, P2, P3, P4, P5, P6]>, part1: P1, part2: P2, part3: P3, part4: P4, part5: P5, part6: P6): void;
    // prettier-ignore
    patchState<
        P1 extends keyof Object.Path<S, []>,
        P2 extends keyof Object.Path<S, [P1]>,
        P3 extends keyof Object.Path<S, [P1, P2]>,
        P4 extends keyof Object.Path<S, [P1, P2, P3]>,
        P5 extends keyof Object.Path<S, [P1, P2, P3, P4]>,
        P6 extends keyof Object.Path<S, [P1, P2, P3, P4, P5]>,
        P7 extends keyof Object.Path<S, [P1, P2, P3, P4, P5, P6]>
    // tslint:disable-next-line:max-line-length
    >(value: Object.Path<S, [P1, P2, P3, P4, P5, P6, P7]>, part1: P1, part2: P2, part3: P3, part4: P4, part5: P5, part6: P6, part7: P7): void;
    // prettier-ignore
    patchState<
        P1 extends keyof Object.Path<S, []>,
        P2 extends keyof Object.Path<S, [P1]>,
        P3 extends keyof Object.Path<S, [P1, P2]>,
        P4 extends keyof Object.Path<S, [P1, P2, P3]>,
        P5 extends keyof Object.Path<S, [P1, P2, P3, P4]>,
        P6 extends keyof Object.Path<S, [P1, P2, P3, P4, P5]>,
        P7 extends keyof Object.Path<S, [P1, P2, P3, P4, P5, P6]>,
        P8 extends keyof Object.Path<S, [P1, P2, P3, P4, P5, P6, P7]>
    // tslint:disable-next-line:max-line-length
    >(value: Object.Path<S, [P1, P2, P3, P4, P5, P6, P7, P8]>, part1: P1, part2: P2, part3: P3, part4: P4, part5: P5, part6: P6, part7: P7, part8: P8): void;
    // prettier-ignore
    patchState<
        P1 extends keyof Object.Path<S, []>,
        P2 extends keyof Object.Path<S, [P1]>,
        P3 extends keyof Object.Path<S, [P1, P2]>,
        P4 extends keyof Object.Path<S, [P1, P2, P3]>,
        P5 extends keyof Object.Path<S, [P1, P2, P3, P4]>,
        P6 extends keyof Object.Path<S, [P1, P2, P3, P4, P5]>,
        P7 extends keyof Object.Path<S, [P1, P2, P3, P4, P5, P6]>,
        P8 extends keyof Object.Path<S, [P1, P2, P3, P4, P5, P6, P7]>,
        P9 extends keyof Object.Path<S, [P1, P2, P3, P4, P5, P6, P7, P8]>
    // tslint:disable-next-line:max-line-length
    >(value: Object.Path<S, [P1, P2, P3, P4, P5, P6, P7, P8, P9]>, part1: P1, part2: P2, part3: P3, part4: P4, part5: P5, part6: P6, part7: P7, part8: P8, part9: P9): void;
    // prettier-ignore
    patchState<
        P1 extends keyof Object.Path<S, []>,
        P2 extends keyof Object.Path<S, [P1]>,
        P3 extends keyof Object.Path<S, [P1, P2]>,
        P4 extends keyof Object.Path<S, [P1, P2, P3]>,
        P5 extends keyof Object.Path<S, [P1, P2, P3, P4]>,
        P6 extends keyof Object.Path<S, [P1, P2, P3, P4, P5]>,
        P7 extends keyof Object.Path<S, [P1, P2, P3, P4, P5, P6]>,
        P8 extends keyof Object.Path<S, [P1, P2, P3, P4, P5, P6, P7]>,
        P9 extends keyof Object.Path<S, [P1, P2, P3, P4, P5, P6, P7, P8]>,
        R extends Index[]
    // tslint:disable-next-line:max-line-length
    >(value: Object.Path<S, Tuple.Concat<[P1, P2, P3, P4, P5, P6, P7, P8, P9], R>>, part1: P1, part2: P2, part3: P3, part4: P4, part5: P5, part6: P6, part7: P7, part8: P8, part9: P9, ...rest: R): void;

    patchState(value: any, ...path: Index[]) {
        if (path.length < 1) {
            return;
        }
        this.setState(this.getUpdatedState(value, this.state, path));
    }

    // prettier-ignore
    onChanges<P1 extends keyof Object.Path<S, []>>(part1: P1): Observable<Object.Path<S, [P1]>>;
    // prettier-ignore
    onChanges<
        P1 extends keyof Object.Path<S, []>,
        P2 extends keyof Object.Path<S, [P1]>
    >(part1: P1, part2: P2): Observable<Object.Path<S, [P1, P2]>>;
    // prettier-ignore
    onChanges<
        P1 extends keyof Object.Path<S, []>,
        P2 extends keyof Object.Path<S, [P1]>,
        P3 extends keyof Object.Path<S, [P1, P2]>
    >(part1: P1, part2: P2, part3: P3): Observable<Object.Path<S, [P1, P2, P3]>>;
    // prettier-ignore
    onChanges<
        P1 extends keyof Object.Path<S, []>,
        P2 extends keyof Object.Path<S, [P1]>,
        P3 extends keyof Object.Path<S, [P1, P2]>,
        P4 extends keyof Object.Path<S, [P1, P2, P3]>
    >(part1: P1, part2: P2, part3: P3, part4: P4): Observable<Object.Path<S, [P1, P2, P3, P4]>>;
    // prettier-ignore
    onChanges<
        P1 extends keyof Object.Path<S, []>,
        P2 extends keyof Object.Path<S, [P1]>,
        P3 extends keyof Object.Path<S, [P1, P2]>,
        P4 extends keyof Object.Path<S, [P1, P2, P3]>,
        P5 extends keyof Object.Path<S, [P1, P2, P3, P4]>
    // tslint:disable-next-line:max-line-length
    >(part1: P1, part2: P2, part3: P3, part4: P4, part5: P5): Observable<Object.Path<S, [P1, P2, P3, P4, P5]>>;
    // prettier-ignore
    onChanges<
        P1 extends keyof Object.Path<S, []>,
        P2 extends keyof Object.Path<S, [P1]>,
        P3 extends keyof Object.Path<S, [P1, P2]>,
        P4 extends keyof Object.Path<S, [P1, P2, P3]>,
        P5 extends keyof Object.Path<S, [P1, P2, P3, P4]>,
        P6 extends keyof Object.Path<S, [P1, P2, P3, P4, P5]>
    // tslint:disable-next-line:max-line-length
    >(part1: P1, part2: P2, part3: P3, part4: P4, part5: P5, part6: P6): Observable<Object.Path<S, [P1, P2, P3, P4, P5, P6]>>;
    // prettier-ignore
    onChanges<
        P1 extends keyof Object.Path<S, []>,
        P2 extends keyof Object.Path<S, [P1]>,
        P3 extends keyof Object.Path<S, [P1, P2]>,
        P4 extends keyof Object.Path<S, [P1, P2, P3]>,
        P5 extends keyof Object.Path<S, [P1, P2, P3, P4]>,
        P6 extends keyof Object.Path<S, [P1, P2, P3, P4, P5]>,
        P7 extends keyof Object.Path<S, [P1, P2, P3, P4, P5, P6]>
    // tslint:disable-next-line:max-line-length
    >(part1: P1, part2: P2, part3: P3, part4: P4, part5: P5, part6: P6, part7: P7): Observable<Object.Path<S, [P1, P2, P3, P4, P5, P6, P7]>>;
    // prettier-ignore
    onChanges<
        P1 extends keyof Object.Path<S, []>,
        P2 extends keyof Object.Path<S, [P1]>,
        P3 extends keyof Object.Path<S, [P1, P2]>,
        P4 extends keyof Object.Path<S, [P1, P2, P3]>,
        P5 extends keyof Object.Path<S, [P1, P2, P3, P4]>,
        P6 extends keyof Object.Path<S, [P1, P2, P3, P4, P5]>,
        P7 extends keyof Object.Path<S, [P1, P2, P3, P4, P5, P6]>,
        P8 extends keyof Object.Path<S, [P1, P2, P3, P4, P5, P6, P7]>
    // tslint:disable-next-line:max-line-length
    >(part1: P1, part2: P2, part3: P3, part4: P4, part5: P5, part6: P6, part7: P7, part8: P8): Observable<Object.Path<S, [P1, P2, P3, P4, P5, P6, P7, P8]>>;
    // prettier-ignore
    onChanges<
        P1 extends keyof Object.Path<S, []>,
        P2 extends keyof Object.Path<S, [P1]>,
        P3 extends keyof Object.Path<S, [P1, P2]>,
        P4 extends keyof Object.Path<S, [P1, P2, P3]>,
        P5 extends keyof Object.Path<S, [P1, P2, P3, P4]>,
        P6 extends keyof Object.Path<S, [P1, P2, P3, P4, P5]>,
        P7 extends keyof Object.Path<S, [P1, P2, P3, P4, P5, P6]>,
        P8 extends keyof Object.Path<S, [P1, P2, P3, P4, P5, P6, P7]>,
        P9 extends keyof Object.Path<S, [P1, P2, P3, P4, P5, P6, P7, P8]>
    // tslint:disable-next-line:max-line-length
    >(part1: P1, part2: P2, part3: P3, part4: P4, part5: P5, part6: P6, part7: P7, part8: P8, part9: P9): Observable<Object.Path<S, [P1, P2, P3, P4, P5, P6, P7, P8, P9]>>;
    // prettier-ignore
    onChanges<
        P1 extends keyof Object.Path<S, []>,
        P2 extends keyof Object.Path<S, [P1]>,
        P3 extends keyof Object.Path<S, [P1, P2]>,
        P4 extends keyof Object.Path<S, [P1, P2, P3]>,
        P5 extends keyof Object.Path<S, [P1, P2, P3, P4]>,
        P6 extends keyof Object.Path<S, [P1, P2, P3, P4, P5]>,
        P7 extends keyof Object.Path<S, [P1, P2, P3, P4, P5, P6]>,
        P8 extends keyof Object.Path<S, [P1, P2, P3, P4, P5, P6, P7]>,
        P9 extends keyof Object.Path<S, [P1, P2, P3, P4, P5, P6, P7, P8]>,
        R extends Index[]
    // tslint:disable-next-line:max-line-length
    >(part1: P1, part2: P2, part3: P3, part4: P4, part5: P5, part6: P6, part7: P7, part8: P8, part9: P9, ...rest: R): Observable<Object.Path<S, Tuple.Concat<[P1, P2, P3, P4, P5, P6, P7, P8, P9], R>>>;

    onChanges(...path: Index[]) {
        return this.state$.pipe(
            map(state =>
                path.reduce((result, part) => {
                    if (result === undefined || result === null) {
                        return undefined;
                    }
                    return result[part];
                }, state)
            ),
            distinctUntilChanged()
        );
    }

    private getUpdatedState(value: any, stateSubtree: any, path: Index[]): any {
        const key = path[0];
        if (path.length === 1) {
            return {
                ...stateSubtree,
                [key]: value,
            };
        }
        if (stateSubtree[key] === undefined || stateSubtree[key] === null) {
            return {
                ...stateSubtree,
                [key]: this.createStateSubtree(value, path.slice(1)),
            };
        }
        return {
            ...stateSubtree,
            [key]: this.getUpdatedState(
                value,
                stateSubtree[key],
                path.slice(1)
            ),
        };
    }

    private createStateSubtree(value: any, path: Index[]): any {
        const key = path[0];
        if (path.length === 1) {
            return {
                [key]: value,
            };
        }
        return {
            [key]: this.createStateSubtree(value, path.slice(1)),
        };
    }
}
