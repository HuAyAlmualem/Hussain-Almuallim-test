// src/i18n.js
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    login: 'Log In',
    dontHaveAccount: "Don't Have An Account ?",
    signUp: 'Sign Up',
    emailAddress: 'Email Address',
    password: 'Password',
    forgetPassword: 'Forget Password?',
    loginButton: 'Log in',
    loginWithGoogle: 'Log in with Google',
    backToHomePage: 'Back to home page',
    language: 'English',
  },
  ar: {
    login: 'تسجيل الدخول',
    dontHaveAccount: 'ليس لديك حساب؟',
    signUp: 'سجل',
    emailAddress: 'عنوان البريد الإلكتروني',
    password: 'كلمة المرور',
    forgetPassword: 'نسيت كلمة المرور؟',
    loginButton: 'تسجيل الدخول',
    loginWithGoogle: 'تسجيل الدخول باستخدام جوجل',
    backToHomePage: 'العودة إلى الصفحة الرئيسية',
    language: 'االلغة العربية',
  },
};

const i18n = createI18n({
  locale: 'en', // set locale to english
  fallbackLocale: 'ar',
  messages,
});

export default i18n;
