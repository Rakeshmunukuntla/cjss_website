'use client'

import { CheckCircle2, UploadCloud } from 'lucide-react'
import { useState } from 'react'

export default function UploadResumeSection() {
  const [file, setFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [status, setStatus] = useState<'idle' | 'uploading' | 'done'>('idle')

  const handleFile = (f: File) => {
    setFile(f)
    setStatus('idle')
  }

  const uploadFile = () => {
    if (!file) return
    setStatus('uploading')

    // simulate
    setTimeout(() => setStatus('done'), 2000)
  }

  return (
    <section
      // className="relative px-6 py-24 overflow-hidden text-white"
      className="px-6 py-24"
      // style={{
      //   backgroundImage:
      //     'linear-gradient(transparent 79px, rgba(148,163,184,0.16) 80px), linear-gradient(90deg, transparent 79px, rgba(148,163,184,0.16) 80px)',
      //   backgroundSize: '80px 80px',
      //   backgroundColor: 'rgb(2,6,23)',
      // }}
    >
      {/* Floating glow following cursor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 blur-3xl rounded-full" />
      </div>

      {/* Heading */}
      <div className="relative z-10 max-w-4xl mx-auto mb-16 text-center">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-300 to-purple-300">
          Upload Your Resume
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-white/70">
          Share your resume and our team will get back to you with suitable opportunities.
        </p>
      </div>

      {/* Upload Box */}
      <div
        className={`relative z-10 max-w-3xl mx-auto p-10 border-2 border-dashed rounded-3xl cursor-pointer
          transition-all duration-500 backdrop-blur-xl
          ${isDragging ? 'border-cyan-400 bg-cyan-400/10' : 'border-white/20 bg-white/5'}`}
        onDragOver={(e) => {
          e.preventDefault()
          setIsDragging(true)
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault()
          setIsDragging(false)
          if (e.dataTransfer.files.length > 0) {
            handleFile(e.dataTransfer.files[0])
          }
        }}
        onClick={() => document.getElementById('resumeInput')?.click()}
      >
        <div className="flex flex-col items-center">
          <UploadCloud className="w-16 h-16 text-cyan-300 mb-4 drop-shadow-[0_0_12px_rgba(0,200,255,0.5)]" />

          <p className="mb-2 text-xl font-semibold">
            {file ? 'File Selected' : 'Drag & Drop your resume here'}
          </p>

          <p className="mb-4 text-white/60">{file ? file.name : 'Supported formats: PDF, DOCX'}</p>

          <input
            id="resumeInput"
            type="file"
            className="hidden"
            accept=".pdf,.doc,.docx"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleFile(e.target.files[0])
              }
            }}
          />

          {/* Upload Button */}
          {file && (
            <button
              onClick={uploadFile}
              disabled={status === 'uploading'}
              className="px-8 py-3 mt-4 font-semibold text-black transition-all rounded-full shadow-lg bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 disabled:opacity-50"
            >
              {status === 'uploading'
                ? 'Uploading...'
                : status === 'done'
                ? 'Uploaded ✔'
                : 'Upload Resume'}
            </button>
          )}

          {/* Success message */}
          {status === 'done' && (
            <div className="flex items-center gap-2 mt-5 text-green-400">
              <CheckCircle2 className="w-6 h-6" />
              <span>Your resume has been uploaded successfully!</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
