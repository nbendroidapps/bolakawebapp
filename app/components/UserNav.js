'use client';

import Link from 'next/link';
import { useAuth } from '../AuthContext';

export default function UserNav() {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }

  return (
    <>
      {user ? (
        <Link className="nav-link profile-link" href="/profile" aria-label="প্রোফাইল দেখুন">
          👤 প্রোফাইল
        </Link>
      ) : (
        <Link className="nav-link login-link" href="/login" aria-label="সাইন ইন করুন">
          📌 সাইন ইন
        </Link>
      )}
    </>
  );
}
