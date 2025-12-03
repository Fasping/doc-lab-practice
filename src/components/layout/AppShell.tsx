import React from 'react';

interface AppShellProps {
    children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
    return (
        <div className="flex h-screen bg-slate-100 font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-slate-100 flex-shrink-0 flex flex-col">
                <div className="p-6">
                    <h1 className="text-xl font-bold tracking-tight text-white">Doc Lab Practice</h1>
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-4">
                    <a href="#" className="block px-4 py-2 rounded-lg bg-slate-800 text-white font-medium">
                        Dashboard
                    </a>
                    <a href="#" className="block px-4 py-2 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
                        Documents
                    </a>
                    <a href="#" className="block px-4 py-2 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
                        Settings
                    </a>
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <p className="text-xs text-slate-500 text-center">v1.1 Dashboard</p>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Topbar */}
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 flex-shrink-0">
                    <h2 className="text-lg font-semibold text-slate-800">Documents</h2>

                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xs">
                            U
                        </div>
                        <span className="text-sm font-medium text-slate-600">User • demo@user.com</span>
                    </div>
                </header>

                {/* Scrollable Content */}
                <main className="flex-1 overflow-auto p-6">
                    <div className="max-w-6xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};
