class AuthService {
    private _info: Object | undefined;
    HandleClickCreate(info: Object) {
        this._info = info;
        console.log(this._info)


    }
}

export const authService = new AuthService();