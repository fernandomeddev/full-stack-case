import { describe, it, expect, vi, beforeEach } from 'vitest';
import UserRepository from '../../../repository/userRepository';
import { UserDto } from '../../../dtos/UserDto';
import { userSignupService } from '../../../services/user/userSignupService';
import { IUserSignup } from '../../../validationSchemas/userSignup.schema';

vi.mock('../../repository/userRepository');

describe('userSignupService', () => {
    let mockUserRepository: any;

    beforeEach(() => {
        mockUserRepository = {
            findAll: vi.fn(),
            save: vi.fn(),
        };
        UserRepository.instanse = vi.fn().mockReturnValue(mockUserRepository);
    });

    it('should return success when user is created', async () => {
        const userInput: IUserSignup = {
            name: 'Test User',
            email: 'test@example.com',
            password: 'securepassword'
        };

        const savedUser: UserDto = {
            id: '123',
            name: 'Test User',
            email: 'test@example.com',
            hashedPassword: 'securepassword',
            createdAt: new Date(),
            updatedAt: new Date()
        };

        mockUserRepository.findAll.mockResolvedValue([]);
        mockUserRepository.save.mockResolvedValue({ id: '123' });

        const result = await userSignupService(userInput);

        expect(result.success).toBe(true);
        expect(result.data).toEqual(savedUser);
    });

    it('should return an error if user already exists', async () => {
        const userInput: IUserSignup = {
            name: 'Test User',
            email: 'test@example.com',
            password: 'securepassword'
        };

        const existingUser: UserDto = {
            id: '123',
            name: 'Test User',
            email: 'test@example.com',
            hashedPassword: 'securepassword',
            createdAt: new Date(),
            updatedAt: new Date()
        };

        mockUserRepository.findAll.mockResolvedValue([existingUser]);

        const result = await userSignupService(userInput);

        expect(result.success).toBe(false);
        expect(result.messages).toContain('User already exists');
    });

    it('should return an error if there is an issue saving the user', async () => {
        const userInput: IUserSignup = {
            name: 'Test User',
            email: 'test@example.com',
            password: 'securepassword'
        };

        mockUserRepository.findAll.mockResolvedValue([]);
        mockUserRepository.save.mockResolvedValue({ id: null });

        const result = await userSignupService(userInput);

        expect(result.success).toBe(false);
        expect(result.messages).toContain('Error on save user');
    });
});
