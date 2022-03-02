import { Subject } from 'rxjs';

const subject = new Subject();

export const BackDropService = {
    toggleLoading: (show: boolean) => subject.next(show),
    clearToggleLoading: () => subject.next(),
    getToggleLoading: () => subject.asObservable()
};
