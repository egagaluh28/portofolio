'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Upload, X, Loader2, FileText, CheckCircle } from 'lucide-react'
import Link from 'next/link'

interface FileUploadProps {
    label: string
    value: string
    onChange: (url: string) => void
    disabled?: boolean
    accept?: string
}

export function FileUpload({ label, value, onChange, disabled, accept = ".pdf" }: FileUploadProps) {
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
            console.error('Error uploading file:', error)
            alert('Failed to upload file')
        } finally {
            setIsLoading(false)
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
                    <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/20">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded-full">
                                <FileText className="w-6 h-6 text-primary" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium">Resume Uploaded</p>
                                <Link
                                    href={value}
                                    target="_blank"
                                    className="text-xs text-muted-foreground hover:text-primary underline"
                                >
                                    View File
                                </Link>
                            </div>
                        </div>
                        <Button
                            onClick={handleRemove}
                            disabled={disabled}
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="text-destructive hover:text-destructive/90"
                        >
                            <X className="w-5 h-5" />
                        </Button>
                    </div>
                ) : (
                    <div
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full border-2 border-dashed border-muted-foreground/25 hover:border-primary/50 cursor-pointer flex flex-col items-center justify-center p-6 gap-2 transition-colors bg-muted/50 hover:bg-muted rounded-lg"
                    >
                        <div className="p-3 rounded-full bg-background border shadow-sm">
                            <Upload className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div className="text-center">
                            <p className="text-sm font-medium">Click to upload Resume</p>
                            <p className="text-xs text-muted-foreground">PDF only (max 5MB)</p>
                        </div>
                    </div>
                )}

                <input
                    ref={fileInputRef}
                    type="file"
                    accept={accept}
                    className="hidden"
                    onChange={handleUpload}
                    disabled={disabled || isLoading}
                />

                {isLoading && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground animate-pulse">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Uploading file...
                    </div>
                )}
            </div>
        </div>
    )
}
