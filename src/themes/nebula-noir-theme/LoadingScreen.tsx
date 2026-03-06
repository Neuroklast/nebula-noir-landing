import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoadingScreenProps {
  onLoadingComplete?: () => void
  duration?: number
}

export default function LoadingScreen({ onLoadingComplete, duration = 3000 }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsComplete(true)
            onLoadingComplete?.()
          }, 500)
          return 100
        }
        return prev + 2
      })
    }, duration / 50)

    return () => clearInterval(interval)
  }, [duration, onLoadingComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center space-y-8"
            >
              <div className="relative inline-block">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 border-2 border-foreground/20"
                >
                  <div className="absolute inset-0 border-t-2 border-foreground" />
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="text-6xl spark-theme-bioshock-glow">NN</span>
                </motion.div>
              </div>

              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-sm tracking-[0.3em] text-muted-foreground"
                >
                  LOADING
                </motion.p>

                <div className="w-64 h-[2px] bg-border mx-auto overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                    className="h-full bg-foreground spark-theme-progress-glow"
                  />
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="text-xs tracking-[0.2em] text-muted-foreground"
                >
                  {progress}%
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-radial from-accent/20 via-transparent to-transparent blur-3xl pointer-events-none"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
