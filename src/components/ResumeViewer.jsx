import { motion, AnimatePresence } from 'framer-motion';
import { FileText, X } from 'lucide-react';

const ResumeViewer = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl h-full max-h-[90vh] bg-surfaceHighlight rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-surface">
              <div className="flex items-center gap-2 text-white">
                <FileText className="w-5 h-5 text-primary" />
                <h3 className="font-medium">Lalit Singh - Resume</h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 w-full bg-black/90 relative">
               {/* PDF Iframe embed */}
              <iframe
                src="/resume_lalit_singh.pdf#toolbar=0"
                className="w-full h-full border-none"
                title="Lalit Singh Resume PDF"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeViewer;
