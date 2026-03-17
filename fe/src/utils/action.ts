
"use server";

import { signIn } from "@/auth";

export async function authenticate(email: string, password: string) {
    try {
        await signIn("credentials", {
            username: email,          // ✅ sửa lại đúng field
            password: password,
            redirectTo: "/",       // ✅ bắt buộc dùng cái này
        });

        return { success: true }; // thực ra dòng này không chạy vì redirect rồi
    } catch (error: any) {
        return { error: "Sai tài khoản hoặc mật khẩu" };
    }
}