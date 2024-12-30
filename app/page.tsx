


'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function VoiceAssistant() {
  const [apiKey, setApiKey] = useState('')
  const [model, setModel] = useState('llama3-groq-8b-8192-tool-use-preview')
  const [autoRefine, setAutoRefine] = useState(false)
  const [cacheLLM, setCacheLLM] = useState(false)
  const [instructions, setInstructions] = useState('Your task is to correct any errors, improve grammar and clarity, and ensure the transcript is coherent and accurate.')
  const [transcript, setTranscript] = useState('')
  const [isRecording, setIsRecording] = useState(false)

  const handleStartRecording = async () => {
    setIsRecording(true)
    try {
      const response = await fetch('/api/start-recording', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ apiKey, model }),
      })
      if (!response.ok) throw new Error('Failed to start recording')
      // Handle successful start of recording
    } catch (error) {
      console.error('Error starting recording:', error)
    }
  }

  const handleStopRecording = async () => {
    setIsRecording(false)
    try {
      const response = await fetch('/api/stop-recording', { method: 'POST' })
      if (!response.ok) throw new Error('Failed to stop recording')
      const data = await response.json()
      setTranscript(data.transcript)
      if (autoRefine) {
        handleRefineTranscript()
      }
    } catch (error) {
      console.error('Error stopping recording:', error)
    }
  }

  const handleRefineTranscript = async () => {
    try {
      const response = await fetch('/api/refine-transcript', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ transcript, instructions, model, cacheLLM }),
      })
      if (!response.ok) throw new Error('Failed to refine transcript')
      const data = await response.json()
      setTranscript(data.refinedTranscript)
    } catch (error) {
      console.error('Error refining transcript:', error)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <Image
        src="/neura-ai-logo-black.png"
        alt="Neura AI Logo"
        width={200}
        height={50}
        className="mb-8"
      />
      <h1 className="text-3xl font-bold mb-6">Project Voice</h1>
      
      <div className="mb-6">
        <Label htmlFor="apiKey">Groq API Key</Label>
        <Input
          id="apiKey"
          type="password"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter your Groq API key"
        />
      </div>

      <div className="mb-6">
        <Label htmlFor="model">Select Groq Model</Label>
        <Select value={model} onValueChange={setModel}>
          <SelectTrigger>
            <SelectValue placeholder="Select a model" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="llama3-groq-8b-8192-tool-use-preview">
              llama3-groq-8b-8192-tool-use-preview
            </SelectItem>
            {/* Add more models as needed */}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2 mb-6">
        <Switch
          id="auto-refine"
          checked={autoRefine}
          onCheckedChange={setAutoRefine}
        />
        <Label htmlFor="auto-refine">Auto Refine</Label>
      </div>

      <div className="flex items-center space-x-2 mb-6">
        <Switch
          id="cache-llm"
          checked={cacheLLM}
          onCheckedChange={setCacheLLM}
        />
        <Label htmlFor="cache-llm">Cache LLM Response</L'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function VoiceAssistant() {
  const [apiKey, setApiKey] = useState('')
  const [model, setModel] = useState('llama3-groq-8b-8192-tool-use-preview')
  const [autoRefine, setAutoRefine] = useState(false)
  const [cacheLLM, setCacheLLM] = useState(false)
  const [instructions, setInstructions] = useState('Your task is to correct any errors, improve grammar and clarity, and ensure the transcript is coherent and accurate.')
  const [transcript, setTranscript] = useState('')
  const [isRecording, setIsRecording] = useState(false)

  const handleStartRecording = async () => {
    setIsRecording(true)
    try {
      const response = await fetch('/api/start-recording', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ apiKey, model }),
      })
      if (!response.ok) throw new Error('Failed to start recording')
      // Handle successful start of recording
    } catch (error) {
      console.error('Error starting recording:', error)
    }
  }

  const handleStopRecording = async () => {
    setIsRecording(false)
    try {
      const response = await fetch('/api/stop-recording', { method: 'POST' })
      if (!response.ok) throw new Error('Failed to stop recording')
      const data = await response.json()
      setTranscript(data.transcript)
      if (autoRefine) {
        handleRefineTranscript()
      }
    } catch (error) {
      console.error('Error stopping recording:', error)
    }
  }

  const handleRefineTranscript = async () => {
    try {
      const response = await fetch('/api/refine-transcript', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ transcript, instructions, model, cacheLLM }),
      })
      if (!response.ok) throw new Error('Failed to refine transcript')
      const data = await response.json()
      setTranscript(data.refinedTranscript)
    } catch (error) {
      console.error('Error refining transcript:', error)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <Image
        src="/neura-ai-logo-black.png"
        alt="Neura AI Logo"
        width={200}
        height={50}
        className="mb-8"
      />
      <h1 className="text-3xl font-bold mb-6">Project Voice</h1>
      
      <div className="mb-6">
        <Label htmlFor="apiKey">Groq API Key</Label>
        <Input
          id="apiKey"
          type="password"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter your Groq API key"
        />
      </div>

      <div className="mb-6">
        <Label htmlFor="model">Select Groq Model</Label>
        <Select value={model} onValueChange={setModel}>
          <SelectTrigger>
            <SelectValue placeholder="Select a model" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="llama3-groq-8b-8192-tool-use-preview">
              llama3-groq-8b-8192-tool-use-preview
            </SelectItem>
            {/* Add more models as needed */}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2 mb-6">
        <Switch
          id="auto-refine"
          checked={autoRefine}
          onCheckedChange={setAutoRefine}
        />
        <Label htmlFor="auto-refine">Auto Refine</Label>
      </div>

      <div className="flex items-center space-x-2 mb-6">
        <Switch
          id="cache-llm"
          checked={cacheLLM}
          onCheckedChange={setCacheLLM}
        />
        <Label htmlFor="cache-llm">Cache LLM Response</Label>
      </div>

      <div className="mb-6">
        <Label htmlFor="instructions">Instructions</Label>
        <Textarea
          id="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Enter refinement instructions"
        />
      </div>

      <div className="mb-6">
        <Label htmlFor="transcript">Transcript</Label>
        <Textarea
          id="transcript"
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
          placeholder="Transcript will appear here"
          rows={10}
        />
      </div>

      <div className="flex space-x-4 mb-6">
        <Button onClick={isRecording ? handleStopRecording : handleStartRecording}>
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </Button>
        <Button onClick={handleRefineTranscript}>Refine Transcript</Button>
        <Button onClick={() => setTranscript('')}>Clear Transcript</Button>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">About Project Voice</h2>
        <p className="mb-4">
          Introducing Project Voice, an innovative real-time speech-to-text application that leverages cutting-edge AI technologies to provide seamless transcription and refinement capabilities. Powered by the Groq® LPU™ AI inference technology, Project Voice combines the speed of Whisper V3 Large for speech recognition with the intelligence of large language models (LLMs) for transcript refinement, all in real-time.
        </p>
        <p className="mb-4">
          Project Voice offers a user-friendly interface where users can easily record their speech, view the transcription, and optionally refine the output using LLMs. The application stands out for its ability to process and refine speech at Groq speed. Users can select from multiple LLMs, customize refinement instructions, and toggle automatic refinement for a tailored experience.
        </p>
        <p>
          Project Voice demonstrates the potential of combining multiple AI models in a single, cohesive application. By leveraging Groq's high-speed inference capabilities, it achieves remarkably low latency, making it suitable for real-time applications in various domains such as transcription services, accessibility tools, and voice-controlled interfaces.
        </p>
      </div>
    </div>
  )
}


