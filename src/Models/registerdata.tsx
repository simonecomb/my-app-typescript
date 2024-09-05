export class RegisterData {
    private Username: string;
    private Email: string;
    private Password: string;
    private ConfirmPassword: string;
    private Address: string;

    constructor(Username: string, Email: string, Password: string, ConfirmPassword: string, Address: string) {
        this.Username = Username;
        this.Email = Email;
        this.Password = Password;
        this.ConfirmPassword = ConfirmPassword;
        this.Address = Address;
    }

    checkPassword(): boolean {
        let isPasswordConfirmed = false;
        if(this.Password === this.ConfirmPassword)
        {
            isPasswordConfirmed = true;
        }  
        return isPasswordConfirmed
    }
    
}