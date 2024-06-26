export default interface IUser {
  id?: number;
  name?: string;
  email?: string;
}

export default interface IUserAuthContext {
  user: IUser | null;
  userIsAuthenticated: boolean;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}
