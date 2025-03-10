"use client";

import { useEffect, useState } from "react";
import { BlogCard } from "@/components/blogs/blog-card";

export function BlogGrid() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch("http://localhost:8000/api/fetchblogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("Unable to fetch blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full p-6">
      <div className="w-full max-w-7xl">
        {loading ? (
          <p className="text-gray-600 text-center text-xl animate-pulse">
            Loading blogs...
          </p>
        ) : error ? (
          <p className="text-red-600 text-center text-2xl font-semibold">
            {error}
          </p>
        ) : blogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center text-xl">
            No blogs available
          </p>
        )}
      </div>
    </div>
  );
}
