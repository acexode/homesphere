import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage-angular';
import { User, UserRole } from '../../models';
import { environment } from '../../../../environments/environment';

interface LoginResponse {
  token: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  private readonly tokenKey = 'auth_token';

  constructor(
    private http: HttpClient,
    private storage: Storage
  ) {
    this.initStorage();
  }

  private async initStorage(): Promise<void> {
    await this.storage.create();
    const token = await this.storage.get(this.tokenKey);
    if (token) {
      this.loadUserProfile().subscribe();
    }
  }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${environment.apiUrl}/${environment.apiVersion}/auth/login`, { email, password })
      .pipe(
        tap(async ({ token, user }) => {
          await this.storage.set(this.tokenKey, token);
          this.currentUserSubject.next(user);
        })
      );
  }

  logout(): Observable<void> {
    return this.http
      .post<void>(`${environment.apiUrl}/${environment.apiVersion}/auth/logout`, {})
      .pipe(
        tap(async () => {
          await this.storage.remove(this.tokenKey);
          this.currentUserSubject.next(null);
        })
      );
  }

  register(payload: Partial<User>): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/${environment.apiVersion}/auth/register`, payload);
  }

  loadUserProfile(): Observable<User> {
    return this.http
      .get<User>(`${environment.apiUrl}/${environment.apiVersion}/auth/profile`)
      .pipe(tap((user) => this.currentUserSubject.next(user)));
  }

  get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  get isAuthenticated(): boolean {
    return Boolean(this.currentUserSubject.value);
  }

  get userRole(): UserRole | null {
    return this.currentUserSubject.value?.role ?? null;
  }
}
