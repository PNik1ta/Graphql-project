import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(UserEntity)
		private readonly userRepository: Repository<UserEntity>
	) {}

	async createUser(dto: CreateUserDto): Promise<UserEntity> {
		return await this.userRepository.save({ ...dto });
	}

	async getUserById(id: number): Promise<UserEntity> {
		return await this.userRepository.findOne({ where: { id }});
	}

	async getAllUsers(): Promise<UserEntity[]> {
		return await this.userRepository.find();
	}

	async removeUser(id: number): Promise<number> {
		await this.userRepository.delete({ id });
		return id;
	}

	async updateUser(dto: UpdateUserDto): Promise<UserEntity> {
		await this.userRepository.update( { id: dto.id }, { ...dto });
		return await this.getUserById(dto.id);
	}
}
