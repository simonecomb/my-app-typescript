export class LoginData {
    private Username: string;
    private Email: string;
    private Password: string;
    private RememberMe: boolean;

    constructor(Username: string, Email: string, Password: string, RememberMe: boolean) {
        this.Username = Username;
        this.Email = Email;
        this.Password = Password;
        this.RememberMe = RememberMe;
    }

    getDomain(): string {
        return this.Email.split('@')[1];  // Get the string after the char @
    }
}