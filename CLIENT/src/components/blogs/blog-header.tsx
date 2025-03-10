"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { UserNav } from "@/components/dashboard/user-nav";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";

export function BlogHeader() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 shadow-md py-5 z-50"
    >
      <div className="px-6 md:px-8 w-full">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          {/* Left Section: Logo and Title */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center space-x-4"
          >
            <h1 className="text-3xl font-extrabold text-white font-poppins tracking-tight drop-shadow-md">
              Blog Pag
            </h1>
            <p className="text-sm text-gray-200 font-light mt-1">
              Explore the world of ideas
            </p>
          </motion.div>

          
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center space-x-4"
          >
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-300" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-white focus:ring-2 focus:ring-indigo-400 transition-all duration-200"
              />
            </div>

            
            <Select defaultValue="newest">
              <SelectTrigger className="w-[160px] bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 transition-all duration-200 focus:ring-2 focus:ring-indigo-400">
                <SelectValue placeholder="Newest First" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg text-gray-800">
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>

            
            <UserNav />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
