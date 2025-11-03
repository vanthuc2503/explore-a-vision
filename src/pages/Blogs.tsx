import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { hanoiBlogs } from "@/lib/blogs";

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Travel Blog Hà Nội</h1>
          <p className="text-muted-foreground mt-1">
            Khám phá các địa danh nổi tiếng của Hà Nội qua những bài viết ngắn
            gọn, nhiều hình ảnh.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hanoiBlogs.map((blog) => (
            <Link key={blog.slug} to={`/blogs/${blog.slug}`} className="group">
              <Card className="h-full overflow-hidden hover:shadow-hover transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{blog.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    {blog.location}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
