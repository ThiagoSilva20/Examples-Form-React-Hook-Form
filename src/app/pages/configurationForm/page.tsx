import HeaderLink from "@/components/header-link/header";

export default function RegisterForm() {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
            <HeaderLink nextForm="/" previousForm="/pages/feedbackForm" />
            <h1>Configuration Form</h1>
        </div>
    )
}