// // pages/Dashboard.jsx

// import React from 'react';

// const Dashboard = () => {
//   // Dummy data — replace with real API data
//   const stats = [
//     { title: "Total Gestures Today", value: 128, icon: "🤟" },
//     { title: "Recognition Accuracy", value: "94%", icon: "🎯" },
//     { title: "Active Sessions", value: 3, icon: "🟢" },
//     { title: "Total Playback Sessions", value: 42, icon: "⏪" },
//   ];

//   const recentSessions = [
//     { id: 1, date: "2025-09-06", gestures: 18, accuracy: "95%" },
//     { id: 2, date: "2025-09-05", gestures: 22, accuracy: "92%" },
//     { id: 3, date: "2025-09-04", gestures: 12, accuracy: "97%" },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
//         {stats.map((stat, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4"
//           >
//             <div className="text-3xl">{stat.icon}</div>
//             <div>
//               <div className="text-gray-600 text-sm">{stat.title}</div>
//               <div className="text-xl font-bold">{stat.value}</div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Recent Sessions */}
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-2xl font-semibold mb-4">Recent Sessions</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full text-left text-sm">
//             <thead className="bg-gray-100 text-gray-600 uppercase">
//               <tr>
//                 <th className="px-4 py-2">Date</th>
//                 <th className="px-4 py-2">Gestures</th>
//                 <th className="px-4 py-2">Accuracy</th>
//               </tr>
//             </thead>
//             <tbody>
//               {recentSessions.map((session) => (
//                 <tr key={session.id} className="border-t">
//                   <td className="px-4 py-2">{session.date}</td>
//                   <td className="px-4 py-2">{session.gestures}</td>
//                   <td className="px-4 py-2">{session.accuracy}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Premium CTA */}
//       <div className="mt-10 p-6 bg-indigo-600 text-white rounded-lg flex flex-col md:flex-row justify-between items-center">
//         <div className="text-lg font-medium">
//           Unlock advanced analytics and unlimited sessions.
//         </div>
//         <a
//           href="/premium"
//           className="mt-4 md:mt-0 bg-white text-indigo-600 px-6 py-2 rounded hover:bg-gray-100 font-semibold transition"
//         >
//           Go Premium
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  User,
  Settings,
  LogOut,
  Moon,
  Sun,
  Activity,
  Clock,
  Trash2,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Hand,
  MessageSquare,
  BarChart3,
} from "lucide-react"

