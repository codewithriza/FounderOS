import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { getAllBlogPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, tutorials, and updates from the FounderOS team. Learn how to build and scale your AI SaaS.",
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="relative">
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            The <span className="gradient-text">FounderOS</span> Blog
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Insights, tutorials, and updates for AI SaaS builders.
          </p>
        </div>

        {/* Posts */}
        {posts.length === 0 ? (
          <div className="text-center">
            <p className="text-muted-foreground">
              No blog posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-xl border border-border/50 bg-card/50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold transition-colors group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {post.description}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {post.readingTime} min read
                      </div>
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
