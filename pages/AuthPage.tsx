import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const AuthPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);

    try {
      await loginWithGoogle();
      navigate('/dashboard');
    } catch (err: any) {
      console.error('Google login error:', err);
      setError('Failed to sign in with Google. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full mb-6 shadow-lg">
            <i className="fa-solid fa-graduation-cap text-3xl"></i>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Personal Tutor AI
          </h1>
          <p className="text-gray-600 text-lg">
            Your intelligent learning companion
          </p>
        </div>

        {/* Auth Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Welcome to AI Learning
            </h2>
            <p className="text-gray-600">
              Sign in with Google to start your personalized learning journey
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6">
              <div className="flex items-center">
                <i className="fa-solid fa-exclamation-triangle mr-2"></i>
                <span>{error}</span>
              </div>
            </div>
          )}

          {/* Google Sign In Button */}
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full bg-white border-2 border-gray-200 text-gray-700 py-4 px-6 rounded-xl font-semibold hover:border-gray-300 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-100 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 mr-3"></div>
                <span>Signing in...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="group-hover:text-gray-900 transition duration-200">
                  Continue with Google
                </span>
              </div>
            )}
          </button>

          {/* Privacy Note */}
          <p className="text-xs text-gray-500 mt-6 text-center leading-relaxed">
            By continuing, you agree to our terms of service. We'll never share your personal information without your permission.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div className="group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition duration-300">
              <i className="fa-solid fa-brain text-white text-xl"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">AI-Powered</h3>
            <p className="text-sm text-gray-600">Intelligent content generation</p>
          </div>
          <div className="group">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition duration-300">
              <i className="fa-solid fa-images text-white text-xl"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Visual Learning</h3>
            <p className="text-sm text-gray-600">Interactive images & media</p>
          </div>
          <div className="group">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition duration-300">
              <i className="fa-solid fa-volume-up text-white text-xl"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Audio Support</h3>
            <p className="text-sm text-gray-600">Text-to-speech narration</p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fa-solid fa-star text-sm"></i>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600 font-medium">4.9/5 from 10,000+ learners</span>
          </div>
          <p className="text-gray-700 italic">
            "This AI tutor has transformed how I learn. The personalized lessons and visual aids make even complex topics easy to understand!"
          </p>
          <p className="text-sm text-gray-500 mt-2">- Sarah Chen, Student</p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;