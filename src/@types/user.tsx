export interface IUser {
    id: string;
    name: string;
    phone: string;
    created_at: string;
    deleted_at: string;
    avatar: string;
    account: string;
}
export type UserContextType = {
    user: IUser[];
};
