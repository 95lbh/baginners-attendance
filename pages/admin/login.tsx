import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    // 간단한 비밀번호 체크 (임시)
    if (password === 'admin1234') {
      localStorage.setItem('admin', 'true');
      alert('✅ 관리자 로그인 성공!');
      router.push('/');
    } else {
      alert('❌ 비밀번호가 틀렸습니다.');
    }
  };

  return (
    <main className="max-w-md mx-auto px-4 py-10 text-center">
      <h1 className="text-2xl font-bold mb-6">🔐 관리자 로그인</h1>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="관리자 비밀번호 입력"
        className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        로그인
      </button>
    </main>
  );
}