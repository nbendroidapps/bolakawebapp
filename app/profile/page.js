'use client';

import { useAuth } from '../AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Profile() {
  const router = useRouter();
  const { user, loading, logout } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  if (loading) {
    return (
      <main>
        <nav className="nav" aria-label="প্রধান নেভিগেশন">
          <Link className="brand" href="/" aria-label="বলাকা হোম">বলাকা<span>।</span></Link>
        </nav>
        <section className="profile-container">
          <p>লোড হচ্ছে...</p>
        </section>
      </main>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <main>
      <nav className="nav" aria-label="প্রধান নেভিগেশন">
        <Link className="brand" href="/" aria-label="বলাকা হোম">বলাকা<span>।</span></Link>
      </nav>

      <section className="profile-container">
        <div className="profile-card">
          <div className="profile-header">
            <h1>আমার প্রোফাইল</h1>
          </div>

          <div className="profile-content">
            {user.photoURL && (
              <div className="profile-photo-container">
                <img 
                  src={user.photoURL}
                  alt={user.displayName || 'ব্যবহারকারী ছবি'}
                  className="profile-photo"
                />
              </div>
            )}

            <div className="profile-info">
              <div className="info-item">
                <label>নাম</label>
                <p>{user.displayName || 'নির্ধারিত নয়'}</p>
              </div>

              <div className="info-item">
                <label>ইমেল</label>
                <p>{user.email}</p>
              </div>

              <div className="info-item">
                <label>প্রমাণীকরণ প্রদানকারী</label>
                <p>গুগল</p>
              </div>
            </div>

            <div className="profile-actions">
              <Link href="/" className="button primary">
                হোমে ফিরুন
              </Link>
              <button 
                className="button secondary"
                onClick={handleLogout}
                aria-label="লগ আউট করুন"
              >
                লগ আউট
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
