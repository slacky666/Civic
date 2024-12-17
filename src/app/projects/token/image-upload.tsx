'use client';

import { ChangeEvent, useRef, useState } from 'react';
import { ImagePlus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageUploadProps {
  onImageChange: (file: File | null) => void;
  imagePreview: string | null;
  maxSizeInBytes?: number;
}

export function ImageUpload({ 
  onImageChange, 
  imagePreview,
  maxSizeInBytes = 512 * 1024  
}: ImageUploadProps) {

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (file) {

      if (file.size > maxSizeInBytes) {
        alert(`File is too large. Maximum size is ${maxSizeInBytes / 1024}KB.`);

        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        return;
      }

      const blobUrl = URL.createObjectURL(file);
      onImageChange(file);
    }
  };

  const handleRemoveImage = () => {
    // Revoke previous blob URL if it exists
    if (imagePreview && imagePreview.startsWith('blob:')) {
      URL.revokeObjectURL(imagePreview);
    }

    // Clear the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }

    // Notify parent component
    onImageChange(null);
  };

  return (
    <div className="flex flex-col items-center h-[8.6rem]">

      <input 
        ref={fileInputRef}
        type="file" 
        accept="image/jpeg,image/png,image/webp" 
        onChange={handleFileChange} 
        className="hidden" 
        id="image-upload" 
      />
      
      {imagePreview ? (
        <div className="relative">
          <img 
            src={imagePreview} 
            alt="Token Logo Preview" 
            className="w-full max-h-32 object-contain rounded-lg"
          />
            <Button 
                type="button"
                variant="destructive" 
                size="icon" 
                className="w-6 h-6 absolute top-0 right-0 m-2 bg-black"
                onClick={handleRemoveImage}
            >
            <Trash2 className="h-2 w-2" />
          </Button>
        </div>
      ) : (
        <label 
          htmlFor="image-upload" 
          className="flex flex-col items-center justify-center w-full h-full border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-100"
        >
          <ImagePlus className="h-6 w-6 text-gray-400" />
          <p className="mt-2 text-xs text-gray-500">
            Click to upload image
          </p>
        </label>
      )}
    </div>
  );
}
