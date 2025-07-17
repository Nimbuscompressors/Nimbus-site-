import React from 'react';
import { Star, Settings, Zap, Award, FileText } from 'lucide-react';

const tabs = [
  { id: 'overview', label: 'Overview', icon: Star },
  { id: 'specifications', label: 'Technical Specs', icon: Settings },
  { id: 'features', label: 'Features & Benefits', icon: Zap },
  { id: 'applications', label: 'Applications', icon: Award },
  { id: 'documentation', label: 'Documentation', icon: FileText }
];

const ProductTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="border-b border-slate-700">
      <div className="flex space-x-1 p-4 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-shrink-0 ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <tab.icon className="mr-2 h-4 w-4" />
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductTabs;
