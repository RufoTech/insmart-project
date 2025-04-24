import React from 'react';
import { Menu } from 'lucide-react';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center px-4 md:px-6">
      {/* Sidebar toggle button */}
      <button
        className="md:hidden p-2 rounded-md hover:bg-gray-100"
        onClick={toggleSidebar}
      >
        <Menu size={24} />
      </button>

      {/* Spacer to push profile to the right */}
      <div className="flex-1" />

      {/* Profile section (moved to the far right) */}
      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="text-sm font-medium">Ağazadə Mirsahib</div>
        </div>
        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium">
          A
        </div>
      </div>
    </header>
  );
};

export default Header;
