export default class UserDto {
    id;
    email;
    login;
    username;
    isActivated;
    avatar;
    about;
    role;

    constructor(data) {
        this.id = data.id;
        this.email = data.email;
        this.login = data.login;
        this.username = data.username; 
        this.isActivated = data.isActivated; 
        this.role = data.role; 
        this.about = data.about ?? ''; 
        this.currentUserSubscribed = data.currentUserSubscribed; 
        this.avatar = {
            name : data.avatar,
            url : process.env.BASE_URL + `/uploads/avatar/${data.avatar}.png`
        };
    }
}