export default function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentGesture, setCurrentGesture] = useState("HELLO")
  const [buildingText, setBuildingText] = useState("Hello world")
  const [isTextToSpeech, setIsTextToSpeech] = useState(true)
  const [selectedLanguage, setSelectedLanguage] = useState("english")
  const [connectedGloves] = useState([
    { id: "SG-001", name: "Left Glove", isActive: true, batteryLevel: 85 },
    { id: "SG-002", name: "Right Glove", isActive: false, batteryLevel: 92 },
  ])
  const [recentGestures] = useState([
    { gesture: "HELLO", timestamp: "2:34 PM", confidence: 98 },
    { gesture: "WORLD", timestamp: "2:34 PM", confidence: 95 },
    { gesture: "HOW", timestamp: "2:33 PM", confidence: 97 },
    { gesture: "ARE", timestamp: "2:33 PM", confidence: 94 },
    { gesture: "YOU", timestamp: "2:33 PM", confidence: 96 },
  ])
  const [stats] = useState({
    gesturesDetected: 247,
    wordsSpoken: 89,
    activeTime: "2h 15m",
    accuracy: 96.5,
  })

  // Simulate real-time gesture detection
  useEffect(() => {
    const gestures = ["HELLO", "WORLD", "THANK", "YOU", "PLEASE", "HELP", "YES", "NO"]
    const interval = setInterval(() => {
      const randomGesture = gestures[Math.floor(Math.random() * gestures.length)]
      setCurrentGesture(randomGesture)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Simulate building text animation
  useEffect(() => {
    const texts = ["Hello world", "How are you", "Thank you very much", "Please help me"]
    let currentIndex = 0

    const interval = setInterval(() => {
      const targetText = texts[currentIndex]
      let currentText = ""
      let charIndex = 0

      const buildInterval = setInterval(() => {
        if (charIndex < targetText.length) {
          currentText += targetText[charIndex]
          setBuildingText(currentText)
          charIndex++
        } else {
          clearInterval(buildInterval)
          setTimeout(() => {
            currentIndex = (currentIndex + 1) % texts.length
          }, 2000)
        }
      }, 100)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-cyan-50/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-md border-b border-border/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SG</span>
              </div>
              <span className="text-xl font-bold text-foreground">SignGlove</span>
              <Badge variant="secondary" className="ml-2 bg-accent/10 text-accent border-accent/20">
                Dashboard
              </Badge>
            </motion.div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="hover:bg-accent/10"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white">
                        JD
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-card/90 backdrop-blur-sm" align="end">
                  <DropdownMenuItem className="hover:bg-accent/10">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-accent/10">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-accent/10">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20 container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Connected Gloves Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Card className="bg-card/60 backdrop-blur-sm border-border/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Hand className="w-5 h-5 text-accent" />
                  Connected Gloves
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {connectedGloves.map((glove) => (
                  <motion.div
                    key={glove.id}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-lg border transition-all duration-300 ${
                      glove.isActive
                        ? "border-accent/50 bg-accent/5 shadow-lg shadow-accent/20"
                        : "border-border/20 bg-muted/30"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {glove.isActive ? (
                          <Wifi className="w-4 h-4 text-accent" />
                        ) : (
                          <WifiOff className="w-4 h-4 text-muted-foreground" />
                        )}
                        <span className="font-medium">{glove.name}</span>
                      </div>
                      {glove.isActive && <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />}
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">ID: {glove.id}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Battery: {glove.batteryLevel}%</span>
                      <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-accent to-primary transition-all duration-300"
                          style={{ width: `${glove.batteryLevel}%` }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Live Gesture Feed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-card/60 backdrop-blur-sm border-border/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-primary" />
                    Live Gesture Detection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <motion.div
                      key={currentGesture}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4"
                    >
                      {currentGesture}
                    </motion.div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      Current Gesture
                    </Badge>
                  </div>

                  <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium">Building Text:</span>
                    </div>
                    <motion.div
                      key={buildingText}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-lg font-mono text-foreground min-h-[2rem] flex items-center"
                    >
                      {buildingText}
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                        className="ml-1 w-0.5 h-6 bg-accent"
                      />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Controls Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-card/60 backdrop-blur-sm border-border/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-accent" />
                    Controls
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {isTextToSpeech ? (
                          <Volume2 className="w-4 h-4 text-accent" />
                        ) : (
                          <VolumeX className="w-4 h-4 text-muted-foreground" />
                        )}
                        <span className="text-sm font-medium">Text + Speech</span>
                      </div>
                      <Switch
                        checked={isTextToSpeech}
                        onCheckedChange={setIsTextToSpeech}
                        className="data-[state=checked]:bg-accent"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Output Language</label>
                      <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                        <SelectTrigger className="bg-background/50">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-card/90 backdrop-blur-sm">
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="hindi">Hindi</SelectItem>
                          <SelectItem value="spanish">Spanish</SelectItem>
                          <SelectItem value="french">French</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                      <Trash2 className="w-4 h-4" />
                      Clear History
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Recent Gestures */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-card/60 backdrop-blur-sm border-border/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Recent Gestures
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    <AnimatePresence>
                      {recentGestures.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="flex items-center justify-between p-2 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors"
                        >
                          <div>
                            <div className="font-medium text-sm">{item.gesture}</div>
                            <div className="text-xs text-muted-foreground">{item.timestamp}</div>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {item.confidence}%
                          </Badge>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-card/60 backdrop-blur-sm border-border/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-accent" />
                    Today's Stats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Gestures Detected</span>
                      <span className="font-bold text-primary">{stats.gesturesDetected}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Words Spoken</span>
                      <span className="font-bold text-accent">{stats.wordsSpoken}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Active Time</span>
                      <span className="font-bold text-foreground">{stats.activeTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Accuracy</span>
                      <span className="font-bold text-primary">{stats.accuracy}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-card/60 backdrop-blur-sm border-t border-border/20 mt-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">SG</span>
              </div>
              <span className="text-lg font-bold text-foreground">SignGlove Dashboard</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Real-time gesture recognition • Making communication accessible
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
