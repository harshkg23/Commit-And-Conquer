import type { Metadata } from "next";
import { BlogHeader } from "@/components/blogs/blog-header";
import { BlogGrid } from "@/components/blogs/blog-grid";

export const metadata: Metadata = {
  title: "Blog | Dashboard",
  description: "Browse our latest blog posts and articles",
};

export default function BlogsPage() {
  return (
    <div className="ml-64 min-h-screen bg-background">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BlogHeader />
        {/* Increased margin-top to create more space between BlogHeader and BlogGrid */}
        <div className="mt-16">
          <BlogGrid />
        </div>
      </div>
    </div>
  );
}
