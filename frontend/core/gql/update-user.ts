import { gql } from "apollo-angular";
import { IUser } from "core/interfaces/user.interface";

export interface IUPDATE_USER {
  updateUser: IUser;
}

export const UPDATE_USER = gql`
  mutation updateUser($updateUser: UpdateUserDto!) {
    updateUser(updateUser: $updateUser) {
      id
    }
  }
`
