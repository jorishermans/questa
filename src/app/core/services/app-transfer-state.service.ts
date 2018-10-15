import { TransferState, makeStateKey } from '@angular/platform-browser';
import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap, map } from 'rxjs/operators';
import { isPlatformServer } from '@angular/common';

@Injectable()
export class AppTransferStateService {

    constructor(@Inject(PLATFORM_ID) private platformId, private state: TransferState) {}

    public lookFor<T>(observable: Observable<T>, key): Observable<T> {
        let stateResult = this.state.get(key, null as any);
        
        if (stateResult) {
            if (!isPlatformServer(this.platformId)) {
                console.log('remove ...');
                this.state.remove(key);
            }
            return of(stateResult);
        } else {
            return observable
                .pipe(tap(result => {
                    if (isPlatformServer(this.platformId)) {
                        this.state.set(key, result as any);
                    }
                }));
        }
    }
}