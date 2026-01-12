import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Navigation */}
            <nav className="flex justify-between items-center px-8 py-6">
                <h1 className="text-2xl font-bold text-white">Zabira</h1>
                <div className="space-x-6">
                    <Link href="#features" className="text-slate-300 hover:text-white">
                        Features
                    </Link>
                    <Link href="#pricing" className="text-slate-300 hover:text-white">
                        Pricing
                    </Link>
                    <Link href="/auth/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Sign In
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center px-8 py-32 text-center">
                <h2 className="text-5xl font-bold text-white mb-6">Welcome to Zabira</h2>
                <p className="text-xl text-slate-300 mb-8 max-w-2xl">
                    Your premier platform for managing and organizing your digital workspace
                </p>
                <Link href="/auth/signup" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700">
                    Get Started
                </Link>
            </section>

            {/* Features Section */}
            <section id="features" className="px-8 py-20 bg-slate-800/50">
                <h3 className="text-3xl font-bold text-white text-center mb-12">Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-slate-700 p-6 rounded-lg">
                            <h4 className="text-xl font-semibold text-white mb-3">Feature {item}</h4>
                            <p className="text-slate-300">Discover powerful capabilities designed for your workflow</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}