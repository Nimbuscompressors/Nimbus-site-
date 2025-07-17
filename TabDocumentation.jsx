import React from 'react';
import { Button } from '@/components/ui/button';
import { Award, Download, FileText, Play } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const TabDocumentation = ({ product, onDownloadSpec }) => {
  const { toast } = useToast();

  const handleFeatureNotImplemented = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 3000,
    });
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-2xl font-bold text-white mb-6">Documentation & Resources</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-700/30 rounded-lg p-6">
          <h4 className="text-xl font-bold text-white mb-4">Technical Documentation</h4>
          <div className="space-y-3">
            <Button 
              onClick={() => onDownloadSpec(product)}
              variant="outline" 
              className="w-full justify-start border-slate-600 text-white hover:bg-slate-700"
            >
              <FileText className="mr-2 h-4 w-4" />
              Product Datasheet (PDF)
            </Button>
            <Button 
              onClick={handleFeatureNotImplemented}
              variant="outline" 
              className="w-full justify-start border-slate-600 text-white hover:bg-slate-700"
            >
              <FileText className="mr-2 h-4 w-4" />
              Installation Manual (PDF)
            </Button>
            <Button 
              onClick={handleFeatureNotImplemented}
              variant="outline" 
              className="w-full justify-start border-slate-600 text-white hover:bg-slate-700"
            >
              <FileText className="mr-2 h-4 w-4" />
              Operation & Maintenance Guide
            </Button>
            <Button 
              onClick={handleFeatureNotImplemented}
              variant="outline" 
              className="w-full justify-start border-slate-600 text-white hover:bg-slate-700"
            >
              <FileText className="mr-2 h-4 w-4" />
              Spare Parts Catalog
            </Button>
          </div>
        </div>

        <div className="bg-slate-700/30 rounded-lg p-6">
          <h4 className="text-xl font-bold text-white mb-4">Multimedia Resources</h4>
          <div className="space-y-3">
            <Button 
              onClick={handleFeatureNotImplemented}
              variant="outline" 
              className="w-full justify-start border-slate-600 text-white hover:bg-slate-700"
            >
              <Play className="mr-2 h-4 w-4" />
              Product Demo Video
            </Button>
            <Button 
              onClick={handleFeatureNotImplemented}
              variant="outline" 
              className="w-full justify-start border-slate-600 text-white hover:bg-slate-700"
            >
              <Play className="mr-2 h-4 w-4" />
              Installation Tutorial
            </Button>
            <Button 
              onClick={handleFeatureNotImplemented}
              variant="outline" 
              className="w-full justify-start border-slate-600 text-white hover:bg-slate-700"
            >
              <FileText className="mr-2 h-4 w-4" />
              3D CAD Models (STEP/IGES)
            </Button>
            <Button 
              onClick={handleFeatureNotImplemented}
              variant="outline" 
              className="w-full justify-start border-slate-600 text-white hover:bg-slate-700"
            >
              <FileText className="mr-2 h-4 w-4" />
              Technical Drawings (DWG)
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-lg p-6 border border-blue-500/20">
        <h4 className="text-xl font-bold text-white mb-4">Certification & Compliance</h4>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="bg-slate-700/50 rounded-lg p-4 mb-2">
              <Award className="h-8 w-8 text-blue-400 mx-auto" />
            </div>
            <span className="text-gray-300 text-sm">CE Certified</span>
          </div>
          <div className="text-center">
            <div className="bg-slate-700/50 rounded-lg p-4 mb-2">
              <Award className="h-8 w-8 text-blue-400 mx-auto" />
            </div>
            <span className="text-gray-300 text-sm">UL Listed</span>
          </div>
          <div className="text-center">
            <div className="bg-slate-700/50 rounded-lg p-4 mb-2">
              <Award className="h-8 w-8 text-blue-400 mx-auto" />
            </div>
            <span className="text-gray-300 text-sm">CSA Approved</span>
          </div>
        </div>
        <Button 
          onClick={handleFeatureNotImplemented}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <Download className="mr-2 h-4 w-4" />
          Download Certificates
        </Button>
      </div>
    </div>
  );
};

export default TabDocumentation;
