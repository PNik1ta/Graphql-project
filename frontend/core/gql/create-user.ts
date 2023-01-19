import { gql } from "apollo-angular";
import { IUser } from "core/interfaces/user.interface";

export interface ICREATE_USER {
  createUser: IUser;
}

export const CREATE_USER = gql`
  mutation createUser($createUser: CreateUserDto!) {
    createUser(createUser: $createUser) {
      id
    }
  }
`
