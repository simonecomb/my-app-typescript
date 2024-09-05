export class PostData {
    private id: number;
    private userId: number;
    private title: string;
    private body: string;
    
    constructor(UserID: number, Id: number, Title: string, Body: string) {
        this.id = Id;
        this.userId = UserID;
        this.title = Title;
        this.body = Body;
    }
}