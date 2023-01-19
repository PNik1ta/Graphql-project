import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entities/user.entity';
import { UserService } from '../services/user.service';

@Resolver('User')
export class UserResolver {
	constructor(
		private readonly userService: UserService
	) { }

	@Mutation(() => UserEntity)
	async createUser(@Args('createUser') createUserDto: CreateUserDto): Promise<UserEntity> {
		return await this.userService.createUser(createUserDto);
	}

	@Mutation(() => UserEntity)
	async updateUser(@Args('updateUser') updateUserDto: UpdateUserDto): Promise<UserEntity> {
		return await this.userService.updateUser(updateUserDto);
	}

	@Mutation(() => Number)
	async removeUser(@Args('id') id: number): Promise<number> {
		return await this.userService.removeUser(id);
	}

	@Query(() => UserEntity)
	async getOneUser(@Args('id') id: number): Promise<UserEntity> {
		return await this.userService.getUserById(id);
	}

	@Query(() => [UserEntity])
	async getAllUsers(): Promise<UserEntity[]> {
		return await this.userService.getAllUsers();
	}
}
