import React, { useState, useEffect, useRef } from 'react';
import { Camera, Upload, Trash2, Check, Sparkles } from 'lucide-react';
import profileImage from "../assets/profile.jpeg";

export const ProfileImageUploader: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(profileImage);
  const [isHovered, setIsHovered] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [imageUrlInput, setImageUrlInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check localStorage for previously uploaded profile picture
  useEffect(() => {
    try {
      const saved = localStorage.getItem('hammas_profile_photo');
      if (saved) {
        setImageSrc(saved);
      }
    } catch {
      // localStorage may fail in restrictive environments
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Please choose an image under 5MB.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setImageSrc(result);
        try {
          localStorage.setItem('hammas_profile_photo', result);
        } catch {
          // ignore storage error if quota exceeded
        }
        setShowUploadModal(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (imageUrlInput.trim()) {
      setImageSrc(imageUrlInput.trim());
      try {
        localStorage.setItem('hammas_profile_photo', imageUrlInput.trim());
      } catch {}
      setImageUrlInput('');
      setShowUploadModal(false);
    }
  };

  const handleRemoveImage = () => {
    setImageSrc(null);
    try {
      localStorage.removeItem('hammas_profile_photo');
    } catch {}
    setShowUploadModal(false);
  };

  return (
    <div className="relative group mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]">
      {/* Decorative ambient tech glow behind portrait */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500500/30 via-blue-500/20 to-amber-500/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-700 animate-pulse pointer-events-none" />

      {/* Main Card Frame */}
      <div
        className="relative bg-slate-900/90 border border-slate-800/90 rounded-3xl p-3 sm:p-4 shadow-2xl backdrop-blur-xl transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Profile Image Viewport */}
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800 to-slate-950 border border-slate-700/50 flex flex-col items-center justify-center">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="Hammas Umer - WordPress & React Developer"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            /* Stylish Default Developer Graphic with initials & tech motifs */
            <div className="w-full h-full flex flex-col items-center justify-between p-6 bg-gradient-to-b from-slate-900 via-[#0d1526] to-[#080d17] text-center relative select-none">
              {/* Subtle background tech grid */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
                  backgroundSize: '24px 24px'
                }}
              />

              <div className="w-full flex items-center justify-between text-xs font-mono text-slate-400 z-10">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  Live Available
                </span>
                <span className="text-amber-500400/80">Dev Profile</span>
              </div>

              {/* Developer Monogram Avatar Graphic */}
              <div className="relative z-10 my-auto flex flex-col items-center">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-amber-500500/20 via-slate-800 to-amber-500/20 border-2 border-amber-500500/40 p-1 shadow-xl flex items-center justify-center">
                  <div className="w-full h-full rounded-xl bg-slate-900/90 flex flex-col items-center justify-center">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono">
                      HU
                    </span>
                    <span className="text-[10px] text-amber-500400 font-mono tracking-widest mt-1">
                      DEV•EXP
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-bold text-white tracking-tight">Hammas Umer</h3>
                  <p className="text-xs text-slate-400 mt-0.5">WordPress & React Developer</p>
                </div>
              </div>

              {/* Prompt to upload photo */}
              <div className="z-10 w-full">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(true)}
                  className="w-full py-2.5 px-3 rounded-xl bg-amber-500500/10 hover:bg-amber-500500/20 border border-amber-500500/30 text-amber-500300 text-xs font-medium flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <Camera className="w-4 h-4 text-amber-500400" />
                  <span>Upload Profile Picture</span>
                </button>
              </div>
            </div>
          )}

          {/* Quick upload hover action button (visible if image exists or on hover) */}
          {imageSrc && (
            <div
              className={`absolute top-3 right-3 transition-opacity duration-200 ${
                isHovered ? 'opacity-100' : 'opacity-0 sm:opacity-75'
              }`}
            >
              <button
                type="button"
                onClick={() => setShowUploadModal(true)}
                className="p-2.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/80 text-white hover:text-amber-500400 shadow-lg text-xs flex items-center gap-1.5 transition-all"
                title="Change or remove photo"
              >
                <Camera className="w-4 h-4" />
                <span className="text-[11px] font-medium hidden sm:inline">Change Photo</span>
              </button>
            </div>
          )}

          {/* Bottom badge on photo */}
          <div className="absolute bottom-3 left-3 right-3 py-2 px-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800/80 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span className="font-mono text-slate-300 text-[11px]">Hammas Umer</span>
            </div>
            <span className="text-amber-500400 font-mono text-[11px] font-semibold">4Y WP • 1Y React</span>
          </div>
        </div>

        {/* Caption below picture */}
        <div className="mt-3 flex items-center justify-between px-1 text-xs text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-400 text-[11px]">
            <Sparkles className="w-3.5 h-3.5 text-amber-500400" />
            Verified Developer
          </span>
          <button
            type="button"
            onClick={() => setShowUploadModal(true)}
            className="text-amber-500400 hover:text-amber-500300 text-[11px] underline underline-offset-2 transition-colors"
          >
            {imageSrc ? 'Update Photo' : 'Upload Your Photo'}
          </button>
        </div>
      </div>

      {/* Hidden native file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        className="hidden"
      />

      {/* Upload/Replace Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl relative">
            <h4 className="text-lg font-bold text-white mb-1">Set Profile Picture</h4>
            <p className="text-xs text-slate-400 mb-5">
              Upload your photo directly or provide an image link. When maintained in Cursor, you can also drop your image file inside <code className="text-amber-500300 font-mono">/public/hammas.jpg</code>.
            </p>

            <div className="space-y-4">
              {/* Option 1: File Upload */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-4 border-2 border-dashed border-slate-700 hover:border-amber-500500 rounded-xl flex flex-col items-center justify-center gap-2 bg-slate-800/40 hover:bg-amber-500500/5 transition-all text-slate-300 hover:text-amber-500400"
              >
                <Upload className="w-6 h-6" />
                <span className="text-sm font-medium">Select Image From Computer</span>
                <span className="text-[11px] text-slate-500">PNG, JPG, or WEBP up to 5MB</span>
              </button>

              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-slate-800"></div>
                <span className="flex-shrink mx-3 text-slate-500 text-xs font-mono uppercase">Or via URL</span>
                <div className="flex-grow border-t border-slate-800"></div>
              </div>

              {/* Option 2: Image URL input */}
              <form onSubmit={handleUrlSubmit} className="flex gap-2">
                <input
                  type="url"
                  placeholder="https://example.com/my-photo.jpg"
                  value={imageUrlInput}
                  onChange={(e) => setImageUrlInput(e.target.value)}
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-amber-500500"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-amber-500500 hover:bg-amber-500400 text-slate-950 text-xs font-semibold rounded-xl transition-all"
                >
                  Apply
                </button>
              </form>

              {/* Reset action if picture is set */}
              {imageSrc && (
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="w-full py-2.5 px-3 rounded-xl border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  Remove Current Photo & Restore Default
                </button>
              )}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setShowUploadModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
