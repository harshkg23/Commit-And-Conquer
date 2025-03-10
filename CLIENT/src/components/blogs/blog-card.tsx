import { Calendar, ThumbsUp, ThumbsDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useState } from "react";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  body: string;
  author: string;
  date: string;
}

interface BlogCardProps {
  id: number;
  title: string;
  body: string;
  author: string;
  date: string;
}

export function BlogCard({ id, title, body, author, date }: BlogCardProps) {
  const contentPreview = body.slice(0, 100) + "...";
  const [isUplifted, setIsUplifted] = useState(false);
  const [isDownlifted, setIsDownlifted] = useState(false);

  const authorInitial = author ? author.charAt(0) : "";

  const handleUpliftToggle = () => {
    setIsUplifted((prev) => !prev);
    if (isDownlifted) setIsDownlifted(false);
  };

  const handleDownliftToggle = () => {
    setIsDownlifted((prev) => !prev);
    if (isUplifted) setIsUplifted(false);
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg bg-white rounded-lg p-4 h-[400px] flex flex-col">
      <Link href={`/blogs/${id}`}>
        <CardHeader className="p-4 pb-0 flex-grow-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="mr-1 h-3 w-3" />
              {new Date(date).toLocaleDateString()}
            </div>
          </div>
          <h3 className="line-clamp-2 mt-2 text-xl font-semibold">{title}</h3>
        </CardHeader>
        <CardContent className="p-4 pt-2 flex-grow flex-shrink-0">
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {contentPreview}
          </p>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t p-4 flex-grow-0">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" alt={author} />
              <AvatarFallback>{authorInitial}</AvatarFallback>
            </Avatar>
            <span className="text-xs font-medium">
              {author || "Unknown Author"}
            </span>
          </div>
        </CardFooter>
      </Link>
      <div className="flex items-center justify-between mt-4 p-4 flex-grow-0 mt-auto">
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${
            isUplifted
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-white text-gray-600 border border-gray-300 hover:bg-green-50"
          }`}
          onClick={handleUpliftToggle}
        >
          <ThumbsUp className="h-5 w-5" />
        </div>
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${
            isDownlifted
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-white text-gray-600 border border-gray-300 hover:bg-red-50"
          }`}
          onClick={handleDownliftToggle}
        >
          <ThumbsDown className="h-5 w-5" />
        </div>
      </div>
    </Card>
  );
}
