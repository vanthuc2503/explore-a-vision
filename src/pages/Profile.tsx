import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={user?.avatarUrl} alt={user?.name} />
                <AvatarFallback>
                  {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">Thông tin người dùng</CardTitle>
                {!user && (
                  <p className="text-sm text-muted-foreground">
                    Bạn chưa đăng nhập
                  </p>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {user ? (
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <span className="text-muted-foreground w-28">
                      Họ và tên:
                    </span>
                    <span className="font-medium">{user.name}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-muted-foreground w-28">Email:</span>
                    <span className="font-medium">{user.email}</span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link to="/login">
                    <Button variant="default">Đăng nhập</Button>
                  </Link>
                  <Link to="/signup">
                    <Button variant="outline">Đăng ký</Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
