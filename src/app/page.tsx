"use client"

import LoginForms from '@/components/ui/LoginPage/LoginForm';
import LoginGraphic from '@/components/ui/LoginPage/LoginSidePanel';

export default function Home() {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <LoginForms />
      <LoginGraphic />
    </div>
  );
}
