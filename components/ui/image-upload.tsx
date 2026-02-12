'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Upload, X, Loader2 } from 'lucide-react'

interface ImageUploadProps {
    label: string
    value: string
    onChange: (url: string) => void
    disabled?: boolean
}

export function ImageUpload({ label, value, onChange, disabled }: ImageUploadProps) {
    const [isLoading, setIsLoading] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        setIsLoading(true)

        try {
            const formData = new FormData()
            formData.append('file', file)

            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            })

            if (!response.ok) {
                throw new Error('Upload failed')
            }

            const data = await response.json()
            onChange(data.url)
        } catch (error) {
            console.error('Error uploading image:', error)
            alert('Failed to upload image')
        } finally {
            setIsLoading(false)
            // Reset input so allow re-uploading same file if needed (e.g. after deletion)
            if (fileInputRef.current) {
                fileInputRef.current.value = ''
            }
        }
    }

    const handleRemove = () => {
        onChange('')
    }

    return (
        <div className="space-y-2">
            <Label>{label}</Label>
            <div className="flex flex-col gap-4">
                {value ? (
                    <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden border border-border group">
                        <Image
                            src={value}
                            alt="Uploaded image"
                            fill
                            className="object-cover"
                        />
                        <button
                            onClick={handleRemove}
                            disabled={disabled}
                            type="button"
                            className="absolute top-2 right-2 p-1 bg-destructive text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                ) : (
                    <div
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full max-w-md aspect-video rounded-lg border-2 border-dashed border-muted-foreground/25 hover:border-primary/50 cursor-pointer flex flex-col items-center justify-center gap-2 transition-colors bg-muted/50 hover:bg-muted"
                    >
                        <div className="p-4 rounded-full bg-background border shadow-sm">
                            <Upload className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div className="text-center">
                            <p className="text-sm font-medium">Click to upload image</p>
                            <p className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF</p>
                        </div>
                    </div>
                )}

                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleUpload}
                    disabled={disabled || isLoading}
                />

                {isLoading && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground animate-pulse">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Uploading...
                    </div>
                )}
            </div>
        </div>
    )
}
