import { AuthProvider } from "./AuthContext";
import { UIProvider } from "./UIContext";

export const ContextWrapper = ({ children }) => {
    return (
        <UIProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        </UIProvider>
    );
}