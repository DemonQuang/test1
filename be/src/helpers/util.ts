const bcrypt = require('bcrypt');
const saltRounds = 10;
export const hashPassword = async (plainPassword: string): Promise<string> => {
    try {

        const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw new Error('Error hashing password');
    }

}

export const comparePasswordHelper = async (plainPassword: string, hashedPassword: string) => {
    try {
        return await bcrypt.compare(plainPassword, hashedPassword);
    } catch (error) {
        console.log(error);
    }
}